(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  var overlay = document.querySelector('.nav-overlay');

  function closeNav() {
    document.body.classList.remove('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    document.body.classList.add('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = document.body.classList.contains('nav-open');
      if (isOpen) closeNav(); else openNav();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeNav);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) closeNav();
  });

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
