// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// using slice
function chunk(array, size) {
  let chunked = [];
  for (let i = 0; i < array.length; i += size) {
    let sub = array.slice(i, i + size);
    chunked.push(sub);
  }

  return chunked;
}

module.exports = chunk;
// reduced
// function chunk(array, size) {
//   let chunked = [];
//
//   for (let element of array) {
//     let last = chunked[chunked.length - 1];
//
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//
//   return chunked;
// }

// first approach
// function chunk(array, size) {
//   // create the result array
//   // create a sub array
//   let res = [];
//   let subArr = [];
//
//   // loop through array
//   for (let i = 0; i <= array.length - 1; i++) {
//     // if sub array length is less than size push index element
//     // if full push to res empty sub and add that element
//     if (subArr.length < size) {
//       subArr.push(array[i]);
//     } else if ((subArr.length = size)) {
//       res.push(subArr);
//       subArr = [];
//       subArr.push(array[i]);
//     }
//     // push sub array into result subarray
//   }
//
//   // if sub array still exists add to res
//   if (subArr.length > 0) {
//     res.push(subArr);
//   }
//
//   // return result array
//   return res;
// }
