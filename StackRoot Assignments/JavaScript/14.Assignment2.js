// Question 1
// Write a function to calculate the factorial of a given number using looks

// Taking input from the user.
const prompt = require('prompt-sync')();
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

// Question 2
// Generate the first n numbers in the fibonacci sequence using a loop.

// Taking input from the user
const num = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


// Question 3
// Create a function that checks if the given number is prime number or not, using a loop to iterate through possinle divisors.
const num1 = parseInt(prompt("Enter a number: "));
let isPrime = true;

// check if number is equal to 1
if (num1 === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (num1 > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < num1; i++) {
        if (num1 % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num1} is a prime number`);
    } else {
        console.log(`${num1} is a not prime number`);
    }
}
// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

// Question 4
// Use a loop to filter out even or odd integers from an array of integers.
const num2 = prompt("Enter a list of numbers separated by commas:");
const numbers = num2.split(',').map(Number);

let even = [];
for(let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 == 0)
	even.push(numbers[i]);
}
console.log(`Even numbers in an array are: ${even}`);


















//Trying to experiment:
// Function to filter even or odd integers from an array
function filterEvenOrOdd(numbers, filterType) {
    const filteredNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if ((numbers[i] % 2 === 0 && filterType === 'even') ||
          (numbers[i] % 2 !== 0 && filterType === 'odd')) {
        filteredNumbers.push(numbers[i]);
      }
    }
  
    return filteredNumbers;
  }
  
  // Get user input as a comma-separated string of numbers
  const inputStr = prompt("Enter a list of numbers separated by commas:");
  const inputNumbers = inputStr.split(',').map(Number);
  
  if (inputNumbers.some(isNaN)) {
    console.log("Invalid input. Please enter a list of numbers separated by commas.");
  } else {
    const filterType = prompt("Filter even or odd numbers? (even/odd)").toLowerCase();
  
    if (filterType === 'even' || filterType === 'odd') {
      const filteredArray = filterEvenOrOdd(inputNumbers, filterType);
      console.log(`Filtered ${filterType} numbers: ${filteredArray.join(', ')}`);
    } else {
      console.log("Invalid filter type. Please enter 'even' or 'odd'.");
    }
  }
  