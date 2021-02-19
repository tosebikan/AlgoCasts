// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//using a recursion
function steps(n, row = 0, stairs = "") {
  if (n === row) {
    return;
  }

  if (n === stairs.length) {
    console.log(stairs);
    steps(n, row + 1);
    return;
  }

  if (stairs.length <= row) {
    stairs += "#";
  } else {
    stairs += " ";
  }

  steps(n, row, stairs);
}

// steps(2);

module.exports = steps;

// first attempt with a nested loop
// function steps(n) {
//   let arr = [];
//
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//
//     for (j = 1; j <= i; j++) {
//       str += "#";
//     }
//
//     console.log(str.padEnd(n));
//   }
// }
