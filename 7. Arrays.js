let chars = ["a", "b", "c", "d", "e"];

chars[0] = "z";
console.log(chars);

// methods
console.log(typeof chars.join("-"));
console.log(chars.join("-"));

let nxtChars = ["f", "g", "h", "i", "j"];
// console.log(chars.concat(nxtChars));

let allChars = chars.concat(nxtChars);

console.log(allChars);
console.log(allChars.length, "length");

console.log(allChars.push("k"));
console.log(allChars);

allChars.pop();
console.log(allChars);
