'use strict';
/* // Default parameters
const greeting = function (userName = 'Guest') {
  console.log(`Welcome ${userName}`);
};

greeting('Segun');

// Passing by premitive
const doubleNum = function (num) {
  num = 20;
  return num;
};

let num = 10;
console.log(num);
console.log(num);

// Passing by reference
const modifyStorage = function (numArr) {
  numArr[0] = 90;
  numArr[numArr.length - 1] = 50;
};

let numArray = [1, 2, 3, 4, 5];
console.log('Before function call', numArray);

modifyStorage(numArray);

console.log('After function call', numArray);

const modifyObject = function (obj) {
  obj.age = 75;
};

const objOutside = {
  name: 'Yinka',
  job: 'Software Engineer',
  method: function () {
    this.name;
  },
};

console.log('Before modification: ', objOutside);

modifyObject(objOutside);

console.log('After modification: ', objOutside);

// Higher order functions
const higherOrderFn = function (callbackFn) {
  console.log('Before Callback: ');
  callbackFn();
  console.log('After Callback: ');
};

higherOrderFn(function () {
  console.log('This callback function');
});

// Returning function from higherOrderFn
const multiplier = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(10));

const greetingFn = function (gender) {
  console.log(this);
  console.log(`Welcome ${this.userName}`);

  this.gender = gender;
  console.log(this);
};

const userData = {
  userName: 'Omotayo',
  email: 'test@example.com',
};

// Call method on (function)
const greet = greetingFn.call(userData, 'Female');

// Apply method on (function)
greetingFn.apply(userData, ['Male']);

// Bind method on (function)
function sayHi(greeting) {
  console.log(`${greeting}, ${this.userName}`);
}
const boundFunction = sayHi.bind(userData);
boundFunction('Hello');

// IIFE
(function (num1, num2) {
  console.log(num1 + num2);
})(20, 10);

// Closure
const createMutiplier = function (factor) {
  const str = 'Calculation Done';

  return function (num) {
    console.log(str);
    return factor * num;
  };
  console.log(str);
};

const double2 = createMutiplier(2);
console.log(double2(40));
 */
/*
const letters = ['a', 'b', 'c', 'd', 'e'];

// Slice
console.log(letters.slice(2));
console.log(letters.slice(1, 4));
console.log(letters.slice(-2));
console.log(letters.slice(-3, -1));

// Splice
// console.log(letters.splice(2));
// console.log(letters.splice(1, 4));
// console.log(letters.splice(-1));

// Reverse
// console.log(letters.reverse());

// Concat
const letters2 = ['f', 'g', 'h'];
console.log(letters.concat(letters2));

// Join
console.log(letters.join(' '));
console.log(letters);

// at()
console.log(letters[0]);
console.log(letters.at(0));
console.log(letters.at(-1));

// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited Naira ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You Withdraw Naira ${Math.abs(movement)}`);
//   }
// }

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited Naira ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdraw Naira ${Math.abs(mov)}`);
  }
});

// first iteration: 0: 200
// second iteration: 1: 450

// map()
const usdToNairaRate = 1700;
const usdToNairaMov = movements.map(mov => {
  return mov * usdToNairaRate;
});

console.log(usdToNairaMov);
console.log(movements);

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// reduce()
const totalBalance = movements.reduce((acc, cur) => {
  return acc + cur;
}, 0);
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const usdToNairaRate = 1700;
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

// Chaining methods
const totalDepositsInNaira = movements
  .filter(mov => mov > 0)
  .map(mov => mov * usdToNairaRate)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsInNaira);

// The find() method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

// The some() and every() methods
console.log(movements.some(mov => mov === -130));
console.log(movements.some(mov => mov === 0));

console.log(deposits);
console.log(movements.every(mov => mov > 0));
console.log(deposits.every(mov => mov > 0));

// The includes() method
console.log(movements.includes(200));
console.log(movements.includes(50000));

// The flat and flatMap methods
const arr = [[1, 2, 3], [4, 5, 6], 7, 8]; // [1, 2, 3, 4, 5, 6, 7, 8]

console.log(arr.flat());

const usersCashMovements = [
  [400, 500, -300, 7000, -230],
  [5400, -800, 300],
];

// const usersCashMovementsInNairaFlat = usersCashMovements
//   .flat()
//   .map(mov => mov * usdToNairaRate);

// console.log(usersCashMovementsInNairaFlat);

const usersCashMovementsInNaira = usersCashMovements.flatMap(mov =>
  mov.map(mov => mov * usdToNairaRate)
);

console.log(usersCashMovementsInNaira);

// The sort() method
const numArr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

console.log(numArr.sort((a, b) => b - a));
