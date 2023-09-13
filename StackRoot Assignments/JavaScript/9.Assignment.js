// Question 1
// write a func that takes a string as input and returns the reverse of that string.
const prompt = require('prompt-sync')();

function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);


// Question 2
// write a func that counts the number of vowels in a given string.
function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const new_string = prompt('Enter a string: ');

const new_result = countVowel(new_string);

console.log(new_result);

// Question 3
// write a func to check if a fiven string is a pallindrome or not
function checkPalindrome(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const S_string = prompt('Enter a string: ');

const value = checkPalindrome(S_string);

console.log(value);

// Question 4
// write a func that converts a sentence into a title case.
function sentenceCase(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
 
    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}
 
console.log(sentenceCase('i am soumen satpathy'));


//ARRAYS
// Question 6
// Write a function that calculates the sum of all elements in an array.

function sumArrayElements(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  const inputArray = [4, 3, 7, 23, 7];
  const array_result = sumArrayElements(inputArray);
  console.log(array_result); 


// Question 7
// Write a function to find the maximum and minimum values in an array.
function findMinMax() {
	let Arr = [111, 99, 90, 100, 101];

	let minValue = Math.min(...Arr);
	let maxValue = Math.max(...Arr);
	
	console.log("Minimum element is:" + minValue);
	console.log("Maximum Element is:" + maxValue);
}

findMinMax()

// Question 7
// Write a function that removes duplicate of a specified size.
let arr = ["honda", "yamaha", "suzuki",
          "suzuki", "honda", "triumph"];
  
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
findMinMax()



// Question 8
// Write a function that divides an array into smaller arrays of a specified size.

let chunk = 4;
 
let array = [1, 2, 3, 4, 5, 6, 7, 8];
 

let arr1 = array.slice(0, chunk);
let arr2 = array.slice(chunk, chunk + array.length);
 

console.log('Array1: ' + arr1 + '\nArray2: ' + arr2);