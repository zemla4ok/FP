const matrix = [[1, 2, 3],
  [4, 5, 6],
  [6, 7, 8]];
let maxArr = [];
matrix.forEach(arr => {
  maxArr.push(Math.max(...arr));
});
console.log(Math.min(...maxArr));