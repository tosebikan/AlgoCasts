// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// using reduce
function reverse(str) {
  // loop through the string;
  // create reversed variable push the string into it
  // return reversed

  // using reduce

  return str.split("").reduce((str, char) => char + str, "");
  // starts with empty quote
}

module.exports = reverse;

// splitting into two
// function reverse(str) {
//   // loop through the string;
//   // create reversed variable push the string into it
//   // return reversed
//
//   // splitting in half
//   let arr = str.split("");
//   let start = 0;
//   let end = arr.length;
//
//   while (start < end) {
//     var temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
//   return arr.join("");
// }

// using a simple loop
// function reverse(str) {
//   // loop through the string;
//   // create reversed variable push the string into it
//   // return reversed
//
//   var reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }
