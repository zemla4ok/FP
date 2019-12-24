//неизменяемую переменную
const variable = 2;


//чистую функцию
const add = (x, y) => x + y;


//функцию первого порядка
function greeting() {
  console.log('Hello World');
}


//функцию высшего порядка
function formalGreeting() {
  console.log("How are you?");
}
function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if(type === 'formal') {
    greetFormal();
  } else if(type === 'casual') {
    greetCasual();
  }
}


//каррирование функций
function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// использование
function sum(a, b) {
  return a + b;
}
let carriedSum = curry(sum);
console.log( carriedSum(1)(2) ); // 3


//меморизацию функции
// простая функция, прибавляющая 10 к переданному ей числу
const add = (n) => (n + 10);
add(9);
// аналогичная функция с мемоизацией
const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}
// эту функцию возвратит memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // вычислено
console.log(newAdd(9)); // взято из кэша


//сделайте ленивое вычисление функции
function func_name () {
  var variable_foo,
    variable_bar;
  
  variable_foo = get_foo();
  variable_bar = get_bar();
  func_name = function () {
    return variable_foo + variable_bar;
  };
  return func_name.apply(this, arguments);
}


//монаду
const R = require('ramda');
const prop = R.prop;
const path = R.path;
const curry = R.curry;
const Maybe = require('ramda-fantasy').Maybe;

const getURLForUser = (user) => {
  return Maybe(user)                            //обёртываем пользователя в объект Maybe
  .map(path(['prefs', 'languages', 'primary'])) //используем Ramda для получения первичного языка
}

let joeUser = {
  name: 'joe',
  email: 'joe@example.com',
  prefs: {
    languages: {
      primary: 'sp',
      secondary: 'en'
    }
  }
};



//бесконечную структуру данных,
//лямбда выражение
const add = (x, y) => x + y;

//операции Map, Filter и Reduce.
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 1));
console.log(arr.filter(item => item / 2 === 0));
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue))
