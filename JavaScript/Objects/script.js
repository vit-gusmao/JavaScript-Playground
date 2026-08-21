(function () {
  'use strict';

  function run() {
    const person = {
      completeName: "João Rodrigo da Silva",
      age: 15,
      city: "Berlin",
      showMessage: function () { return "Welcome"; }
    };
    console.log(person.completeName);
    console.log(person.showMessage());
  }

  var btn = document.querySelector('[data-run]');
  if (btn) {
    btn.addEventListener('click', function () {
      window.runToPanel(run, '[data-console]');
    });
  }
})();
