"use strict";
/*
////////////////////////////
// Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const hideeScore = calcAverage(85, 54, 41);

const silasScore = calcAverage(23, 34, 27);

function checkWinner(avgHidee, avgSilas) {
  if (avgHidee >= avgSilas * 2) {
    console.log(`Hidee wins 🏆 (${avgHidee} vs. ${avgSilas})`);
  } else if (avgSilas >= avgHidee * 2) {
    console.log(`Silas wins 🏆 (${avgSilas} vs. ${avgHidee})`);
  } else {
    console.log("No team wins 🥲");
  }
}

checkWinner(hideeScore, silasScore);

////////////////////////////
// Challenge #2
// const bill1 = 125;
// const bill2 = 555;
// const bill3 = 44;
const calcTip = function (bill) {
  const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

  return tip;
};

console.log(calcTip(1000));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Totals: ", totals);

// const lizzyArr = [
//   "Elizabeth",
//   "Fashion Designer",
//   ["Michael", "Hakeem", "Temi"],
// ];

const lizzy = {
  firstName: "Elizabeth",
  job: "Fashion Designer",
  friends: ["Michael", "Hakeem", "Temi"],
  greeting: function () {
    console.log("This is 'this' keyword", this);
    alert(`Welcome, ${this.firstName}`);
  },
};

console.log(this.firstName);

const str = "friends";

lizzy.greeting();

console.log(lizzy.firstName);
console.log(lizzy[str]);

("use strict");
 */
//////////////////////////////////
// Challenge #4
const calcTip = function (bill) {
  const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

  return tip;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

console.log(bills.length);
console.log(tips.length);

console.log(bills[9]);

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(tips.length, tips);
console.log(totals);

// for (let i = 0; i < 11; i++) {
//   console.log(`Iteration i ==== ${i}`);
// }

const h1Text = document.querySelector("h1");

console.log(h1Text);
