// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // loop though
  let midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";

    // loop through the column in row
    for (let column = 0; column < 2 * n - 1; column++) {
      // get midpoint
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;

// function pyramid(n) {
//   // first loop through the number
//   let str = "";
//   let halfDiff = "";
//   let diff = "";
//
//   for (let i = 1; i <= n; i++) {
//     let max = n + (n - 1);
//     let cur = i + (i - 1);
//
//     for (let j = 1; j <= max; j++) {
//       // halfDiff = Math.floor((max - j) / 2);
//       diff = max - cur;
//       halfDiff = (max - cur) / 2;
//
//       if (j <= cur) {
//         str += "#";
//       } else if (diff == 0) {
//         return;
//       } else if (diff) {
//         for (let i = 1; i <= diff; i++) {
//           if (i <= halfDiff) {
//             str = "0" + str;
//           } else {
//             str += "0";
//           }
//         }
//       }
//     }
//
//     console.log({ n, str, max, halfDiff, diff });
//     str = "";
//   }
//
//   // if less that total add spaces on both sides
//   // else add the ppound sign
// }
