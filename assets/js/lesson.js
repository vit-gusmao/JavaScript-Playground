(function () {
  'use strict';

  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var figure = btn.closest('.code');
      var code = figure ? figure.querySelector('pre code') : null;
      if (!code) return;
      var text = code.textContent;

      function done() {
        var original = btn.textContent;
        btn.textContent = 'Copied';
        btn.classList.add('is-copied');
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove('is-copied');
        }, 1500);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {
          fallbackCopy(text, done);
        });
      } else {
        fallbackCopy(text, done);
      }
    });
  });

  function fallbackCopy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* no-op */ }
    document.body.removeChild(ta);
    done();
  }

  // Runs fn(), capturing every console.log call into the panel element
  // (identified by a CSS selector) while still logging to the real
  // DevTools console. Used by lesson script.js files behind "Run" buttons.
  window.runToPanel = function (fn, panelSelector) {
    var panel = document.querySelector(panelSelector);
    var original = console.log;
    var lines = [];
    console.log = function () {
      lines.push(Array.prototype.slice.call(arguments).map(String).join(' '));
      original.apply(console, arguments);
    };
    try {
      fn();
    } finally {
      console.log = original;
    }
    if (panel) {
      lines.forEach(function (line) {
        panel.textContent += (panel.textContent ? '\n' : '') + '> ' + line;
      });
    }
  };
})();
