// var variable
var a = 20;
var b = 20;
var c = a + b;
console.log("Var: " + c);

//let variable
let x = 30;
let y = 50;
let z = a * b;
console.log("let: " + z);

//const variable
const price1 = 250;
const price2 = 250;
const total = price1 + price2;
console.log("const: " + total);

/*Javascript DataTypes:
1.Number Data Type: Numbers can be written with, or without decimals:
*/
let x1 = 34.0;
let x2 = 34;
let x3 = 3.14;
console.log("x1: " + x1);
console.log("x2: " + x2);
console.log("x3: " + x3);

//2.string Data Type: Strings are written with double quotes or with single quotes
let str = "Javascript";

console.log("string: " + str);

//3.boolean Data Type: Booleans can only have two values: true or false
let m = 50;
let n = 50;

console.log(m == n);
console.log(m != n);

//4.undefined Data Type: A variable withot a value, has the value undefined. The type is also undefined.
let car;

console.log(car);
let vehicle = undefined;
console.log(vehicle);

//5. null Data Type:
let person = null;

console.log(person);

//6. object Data Type:
const details = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(
  "The name of the person is " + details.firstName + " " + details.lastName
);

//7. Array Data Type:
const colors = ["Red", "Pink", "Blue", "White", "Black", "Green"];

console.log("colors[1]: " + colors[1]);
console.log("colos[3]: " + colors[3]);

//Javascript Functions: A function is a block of code designed to perform a particular task.
function myFunction(p1, p2) {
  return p1 * p2;
}
let result = myFunction(15, 15);
console.log("function: " + result);

//typeof Operator
var num = 25;
console.log(typeof num);
let str2 = "Naveena";
console.log(typeof str2);
const pie = 3.14;
console.log(typeof pie);
let arr = [10, 20, 30, 40, 50];
console.log(typeof arr);
