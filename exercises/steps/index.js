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

// first attempt with a nested loop
function steps(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let str = "";

    for (j = 1; j <= i; j++) {
      str += "#";
    }

    console.log(str.padEnd(n));
  }
}

steps(2);

module.exports = steps;
