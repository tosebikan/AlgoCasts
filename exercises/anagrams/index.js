// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// remove spaces, punctuations & convert to lower case

// second approach using a hash
function helper(string) {
  let hash = {};

  // remove the punctuations & white spaces
  let regex = /[^\w]/g;
  let newString = string.replace(regex, "");

  for (let char of newString) {
    hash[char] = hash[char] + 1 || 1;
  }
  return hash;
}

function anagrams(stringA, stringB) {
  // create a helper function to create hash for the strings
  let newStringA = helper(stringA);
  let newStringB = helper(stringB);

  // compare the lengths & return false if not equal
  if (Object.keys(newStringA).length !== Object.keys(newStringB).length) {
    return false;
  }

  // loop through one of the maps & compare with the another
  for (char in newStringA) {
    if (newStringA[char] !== newStringB[char]) {
      return false;
    }
  }

  return true;

  console.log({ newStringA, newStringB });
}

module.exports = anagrams;

// function helper(string) {
//   //remove punctuations make lower case & remove spaces
//   // const punctuations = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
//
//   // remove all punctuation & spaces
//   const regex = /[^\w]/g;
//
//   return (newStr = string
//     .replace(regex, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join(""));
// }
//
// function anagrams(stringA, stringB) {
//   let newStringA = helper(stringA);
//   let newStringB = helper(stringB);
//
//   return newStringA === newStringB;
// }
