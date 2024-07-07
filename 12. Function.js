function callFun() {
  console.log("function is called");
}

callFun();

function val() {
  return 2;
}

let num = val();
console.log(num);

// parameterized function
let invi = function (name="user") {
  console.log(`Hello : ${name}`);
  console.log(" OR hello", name);
};

invi("sbr");
invi();
