// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// console.log(colors.reverse());
const colorsReverse = [];

// Reversing by for loop
// for (let i = 0; i < colors.length; i++) {
//     const color = colors[i];
//     colorsReverse.unshift(color);
// }

// Reversing by reversing for loop
// for (let i = colors.length - 1; i >= 0; i--) {
//     const color = colors[i];
//     colorsReverse.push(color);
// }

// Reversing by for of loop
// for (const color of colors) {
//     console.log(color);
//     colorsReverse.unshift(color);
// }
// console.log(colorsReverse);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

//Using for of loop 
const numbers = [12, 98, 5, 41, 23, 78, 46];
const newNumbers = [];
// for (const number of numbers) {
//     if( number % 2 === 0) {
//         console.log(number);
//         newNumbers.push(number);
//     }
// };

// Using for loop
// for (let i = 0; i < numbers.length; i++) {
//     if( numbers[i] % 2 === 0) {
//         // console.log(numbers[i]);
//         newNumbers.push(numbers[i]);
//     }
// }

// console.log(newNumbers);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// var concatArrays = ['Tom', 'Tim', 'Tin', 'Tik'];
// var concatString = "";
// for (const concatArray of concatArrays) {
//     console.log(concatArray);
//     var concatString = "";
//     console.log(concatString.concat(concatArray));
    
// }

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

// ----------------------*****---------------------------
// Task One
// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array


// Task Two 
// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


// Task Three
// 3. Checking Array Membership with ‘includes’
// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.


// Task Four
// 4. Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.



// Task Five
// 5. Combining Arrays
// Instructions:
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().