(function () {
  'use strict';

  var logBtn = document.querySelector('[data-run="log"]');
  var alertBtn = document.querySelector('[data-run="alert"]');
  var panel = document.querySelector('[data-console-log]');

  if (logBtn && panel) {
    logBtn.addEventListener('click', function () {
      console.log('Hello World!');
      panel.textContent += (panel.textContent ? '\n' : '') + '> Hello World!';
    });
  }

  if (alertBtn) {
    alertBtn.addEventListener('click', function () {
      alert('Hello World!');
    });
  }
})();
