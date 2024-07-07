// String

let firstName = "srb";
let lastName = "chn";

console.log(firstName, lastName);

// Concatenation
// using + operator

let fullName = firstName + " " + lastName;
console.log(fullName);

// using template literals

let fullNames = `full name is ${firstName} ${lastName}`;
console.log(fullNames);

// Getting String Character
console.log(firstName[0]);

// Methods -------------------------------------------------------------------------------------

console.log(firstName.toUpperCase());

console.log(firstName.indexOf("r"), "index of r");

// -------------------------------------------------------------------------------------

let hobbies = " reading ,writing, running ,reading ";
// trim
console.log(hobbies, hobbies.trim());
console.log(
  "index of reading in untrimmed part : ",
  hobbies.indexOf("reading")
);

// indexOf
console.log(
  "index of reading in   trimmed part : ",
  hobbies.trim().indexOf("reading")
);

// lastIndexOf()
console.log(
  "last index of reading in untrimmed part : ",
  hobbies.lastIndexOf("reading")
);

// includes

console.log("includes coding in hobbies", hobbies.includes("coding"));

// slice method
console.log(hobbies.slice(4), "excludes 4 and includes till the end");
console.log(hobbies.slice(4, 20), "excludes 4 but includes 20 index");
console.log(hobbies.slice(19), "starts from 19th index");

// split
let favColors = "brown,black,red,white";
let arrColors = favColors.split(',')//comma is a separator
console.log(arrColors,'split converts into array')