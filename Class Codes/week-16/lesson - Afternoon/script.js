'use strict';
/* // Default parameters
const greetings = function (nickName = 'Guest') {
  console.log(`Welcome ${nickName}`);
};

greetings('Temi');

// Passing by value
let number = 40;

const passByValueFn = function (num) {
  console.log('Before re-assignment', num);

  num = 10;

  console.log('After re-assignment', num);
};

passByValueFn(number);
console.log('Outer value', number);

// Passing by reference
const passByReferenceFn = function (arr) {
  arr[0] = 600;
  arr.push(43);
};

const numArray = [1, 2, 3, 4, 5];
console.log('Initial array: ', numArray);

passByReferenceFn(numArray);
console.log(numArray);

// Higher order Functions
// Callback function
const callback = function (callback) {
  console.log('Before callback');

  callback();

  console.log('After callback');
};

callback(function () {
  console.log('This is callback');
});

// Function returns another function
const createMultiplier = function (factor) {
  return function (number) {
    return number * factor;
  };
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(double(5989));
console.log(double(534234));

console.log(triple(50));

// call and apply
const user = { name: 'Michael', job: 'Software Engineer' };

const greet = function (greetingText, gender) {
  console.log(`${greetingText}, ${this.name}!`);

  this.gender = gender;
  console.log(user);
};

greet.call(user, 'Hello', 'Male');
greet.apply(user, ['Welcome', 'female']);

const welcomeMsg = greet.bind(user);
welcomeMsg('Hi', 'Shemale');

// IIFE (Immediately Invoked Function Expression)
const addition = (function (num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
})(60, 40);

console.log(addition);

const mutiplier = function () {
  const str = 'Execution completed: ';

  console.log('Before returning =>', str);

  return str;

  console.log(str);
};

mutiplier();
 */

const letters = ['a', 'b', 'c', 'd', 'e'];

// The slice() method
console.log(letters.slice(2));
console.log(letters.slice(1, 3));
console.log(letters.slice(-3, 4));

// The splice() method
// console.log(letters.splice(2));
// console.log(letters.splice(1, 2));
// console.log(letters.splice(-1));

// The reverse() method
// console.log(letters.reverse());

// The concat() method
const letters2 = ['f', 'g', 'h'];
console.log(letters.concat(letters2));
console.log(letters);

// The join() method
console.log(letters.join(' '));

//////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Looping Arrays: forEach
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited Naira ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw Naira ${Math.abs(movement)}`);
  }
}

// First iteration: movement = 0 : 200
// Second iteration: movement = 1 : 450
console.log('');
console.log('======== forEach method =======');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited Naira ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw Naira ${Math.abs(mov)}`);
  }
});

// Looping Arrays: map
const usdToNairaRate = 1700;

const usdToNairaMov = movements.map((mov, i) => {
  return mov * usdToNairaRate;
});

console.log(usdToNairaMov);
console.log(movements);

// Looping Arrays: filter

const deposits = movements.filter((mov, i) => {
  return mov > 0;
});

console.log(deposits);

// Looping Arrays: reduce
const totalBalance = movements.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(totalBalance);
