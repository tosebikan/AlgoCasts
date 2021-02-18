// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// using a for loop
function capitalize(str) {
  // capitalise first word of str
  let result = str[0].toUpperCase();
  console.log({ result });

  // loop through result from 2nd word if previous index is a space capitalize & add to result

  for (let i = 1; i <= str.length - 1; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;

// first attempt using string methods

// function capitalize(str) {
//   let arr = str.split(" ");
//   let res = [];
//
//   for (let str of arr) {
//     str = str.charAt(0).toUpperCase() + str.slice(1);
//     res.push(str);
//   }
//
//   return res.join(" ");
// }
