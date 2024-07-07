// function passed as argument

let upperCase = (str) => str.toUpperCase();
let lowerCase = (str) => str.toLowerCase();

let transformer = (str, fun) => {
  return fun(str);
};

console.log(transformer("hello", upperCase));
console.log(transformer("HELlo", lowerCase));

// function returns another function

let compliment = function (msg) {
  return function (name) {
    console.log(`${msg} ${name}`);
  };
};
// mehtod 1
// compliment("hello coder ")("sourabh")

// method 2
let complimented = compliment("hello coder");
complimented("Sourabh")