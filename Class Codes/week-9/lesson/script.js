"use strict";
/* switch (true) {
  case true:
    console.log("This condition is true");
  // break;
  case false:
    console.log("This condition is false");
  // break;
  default:
    console.log("This condition is undefined");
}

let string = "";
// const weekDay = prompt("Type a week day you want to check");
const weekDay = "mon";

switch (weekDay) {
  case "mon":
    string = "Working day";
  case "tue":
    string = "Working day";
    break;
  case "sat":
    string = "Rest day";
  case "sun":
    string = "Rest day";
    break;
  default:
    string = "Invalid week day";
}

console.log(string);

const trueFalse = false ? "This is true" : "This is false";
console.log(trueFalse);

const age = 18;
const firstName = "Juwon";

// Version 1
// const canVote = age >= 18 ? `${firstName} can vote` : `${firstName} cannot vote`;
// console.log(canVote);

// Version 2
// const canVote = age >= 18 ? "can" : "cannot";
// console.log(`${firstName} ${canVote} vote`);

// Version 3
console.log(`${firstName} ${age >= 18 ? "can" : "cannot"} vote`);

////////////////////////////////////
// Challenge 1
const yinkaMass = 78;
const yinkaHeight = 1.69;

const moyoMass = 92;
const moyoHeight = 1.95;

const yinkaBMI = yinkaMass / yinkaHeight ** 2;
const moyoBMI = moyoMass / moyoHeight ** 2;

const yinkaHigherBMI = yinkaBMI > moyoBMI;

////////////////////////////////////
// Challenge 2
if (yinkaHigherBMI) {
  console.log(
    "Yinka's BMI" +
      "(" +
      yinkaBMI +
      ")" +
      "is higher than Moyo's" +
      "(" +
      moyoBMI +
      ")" +
      "!"
  );
} else {
  console.log(
    `Moyo's BMI (${moyoBMI}) is higher than Yinka's BMI (${yinkaBMI}) `
  );
}

///////////////////////////////////
// Challenge #3
const hideeScore = (96 + 108 + 89) / 3;
const silasScore = (88 + 91 + 110) / 3;

if (hideeScore > silasScore) {
  console.log("Hidee's average score is higher than Silas's");
} else if (silasScore > hideeScore) {
  console.log("Silas's average score is higher than Hidee's");
} else {
  console.log("Both Hidee and Silas have the same average score");
}

if (hideeScore > silasScore && hideeScore > 100) {
  console.log("Hidee wins the trophy 🏆");
} else if (silasScore > hideeScore && silasScore > 100) {
  console.log("Silas wins the trophy 🏆");
} else if (hideeScore === silasScore && hideeScore > 100 && silasScore > 100) {
  console.log("Both Hidee and Silas win the trophy 🏆🏆");
} else {
  console.log("Neither Hidee nor Silas wins the trophy 🥲");
}

///////////////////////////////////
// Challenge #4

const bill = 275;
const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${total}.`
);

// const interface = "string";
// console.log(interface);

let lastName = "Emerald";
console.log(lastName);

lastName = "Merlin";
console.log(lastName);

// let lastName = ""

////////////////////////////////
// Functions
// Functions without parameters
function add() {
  return 5 + 10;
}

console.log(add());
console.log(add());

// Functions with parameters and arguments
function add2(num1, num2) {
  return num1 + num2;
}

console.log(add2(5, 10));
console.log(add2(75, -22));

function calAge(year) {
  const currentYear = 2035;
  const age = currentYear - year;

  return `In year ${currentYear}, you will be ${age} years old`;
}

console.log(calAge(2012));

console.log(calAge(prompt("Enter your birth year")));
*/

// Function expression
// console.log(calAge2(2007)); // This is not allowed
const calAge2 = function (year) {
  return 2035 - year;
};

console.log(calAge2(2007));

console.log(calcAge3(2007));

function calcAge3(birthYear) {
  return 2035 - birthYear;
}

// Arrow function
const calAge4 = (birthYear) => 2035 - birthYear;

console.log(calAge4(1987));

const cutFruitPieces = (fruit) => fruit * 4;

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;

  return juice;
}

console.log(fruitProcessor(20, 10));

const fruits = ["Apple", "Orange", "Banana", "Mango"]; // Using square brackets
const numbers = new Array(1, 2, 3, 4); // Using Array constructor

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(2));

// Adding Element to array
fruits.push("Grapes");
console.log(fruits);

fruits.unshift("Guava");
console.log(fruits);

// Removing Element from array
const lastElement = fruits.pop();

console.log(lastElement);
console.log(fruits);

fruits.shift();
console.log(fruits);

// Searching for element
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Cucumber"));

console.log(fruits.includes("Banana"));
console.log(fruits.includes("Cucumber"));

//////////////////////////////////
// Loops
/////////////////////////////////
// For Loop

// console.log("Exercise day");
// console.log("Exercise day");
// console.log("Exercise day");
// console.log("Exercise day");
// console.log("Exercise day");

for (let i = 1; i <= 150; i++) {
  console.log("Exercise day: " + i);
}

// For Loop with Array
const nums = [10, 20, 30, 40, 50, 60];
let numsMultiple = [];

for (let i = 0; i < nums.length; i++) {
  numsMultiple.push(nums[i] * 2);
}

console.log(nums, numsMultiple);

/*
  <div   style="     z-index: 5;     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',       'Droid Sans', sans-serif, 'Meiryo';     font-size: 9px;     letter-spacing: 0.06em;     margin-left: 0.75cm;     width: 540px;   " >   <div     style="       margin-bottom: -12px;       border-top: 1px solid #000000;       padding-top: 10px;       justify-content: space-between;       align-items: center;       display: flex;     "   >     <span style="font-weight: bold">720degree Innovation Hub</span><br />     <span style="font-style: italic"       >Course Material by Olaogun Hakeem, Software Engineer</span     >   </div>   <div style="justify-content: center; display: flex">     <div style="font-size: 9px; margin-left: -15px">       &#10022; <span class="pageNumber"></span> /       <span class="totalPages"></span> &#10022;     </div>   </div> </div>

  <div   style="     z-index: 5;     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',       'Droid Sans', sans-serif, 'Meiryo';     font-size: 9px;     letter-spacing: 0.06em;     margin-left: 0.75cm;     width: 540px;   " >   <div     style="       margin-bottom: -12px;       border-top: 1px solid #000000;       padding-top: 10px;       justify-content: space-between;       align-items: center;       display: flex;     "   >     <span style="font-weight: bold">720degree Innovation Hub</span><br />     <span style="font-style: italic"       >Study Plan by Olaogun Hakeem, Software Engineer</span     >   </div>   <div style="justify-content: center; display: flex">     <div style="font-size: 9px; margin-left: -15px">       &#10022; <span class="pageNumber"></span> /       <span class="totalPages"></span> &#10022;     </div>   </div> </div>
*/
