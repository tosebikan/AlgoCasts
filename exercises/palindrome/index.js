// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// using array.every method to compare each element with it s mirrored element
function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;

// using array method to reverse
// function palindrome(str) {
//   let reverse = str
//     .split("")
//     .reverse()
//     .join("");
//
//   return str === reverse;
// }

// // using reduce to reverse & comparing to original word
// function palindrome(str) {
//   let word = str;
//   let reverse = str.split("").reduce((rev, char) => {
//     return char + rev;
//   }, "");
//   // console.log({ word, reverse });
//
//   return word === reverse ? true : false;
// }
