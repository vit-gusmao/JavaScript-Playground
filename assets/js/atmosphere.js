(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var narrow = window.matchMedia('(max-width: 767px)').matches;
  var saveData = navigator.connection && navigator.connection.saveData;

  if (reduceMotion || narrow || saveData) return;

  var canvas = document.querySelector('.bg-particles');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var particles = [];
  var count = parseInt(canvas.dataset.count, 10) || 18;
  var colors = (canvas.dataset.colors || '').split(',').filter(Boolean);
  if (!colors.length) {
    colors = [getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()];
  }

  var w, h, dpr;

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeParticle() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 1.2,
      a: 0.3 + Math.random() * 0.5,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }

  function init() {
    resize();
    particles = [];
    for (var i = 0; i < count; i++) particles.push(makeParticle());
  }

  function step() {
    if (document.hidden) {
      requestAnimationFrame(step);
      return;
    }
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.globalAlpha = p.a;
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(step);
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(init, 150);
  });

  init();
  requestAnimationFrame(step);
})();
