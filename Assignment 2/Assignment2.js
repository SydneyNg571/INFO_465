
const readlineSync = require('readline-sync');


console.log("Enter any integers to determine if:");
console.log("The product of any two entered integers equals a third integer.");
console.log("Enter your integers and when you're finished, type 'q' (or 'Q') and press Enter.\n");

// Array to hold the integers.
const numbers = [];

// Loop, repeat prompt for integers until exited
while (true) {
  let input = readlineSync.question("Enter an integer (or q to quit): ");
  input = input.trim();

  // exits the loop if user types 'q'
  if (input.toLowerCase() === "q") {
    break;
  }

  // Convert the input to a number
  const num = Number(input);

  // Ensures input is an integer
  if (Number.isNaN(num) || !Number.isInteger(num)) {
    console.log("Error: Invalid input. Please enter a valid integer or 'q' to quit.\n");
    continue;
  }

  // Adds the integer into the array
  numbers.push(num);
}

// Repeat the entered integers
if (numbers.length > 0) {
  console.log("\nYou entered: " + numbers.join(", "));
} else {
  console.log("\nNo integers were entered.");
}

// Determines if the product of any two integers equals a third
let conditionMet = false;
let foundTriple = null;

if (numbers.length >= 3) {
  // Loop through pairs of numbers
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const product = numbers[i] * numbers[j];
      // Looks for a third number that equals the product
      for (let k = 0; k < numbers.length; k++) {
        if (k === i || k === j) continue; // Skips the two numbers used in the product
        if (numbers[k] === product) {
          foundTriple = { a: numbers[i], b: numbers[j], c: numbers[k] };
          conditionMet = true;
          break;
        }
      }
      if (conditionMet) break;
    }
    if (conditionMet) break;
  }
}

// Output
if (conditionMet) {
  console.log(`\nCondition is met: ${foundTriple.a} x ${foundTriple.b} = ${foundTriple.c}`);
} else {
  console.log("\nCondition was not met");
}