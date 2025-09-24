const readline = require('readline-sync');

// 1. Use readlineSync.question() to prompt a user for input
let userInput = readline.question('Enter string for processing: ');

// 2. Prompt a user for an index number to find the character at that index
let findIndex = readline.questionInt('Enter index to search from above input: ');

// 3. Use bracket notation to access the character
let foundChar = userInput[findIndex];

// 4. Print out the character
console.log(`The character at index ${findIndex} in ${userInput} is "${foundChar}"`);
if (!foundChar) {
  console.log(`...because there is no character at index ${findIndex}`);
}
