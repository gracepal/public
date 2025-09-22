const readline = require('readline-sync');

// Greet user and track user correct responses
let name = readline.question('What is your name? ');
console.log(`\nHello, ${name[0].toUpperCase() + name.slice(1)}!\n`);
let total = 0;
let correct = 0;

// Question1: Data
let expected = 'stored, processed, or interacted with';
let actual = readline.question('In JavaScript, any piece of data can be ...?\n➡️ ');
checkAnswer(actual, expected);

// Question2: Data Type Categories
expected = ['primitive', 'complex'];
actual = readline.question('\nWhat are the 2 categories of data types? (use comma separator)\n➡️ ');
checkAnswer(actual, expected);

// Question3: Primitive Data Types
expected = ['string', 'number', 'boolean', 'null', 'undefined', 'bigint', 'symbol'];
actual = readline.question('\nWhat are 7 primitive data types? (use comma separator)\n➡️ ');
checkAnswer(actual, expected);

// Question4: Complex Data Type
expected = ['object', 'array'];
actual = readline.question('\nWhat are the 2 complex data types? (use comma separator)\n➡️ ');
checkAnswer(actual, expected);

// Question5: Operations
expected = '42';
actual = readline.question("\nWhat is the output of adding '4' with 2?\n➡️ ");
checkAnswer(actual, expected);
console.log('📝 This is because a string plus a number is a string.');

// Print result
console.log(`\n-----\nYou got ${correct}/${total} correct.`);
if (correct < total) {
  console.log(`Please try again.`);
}

// Helper to compare user response to expected response
function checkAnswer(userResponse, correctValue) {
  let matching = false;
  if (typeof expected === 'object' && Array.isArray(expected)) {
    expected = correctValue.slice().sort();
    expected = JSON.stringify(expected);
    actual = userResponse.split(',').map((val) => val.trim());
    actual = JSON.stringify(actual.slice().sort());
    correctValue = correctValue.join(', ');
  } else {
    actual = userResponse;
    expected = correctValue;
  }

  if (actual === expected) {
    console.log('✅ Correct!');
    correct++;
  } else {
    console.log(`❌: "${correctValue}"`);
  }
  total++;
}
