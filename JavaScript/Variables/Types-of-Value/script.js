(function () {
  'use strict';

  function run() {
    let name = "Maria";
    console.log(`Welcome, ${name}`);

    let age = 25;
    let price = 9.99;
    console.log(age + price);

    let isLoggedIn = true;
    console.log(isLoggedIn);

    let result;
    console.log(result);

    let shoppingCartPrice = null;
    console.log(shoppingCartPrice);

    console.log(typeof age);
  }

  var btn = document.querySelector('[data-run]');
  if (btn) {
    btn.addEventListener('click', function () {
      window.runToPanel(run, '[data-console]');
    });
  }
})();
