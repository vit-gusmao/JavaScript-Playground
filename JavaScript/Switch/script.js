(function () {
  'use strict';

  function run() {
    let select = 2;
    switch (select) {
      case 1:
        console.log("number 1 is selected");
        break;
      case 2:
        console.log("number 2 is selected");
        break;
      default:
        console.log("invalid option");
        break;
    }
  }

  var btn = document.querySelector('[data-run]');
  if (btn) {
    btn.addEventListener('click', function () {
      window.runToPanel(run, '[data-console]');
    });
  }
})();
