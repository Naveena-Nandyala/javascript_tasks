var prime = prompt("Enter a Number");
console.log("Print Prime Numbers between 1 and " + prime);

function primeNumbers(num) {
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}
primeNumbers(prime);
