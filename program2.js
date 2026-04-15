// Jasmine Dunn

const readlineSync = require('readline-sync');

let n = Number(readlineSync.question("Enter how many Fibonacci numbers to generate: "));

if (n <= 0 || isNaN(n)) {
  console.log("Please enter a number greater than 0.");
} else {
  let fib = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) fib.push(0);
    else if (i === 1) fib.push(1);
    else fib.push(fib[i - 1] + fib[i - 2]);
  }

  let oddFib = fib.filter(num => num % 2 !== 0);
  
  console.log("Full sequence:", fib);
  console.log("Odd Fibonacci numbers:", oddFib);
}