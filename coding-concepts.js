// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: The new given value of the original array + indigo, which equals 5. 
// b) Verify and explain: Correct. It added indigo as an item so the value is now 5.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10. Because it counts each character in the cohort string, including spaces.
// b) Verify and explain: Correct. It counted every character in "LEARN 2023", including the space.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: Im not sure. Maybe the character at the 4th index, which is "o"
// b) Verify and explain: Correct! Its a zero index so it logged the character at 4 index. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Maybe it will log the item in the array at index 1. 
// b) Verify and explain: Correct. It looked for the item at the 1 index. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: Each item in the array will now be all caps
// b) Verify and explain: It was not a function. You would have to deconstruct the array to a string first, and then make it CAPS, and then back to an array again. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: the length of the array (4)
// b) Verify and explain: "number" was the correct answer. i think because there was no arguement, it just did the 0 index length.
