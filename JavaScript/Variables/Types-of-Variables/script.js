(function () {
  'use strict';

  function run() {
    let number = 3;
    number = 4;
    console.log(number);

    const PI = 3.14;
    console.log(PI);

    let helloWorld = "Hello World!";
    console.log(helloWorld);
  }

  var btn = document.querySelector('[data-run]');
  if (btn) {
    btn.addEventListener('click', function () {
      window.runToPanel(run, '[data-console]');
    });
  }
})();
