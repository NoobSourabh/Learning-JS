let car = {
  color: "black",
  model: "2024",
  company: "honda",
};

console.log(car);

console.log(car.company);

let propertyName = "color";
console.log(car[propertyName]);

// modify properties
car[propertyName] = "pink";
console.log(car[propertyName]);

// delete properties of object
let obj = {
  prop1: "value1",
  prop2: "value2",
};

console.log(obj)
delete obj.prop1;
console.log(obj)
