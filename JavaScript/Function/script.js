(function () {
  'use strict';

  function run() {
    function welcome() { console.log("welcome"); }
    welcome();

    function caller(message, name) { console.log(message, name); }
    caller("Hello", "André");

    function callerNick(nickname) { return `Welcome, ${nickname}`; }
    console.log(callerNick("André"));

    const calling = { showMessage: function () { return "Hello"; } };
    console.log(calling.showMessage());
  }

  var btn = document.querySelector('[data-run]');
  if (btn) {
    btn.addEventListener('click', function () {
      window.runToPanel(run, '[data-console]');
    });
  }
})();
