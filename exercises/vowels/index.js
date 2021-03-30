// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// using regex
function vowels(str) {
  let regex = /[aeiou]/gi;

  let matches = str.match(regex);

  return matches ? matches.length : 0;
}

module.exports = vowels;

// using a loop
// function vowels(str) {
//   let counter = 0;
//
//   // loop through string
//   for (let i of str) {
//     // check if array includes the string and increase the counter
//     if (["a", "e", "i", "o", "u"].includes(i.toLowerCase())) {
//       counter++;
//     }
//   }
//
//   return counter;
//   // print counter
// }
