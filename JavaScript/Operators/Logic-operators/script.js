(function () {
  'use strict';

  function run() {
    let a = 10;
    let b = 3;
    console.log((a > 0) && (b > 0));
    console.log((a > 0) || (b > 0));
    console.log(!(a > 0));
  }

  var btn = document.querySelector('[data-run]');
  if (btn) {
    btn.addEventListener('click', function () {
      window.runToPanel(run, '[data-console]');
    });
  }
})();
