// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  let sign = Math.sign(n);
  let res = parseInt(reversed);

  return res * Math.sign(n);
}

module.exports = reverseInt;

// using a for loop
// function reverseInt(n) {
//   let arr = n.toString().split("");
//   let reverse = "";
//
//   if (n === 0) {
//     return 0;
//   }
//
//   for (let num of arr) {
//     reverse = num + reverse;
//   }
//
//   let res = parseInt(reverse);
//   let sign = Math.sign(n);
//   console.log({ n });
//   console.log({ sign });
//   console.log({ reverse });
//
//   if (sign === -1) {
//     return res * -1;
//   } else {
//     return res;
//   }
// }
