var amount = prompt("Enter the purchase amount: ");
if (amount < 50) {
  console.log("No discount");
} else if (amount >= 50 && amount <= 100) {
  console.log("5% discount");
} else if (amount >= 101 && amount <= 200) {
  console.log("10% discount");
} else if (amount > 200) {
  console.log("15% discount");
} else {
  console.log("The entered amount is not valid");
}
