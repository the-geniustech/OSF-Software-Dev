'use strict';
// Spread Operator
// Spread Operator in Array
const colors = ['red', 'green', 'blue'];
console.log('Colors: ', colors);

// Copying an array
const moreColors = [...colors, 'black', 'white'];
console.log('moreColors: ', moreColors);

// Merging arrays
const nums1 = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8];

const allNumbers = [...nums1, ...nums2];

console.log(allNumbers);

// Spread Operator in Object
const user = { name: 'Opemikun', job: 'Sofware Dev' };

// Copying Object
const userCopy = { ...user };
console.log(userCopy);

const userPersonalInfo = { age: 48, gender: 'Male' };

// Merging Object
const userDetails = {
  ...user,
  ...userPersonalInfo,
  email: 'example@test.com',
  job: 'Cyber Security',
};
console.log(userDetails);

// Rest Pattern
const fruits = ['Orange', 'Banana', 'Mango', 'Watermelon', 'Cucumber'];

const [orange, banana, ...otherFruits] = fruits;

console.log(orange, banana, otherFruits);

// Spread Operator with Function Parameter
function addNumbers(...numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  console.log(total);
}

addNumbers(23, 5634, 5, 90, 12);

addNumbers(20, 10);

addNumbers(
  65,
  5634,
  5,
  90,
  12,
  123,
  123,
  9,
  123,
  56,
  123,
  123,
  123,
  123,
  12,
  89123
);

function countrys(firstCountry, secondCountry, ...otherCountrys) {
  console.log(
    `First country is: ${firstCountry}, second country is: ${secondCountry} and other countries are: ${otherCountrys}`
  );
}

countrys(
  'United States',
  'Nigeria',
  'Begium',
  'France',
  'Germany',
  'England',
  'South Africa',
  'China'
);

console.log(userDetails);
const { job: jobTitle, ...otherUserInfo } = userDetails;

console.log(jobTitle, otherUserInfo);
console.log(...'Country');
