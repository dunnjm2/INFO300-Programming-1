// Jasmine Dunn

const readlineSync = require('readline-sync');

let input = readlineSync.question("Enter a positive number (<= 1000): ");
let n = parseInt(input);

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let primes = [];

for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

let gaps = [];

for (let i = 1; i < primes.length; i++) {
    gaps.push(primes[i] - primes[i - 1]);
}

if (gaps.length === 0) {
    console.log("Not enough primes to calculate gaps.");
} else {
    let maxGap = Math.max(...gaps);
    let index = gaps.indexOf(maxGap);

    let sum = gaps.reduce((a, b) => a + b, 0);
    let avg = (sum / gaps.length).toFixed(2);

    console.log("Prime numbers:", primes.join(", "));
    console.log(`Largest gap is ${maxGap} (between ${primes[index]} and ${primes[index + 1]})`);
    console.log(`Average gap: ${avg}`);
}