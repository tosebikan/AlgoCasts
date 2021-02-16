// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// first attempt
function capitalize(str) {
  let arr = str.split(" ");
  let res = [];

  for (let str of arr) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    res.push(str);
  }
  console.log({ arr });
  console.log({ res });
  return res.join(" ");
}

module.exports = capitalize;
