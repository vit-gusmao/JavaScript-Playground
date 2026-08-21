(function () {
  'use strict';

  function run() {
    const phrases = ["Hello", "JavaScript", "Playground"];
    for (let i = 0; i < phrases.length; i++) {
      console.log(phrases[i]);
    }

    const numbers = [10, 20, 30];
    let sum = 0;
    for (const num of numbers) { sum += num; }
    console.log(sum);
  }

  var btn = document.querySelector('[data-run]');
  if (btn) {
    btn.addEventListener('click', function () {
      window.runToPanel(run, '[data-console]');
    });
  }
})();
