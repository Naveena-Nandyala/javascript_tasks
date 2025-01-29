// Task1 : Print Even Numbers
console.log("Task1 : Print Even Numbers from 1 to 20");
console.log("Even Numbers are: ");
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Task2 : Print Multiples of 5 upto 50

console.log("Task2 : Multiples of 5 from 1 to 50:");
for (i = 1; i <= 50; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

//Task3 : Print factorial of a given number

console.log("Task3 : Calculates the factorial of a given number");
var num = prompt("Enter a number to calculate the factorial: ");
let fact = 1;
if (num < 0) {
  console.log("Negative number does not exist");
} else if (num == 0) {
  console.log("Factorial of " + num + " is 1");
} else {
  for (i = 1; i <= num; i++) {
    fact *= i;
  }
}
console.log("The factorial of " + num + " is " + fact);

// Task4 : Print the Alphabet

console.log("Task4 : Print the Alphabets from A to Z");
for (i = 65; i <= 90; i++) {
  console.log(String.fromCharCode(i));
}

//Task5 : Print Multiplication Table

console.log("Task5 : Print the Multiplication Table from numbers 1 through 5");
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
  console.log(" ");
}
