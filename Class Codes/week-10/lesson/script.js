"use strict";
/* ////////////////////////////////
// Challenge #1

const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const hideScore = calAverage(44, 23, 71);
const silasScore = calAverage(65, 54, 49);

function checkWinner(avgHidee, avgSilas) {
  if (avgHidee >= avgSilas * 2) {
    console.log(`Hidee win 🏆`);
  } else if (avgSilas >= avgHidee * 2) {
    console.log(`Silas win 🏆`);
  } else {
    console.log("No team wins 🥲");
  }
}

////////////////////////////////
// Challenge #2
function caclTip(bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
}

console.log(caclTip(100));

const bills = [125, 555, 44];

const tips = [caclTip(bills[0]), caclTip(bills[1]), caclTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("bills: ", bills);
console.log("tips: ", tips);
console.log("totals: ", totals);
 */
///////////////////////
// Challenge #4

function caclTip(bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

console.log("bills: ", bills);
console.log("tips: ", tips);
console.log("totals: ", totals);

for (let i = 0; i < bills.length; i++) {
  console.log(bills[i]);
  const tip = caclTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log("tips after loop: ", tips);
console.log("totals after loop: ", totals);

for (let i = 0; i < 50; i++) {
  console.log(`Voter ${i + 1} is currently voting`);
}

for (let i = 1; i < 11; i++) {
  console.log(`Table ${i}`);

  for (let j = 1; j < 11; j++) {
    console.log(`${i} * ${j} -- ${i * j}`);
  }

  console.log("");
}

/*

1
11
111
1111
11111

*/

/* [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

let result = "";
for (let i = 0; i < 5; i++) {
  result += "1";
  console.log(result);
}

let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
  console.log(arr);
}
console.log("");
console.log(arr);

document.querySelector("h1").style.color = "red";

console.log(document.querySelector("h1").textContent);

document.querySelector("h1").textContent = "JavaScript is fun! 😀";
