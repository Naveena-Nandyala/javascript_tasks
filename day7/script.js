//Task 1 : Find the square of a number

var num = prompt("Enter a number to calculate square of the number");
console.log("Square of the number", num);
function square(num) {
  console.log(num * num);
}

square(num);

//Task 2 : Average Task

let arr = [2, 5, 2];
function average(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

let output = average(arr);
console.log("Average of the numbers in an Array:", output);

//Task 3 : Vowel Task

var string = prompt("Enter a String");
function isVowel(str) {
  const vowels = /[aeiou]/i; //case insensitive
  if (vowels.test(str)) {
    console.log("The String contains Vowels");
  } else {
    console.log("The String does not contains Vowels");
  }
}

isVowel(string);

//Task 4: Temperature Converter

let temp = prompt("Enter the Temperature: ");
let scale = prompt("Enter the scale: ");

function convertTemperature(temp, scale) {
  if (scale == "F") {
    return (((temp - 32) * 5) / 9).toFixed(2) + "°C";
  } else if (scale == "C") {
    return (temp * 9) / 5 + 32 + "°F";
  } else {
    return "Not Valid";
  }
}

let res = convertTemperature(temp, scale);
console.log(res);
