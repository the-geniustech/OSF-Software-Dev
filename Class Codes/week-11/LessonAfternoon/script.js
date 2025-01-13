'use strict';
// Distructuring Array
const fruits = ['apple', 'orange', 'banana', 'grape'];

console.log(fruits[0]);

// fruits.push('grape');

const [apple, , banana, grape = 'Grape Out of Stock'] = fruits;

console.log(apple, banana, grape);

// Distructuring Object
const user = {
  fullName: 'Egberongbe Segun',
  job: 'Software Dev',
  friends: ['Opeyemi', 'Hakeem', 'Michael'],
  // gender: 'male',
};

// console.log(user.fullName);
// console.log(user['job']);

const {
  job: jobTitle,
  fullName,
  gender = 'Undisclose',
  friends: [friend1, friend2],
} = user;

console.log(jobTitle, fullName, gender, friend1, friend2);

const numbersArr = [
  [1, 2, 3],
  [4, 5, 6],
];

const [[one, two], [four, , six]] = numbersArr;
console.log(one, two);
console.log(four, six);
