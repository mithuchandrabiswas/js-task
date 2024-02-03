


/* Module 20-7: Sum of All Numbers In An Array Using Function
* Objective: /Write a function to give me the sum of all numbers in an array.
01. Step-1: Declare a function
02. Step-2: Call Cheak whether the function is called properly
03. Step-3: Set a parameter's
04. Step-4: Pass the parameter's and check whether parameter is passed in a proper format.
05. Step-5: Do the function tasks (Step by Step)
*/
function sumOfNumber(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
        // console.log(sum);
    }
    return sum;
}
const numbs = [54, 62, 12, 6];
const sum = sumOfNumber(numbs);
// console.log("Sum of number is :", sum);

// Module-20-8: Return all the even numbers of an array
/*
01. Create function that will return only the even numbers
02. return the sum of even numbers
*/
// collect all even number function
function collectEvenNumbers(numbers) {
    const evenNums = [];
    for(const number of numbers) {
        // console.log(number);
        if(number % 2 === 0) {
            // console.log(number);
            evenNums.push(number);
        }
    }
    return evenNums;
};
const numberArray = [23, 65, 44, 78, 98, 45];
const evenNumbers = collectEvenNumbers(numberArray);
console.log("All even number array is :", evenNumbers);

// All Even Number Sum Function
function evenSumFunc(numbers) {
    let sum = 0;
    for (const number of numbers) {
        // console.log(number);
        if (number % 2 === 0) {
            sum += number;
            // console.log(number);
        }
    }
    return sum
};

const evenSum = evenSumFunc(numberArray);
console.log("All even number sum is :", evenSum);






// Task-1
// Take four parameters. Multiply the four numbers and then return the result
function multiFun(num1,num2,num3,num4){
    const multy = num1 * num2 * num3 * num4;
    return multy
}
const result = multiFun(4,5,6,7);
console.log("Here is multiply result",result);


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function checkEvenOddFunc(num1){
    if (num1 % 2 === 0) {
        const result = num1 * 2;
        return result;
    } else {
        const result = num1 / 2;
        return result;
    }
}
console.log("2nd task result is:", checkEvenOddFunc(3));
// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(numbers,arrLength) {
    let sum = 0;
    for(const number of numbers) {
        // console.log(number);
        sum += number;
    }
    return sum/arrLength;
}
const myArray = [34,67,89,23,56,60,99];
const arrayLength = myArray.length;
const result2 = make_avg(myArray,arrayLength);
console.log("Third Task result is:", result2);


// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
const num = 68;
const result3 = odd_even(num);
console.log("Fifth Task result is:" , result3);