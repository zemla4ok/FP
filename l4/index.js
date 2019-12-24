
/////////////////////////////////////////////
function modificate(func, param) {
  return func(param);
}

console.log(modificate((x) => x * x, 2));
console.log(modificate((x) => x*x*x, 3));
console.log(modificate((x)=> -x, 97));




/////////////////////////////////////////////
function filter(collection, func) {
  return collection.filter(item => func(item));
}

console.log(filter([11, 4, 97, 3, 10], (x) => x < 10));



/////////////////////////////////////////////
const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

const map = cb => arr => arr.map(cb);
const filter = cb => arr => arr.filter(cb);

const rigiTeam = [
  {name : 'Dimas', age: 22},
  {name : 'Archie', age: 23},
  {name: 'Kirill', age: 21},
  {name: 'Henk', age: 40}];

console.log(compose(map(u => u.name), filter(u => u.age >= 23))(rigiTeam));
