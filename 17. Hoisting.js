//var can be hoisted

test = 10;
console.log(test);
var test;

// function declaration

testing();
function testing() {
  console.log("hello test function");
}

// arrow function will not work
tests();
let tests = () => {
  console.log("hello  ");
};
