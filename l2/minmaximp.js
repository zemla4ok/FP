const matrix = [[1, 2, 3],
                [4, 5, 6],
                [6, 7, 8]];

let max;
let min;

matrix.forEach(row => {
  row.forEach(item => {
    if(item > max || !max)
      max = item;
  })
  if(max < min || !min)
    min = max;
})

console.log(min);
