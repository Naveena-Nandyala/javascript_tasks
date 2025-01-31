// let numbers = Array.from({ length: 30 }, (_, i) => i + 1);
// for (value in numbers) {
//   console.log(numbers[value]);
// }

// for (i in range(1, 31));
// {
//   console.log(i);
// }

// var num = Array.from({ length: 30 }, (_, i) => i + 1);
// for (value in num) {
//   console.log(num[value]);
// }

// for (index of num) {
//   console.log(index);
// }

var numbers = Array.from({ length: 30 }, (_, i) => i + 1);
console.log("Using for - in loop");
for (const values in numbers) {
  console.log(numbers[values]);
}

console.log("Using for - of loop");
for (const index of numbers) {
  console.log(index);
}
