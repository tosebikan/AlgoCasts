// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// using pointers
// function reverse(str) {
//   let strArray = str.split("");
//   console.log({ strArray });
//   let start = 0;
//   let end = strArray.length - 1;
//
//   while (start <= end) {
//     let temp = strArray[start];
//     strArray[start] = strArray[end];
//     strArray[end] = temp;
//     start++;
//     end--;
//   }
//   return strArray.join("");
// }

// looping through
function reverse(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  console.log({ reverse });
  return reverse;
}

module.exports = reverse;
