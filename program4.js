// Jasmine Dunn

const readlineSync = require('readline-sync');

// Fixed: readlineSync.question() returns a STRING.
let start = parseInt(readlineSync.question("Enter start number: "));

// Fixed: Same issue as above
let end = parseInt(readlineSync.question("Enter end number: "));

let count = 0;

// Fixed: Loop logic is correct, but it only works properly once start and end are numbers.
for (let i = start; i <= end; i++) {

    // Fixed: Original code used division (i / 2 == 0), which is incorrect for checking even numbers.
    if (i % 2 === 0) {

        // Fixed: Original code used "count =+ 1" which resets count to 1 each time.
        count += 1;
    }
}

// Fixed: Output formatting kept the same but now displays the correct count.
console.log("Even numbers between " + start + " and " + end + ": " + count);