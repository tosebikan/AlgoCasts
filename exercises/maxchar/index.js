// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// refactor
function maxChar(str) {
  let hash = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    hash[char] = hash[char] + 1 || 1;
  }

  for (let char in hash) {
    if (hash[char] > max) {
      max = hash[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
// using an hashmap
// function maxChar(str) {
//   let hash = {};
//
//   let arr = str.split("");
//
//   for (let char of arr) {
//     if (hash[char]) {
//       hash[char]++;
//     } else {
//       hash[char] = 1;
//     }
//   }
//
//   let maxChar = "";
//   for (let char in hash) {
//     console.log(char, hash[char]);
//     if (hash[char] > maxChar) {
//       maxChar = char;
//     }
//   }
//
//   return maxChar;
// }
