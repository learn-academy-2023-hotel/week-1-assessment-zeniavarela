// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// if(fruit1.length > fruit2.length){
//     console.log(fruit1)
// }else{
//     console.log(fruit2)
// }

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// // Expected outcome: "cherry"

// if(fruit1.length > fruit2.length){
//     console.log(fruit1)
// }else{
//     console.log(fruit2)
// }


// Pseudo code:
// This program will allow the user to check which string contains more characters. 
// Condition needs to be set IOT return expected outcome of "banana" for set 1 and "cherry" for set 2, by comparing the greater string and outputting value when logged.


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)) <-- didnt work for me!

const comboArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(comboArrays)
console.log(comboArrays.length)
// Pseudo code: CONCAT both arrays together 
// CREATE new const to hold combined value
// LOG new concat with length

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"
const reversedCohort = currentCohort.split("").reverse().join("")
console.log(reversedCohort)
// Pseudo code: DIVIDE string into array of the characters using split
// REVERSE the array --> ['3', '2', '0', '2', 'f', 'l', 'o', 'G']
//  JOIN the reversed characters into a new string 

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

const odds = stockExchange.filter((num) => num % 2 === 1)
console.log(odds)


// Pseudo code: (This doesnt work for me to also include -5. A little lost)
// USE filter built in that returns true when the number is odd, and false otherwise.
// RETURNS an array of all the odd numbers in the original array.

