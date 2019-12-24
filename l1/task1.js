// треугольник паскаля

let result = '';
const space = 4;

(function main() {
  pascalTriangle(10);
  console.log(result)
})();

function pascalTriangle(rows, n = 0) {
  if(rows === n) return;
  
  result = result.concat(' '.repeat((rows - n) / 2 * space));
  
  for (let m = 0; m <= n; m++)
    result = result.concat(`${' '.repeat(space)}${factorial(n) / (factorial(m) * factorial(n - m))}`);
  
  result = result.concat('\n');
  pascalTriangle(rows, ++n);
}

function factorial(x) {
  if (x === 0)
    return 1;
  return x * factorial(x - 1);
}