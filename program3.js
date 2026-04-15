// Jasmine Dunn

const readlineSync = require('readline-sync');

let input = readlineSync.question("Enter a string: ");

input = input.toLowerCase();

let frequency = {};

for (let i = 0; i < input.length; i++) {
  let letter = input[i];

  if (letter >= 'a' && letter <= 'z') {
    if (frequency[letter]) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
}

console.log("Letter Frequency:");
for (let letter in frequency) {
  console.log(letter + ": " + frequency[letter]);
}

let seen = new Set();
let firstRepeat = null;

for (let i = 0; i < input.length; i++) {
  let letter = input[i];

  if (letter >= 'a' && letter <= 'z') {
    if (seen.has(letter)) {
      firstRepeat = letter;
      break;
    }
    seen.add(letter);
  }
}

if (firstRepeat) {
  console.log("First repeated letter:", firstRepeat);
} else {
  console.log("No repeated letters found.");
}