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

// first approach
function helper(string) {
  //remove punctuations make lower case & remove spaces
  // const punctuations = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  // remove all punctuation & spaces
  const regex = /[^\w]/g;

  return (newStr = string
    .replace(regex, "")
    .toLowerCase()
    .split("")
    .sort()
    .join(""));
}

function anagrams(stringA, stringB) {
  let newStringA = helper(stringA);
  let newStringB = helper(stringB);

  return newStringA === newStringB ? true : false;
}

module.exports = anagrams;
