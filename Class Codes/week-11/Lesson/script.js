'use strict';
const fruits = ['apple', 'orange', 'banana'];
console.log(fruits[0]);

const [firstFruit, , banana, grape = 'out of stock'] = [
  'apple',
  'orange',
  'banana',
];

console.log(firstFruit, banana, grape);

const user = {
  fullName: 'Victor',
  job: 'Software Dev',
  friends: ['Silas', 'Dammy', 'Yinka'],
};

console.log(user.fullName);
console.log(user['job']);

const {
  job: jobTitle,
  fullName,
  gender = 'Undisclose',
} = {
  fullName: 'Victor Silas',
  job: 'Software Dev',
  friends: ['Silas', 'Dammy', 'Yinka'],
  // gender: 'male',
};

console.log(fullName, jobTitle, gender);
