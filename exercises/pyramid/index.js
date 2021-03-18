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
  let max = 2 * n - 1;
  let midpoint = Math.floor(max / 2);
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j < max; j++) {
      if (midpoint - i <= j && midpoint + i >= j) {
        step += "#";
      } else {
        step += " ";
      }
    }

    console.log(step);
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
