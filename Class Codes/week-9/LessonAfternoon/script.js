"use strict";
switch (true) {
  case true:
    console.log("This is true");
  // break;
  case false:
    console.log("This is false");
  // break;
  default:
    console.log("This is neither true nor false");
}

let string = "";
// const weekDay = prompt("Please enter a week day");
const weekDay = "mon";

switch (weekDay) {
  case "mon":
  case "tue":
  case "wed":
  case "thu":
  case "fri":
    string = "This is a working day";
    break;
  case "sat":
    string = "This a off day";
  case "sun":
    string = "This a off day";
    break;
  default:
    string = "Invalid weekday";
}

console.log(string);

const trueFalse = 10 < 5 ? "Condition is true" : "Condition is false";

console.log(trueFalse);

const age = 10;
const firstName = "Michael";

// Version 1
// const canVote =
//   age >= 18 ? `${firstName} can vote` : `${firstName} cannot vote`;

// console.log(canVote);

// Version 2
// const canVote = age >= 18 ? "can" : "cannot";

// console.log(`${firstName} ${canVote} vote`);

// version 3
console.log(`${firstName} ${age >= 18 ? "can" : "cannot"} vote`);

//////////////////////////////
// Challenge #1

const yinkaHeight = 1.69;
const yinkaMass = 78;

const moyoHeight = 1.95;
const moyoMass = 92;

const yinkaBMI = yinkaMass / yinkaHeight ** 2;

const moyoBMI = moyoMass / moyoHeight ** 2;

const yinkaHigherBMI = yinkaBMI > moyoBMI;

//////////////////////////////
// Challenge #2

if (yinkaBMI > moyoBMI) {
  console.log(`Yinka's BMI (${yinkaBMI}) is higher than Moyo's (${moyoBMI})!`);
} else {
  console.log(`Moyo's BMI (${moyoBMI}) is higher than Yinka's (${yinkaBMI})!`);
}

//////////////////////////////
// Challenge #3
const hideeScore = (96 + 108 + 89) / 3;
const silasScore = (88 + 91 + 110) / 3;

if (hideeScore > silasScore) {
  console.log("Hidee win");
} else if (silasScore > hideeScore) {
  console.log("Silas win");
} else {
  console.log("It's a draw");
}

// Challege #3 Bonus
if (hideeScore > silasScore && hideeScore > 100) {
  console.log("Hidee win the trophy 🏆");
} else if (silasScore > hideeScore && silasScore > 100) {
  console.log("Silas win the trophy 🏆");
} else if (hideeScore === silasScore && hideeScore > 100 && silasScore > 100) {
  console.log("Both win the trophy 🏆🏆");
} else {
  console.log("No one wins the trophy 🥲");
}

//////////////////////////////
// Challenge #4
const bill = 275;
const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${total}`
);

// const interface = "string";
// console.log(interface);

let lastName = "Segun";
console.log(lastName);
lastName = "Egberongbe";

// const lastName = "Segun";
// console.log(lastName);

//////////////////////////////
// Functions
//////////////////////////////
// Function without parameters
function add() {
  return 5 + 10;
}

console.log(add());
console.log(add());
console.log(add());
console.log(add());

// Function with parameters and arguments
function multiply(num1, num2) {
  const result = num1 * num2;

  return result;
}

console.log(multiply(5, 10));
console.log(multiply(20, 100));

function calcAge(year) {
  const currentYear = 2035;
  const age = currentYear - year;

  return `In year ${currentYear}, you will be ${age} years old`;
}

// prompt("");

console.log(calcAge(prompt("Enter your birth year")));
// console.log(calcAge(1986));
// console.log(calcAge(2012));
// console.log(calcAge(1960));
