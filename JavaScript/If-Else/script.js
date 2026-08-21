(function () {
  'use strict';

  function run() {
    let age = 21;
    if (age >= 18) { console.log("You are an adult"); } else { console.log("You are a minor"); }

    let choice = 2;
    if (choice == 1) { console.log("choice 1"); } else if (choice == 2) { console.log("choice is 2"); } else { console.log("choice is 3"); }

    let x = 1;
    if (x == 1 || x == 2) { console.log("You typed 1 or 2"); }

    let age2 = 20;
    let message = age2 >= 18 ? "adult" : "minor";
    console.log(message);
  }

  var btn = document.querySelector('[data-run]');
  if (btn) {
    btn.addEventListener('click', function () {
      window.runToPanel(run, '[data-console]');
    });
  }
})();
