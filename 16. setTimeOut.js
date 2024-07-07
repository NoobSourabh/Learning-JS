// setTimeout(func|code,delay,arguments..)

function greeting() {
  console.log("welcome to our code");
}

setTimeout(greeting, 5000);

setTimeout(function hello() {
  console.log("hello");
}, 5000);

setTimeout(() => {
  console.log("hello arrow function");
}, 2000);
