//Task1: Reverse a String

let str = "Hello";
let rev = "";
for (i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}
console.log("Reverse of a String : " + rev);

//Task2: Find Evensum and Oddsum

var arr = [23, 54, 67, 64, 46, 95, 98];
console.log("Even Numbers: ");
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
console.log("Odd Numbers: ");
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    console.log(arr[i]);
  }
}
evensum = 0;
oddsum = 0;
for (i = 0; i <= arr.length - 1; i++) {
  if (arr[i] % 2 == 0) {
    evensum += arr[i];
  } else {
    oddsum += arr[i];
  }
}

console.log("Even Sum: " + evensum);
console.log("Odd Sum: " + oddsum);
if (evensum > oddsum) {
  console.log(evensum + " is greater");
} else {
  console.log(oddsum + " is greater");
}
