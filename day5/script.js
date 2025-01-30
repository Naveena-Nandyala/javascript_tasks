//Task1: Reverse a String

let str = "Hello";
let rev = "";
for (i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}
console.log("Reverse of a String : " + rev);

//Task2: Find Evensum and Oddsum

var arr = [1, 2, 3, 4, 5, 6];
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
