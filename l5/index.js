const pas = [2, 3, 1];
const tax = [10, 11, 97, 19, 18];

const sortedPas = pas.sort();
const sortedTaxi = tax.sort().reverse();
const zip = (arr, ...arrs) => arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));


console.log(
  (
    (arr, ...arrs) =>
      arr.map(
        (val, i) =>
          arrs.reduce(
            (a, arr) =>
              [...a, arr[i]],
              [val]
          )
      )
  )
  (
    pas.sort(),
    tax.sort().reverse()
  )
);


/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////


const searchString = `public class Person {private final String name; private final int age;}`;


console.log(
  searchString
  .toLowerCase()
  .match(
    /[a-z]+/g
  )
  .reduce(
    (prev, nxt) => {
      prev[nxt] = (prev[nxt] + 1) || 1;
      return prev;
    },
    {}
  )
);
