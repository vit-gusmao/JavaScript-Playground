(function () {
  'use strict';

  function run() {
    const names = ["André", "José", "Gustavo"];
    console.log(names[0], names[1], names[2]);

    const bag = [
      ["cellphone", "earphone"],
      ["keys", "money", "ID"],
      ["pendrive", "coins"]
    ];
    console.log(bag[0]);
    console.log(bag[1]);
    console.log(bag[2]);
  }

  var btn = document.querySelector('[data-run]');
  if (btn) {
    btn.addEventListener('click', function () {
      window.runToPanel(run, '[data-console]');
    });
  }
})();
