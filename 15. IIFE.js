// immediately invoked function expression
// executed only once

// now this is expression
(function () {
  console.log("this will never execute again ");
})();
(function (name) {
  console.log("this will never execute again ", name);
})("IIFE");
