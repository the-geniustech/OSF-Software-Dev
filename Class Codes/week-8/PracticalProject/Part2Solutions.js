/////////////////////////////////////////////////////////////////
// ### **Challenge 1 - Solution: Gymnastics Teams**

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgHidee, avgSilas) => {
  if (avgHidee >= 2 * avgSilas) {
    console.log(`Hidee wins (${avgHidee} vs. ${avgSilas})`);
  } else if (avgSilas >= 2 * avgHidee) {
    console.log(`Silas wins (${avgSilas} vs. ${avgHidee})`);
  } else {
    console.log("No team wins");
  }
};

// Test Data
const hideeAvg1 = calcAverage(44, 23, 71);
const silasAvg1 = calcAverage(65, 54, 49);
checkWinner(hideeAvg1, silasAvg1);

const hideeAvg2 = calcAverage(85, 54, 41);
const silasAvg2 = calcAverage(23, 34, 27);
checkWinner(hideeAvg2, silasAvg2);

/////////////////////////////////////////////////////////////////
// ### **Challenge 2 - Solution: Tip Calculator**

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// Test Data
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

/////////////////////////////////////////////////////////////////
// ### **Challenge 3 - Solution: BMI Comparison**

const yinka = {
  fullName: "Yinka Biobaku",
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const moyo = {
  fullName: "Moyo Oladapo",
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

yinka.calcBMI();
moyo.calcBMI();

if (yinka.bmi > moyo.bmi) {
  console.log(
    `${yinka.fullName}'s BMI (${yinka.bmi}) is higher than ${moyo.fullName}'s (${moyo.bmi})!`
  );
} else {
  console.log(
    `${moyo.fullName}'s BMI (${moyo.bmi}) is higher than ${yinka.fullName}'s (${yinka.bmi})!`
  );
}
/*
/////////////////////////////////////////////////////////////////
// ### **Challenge 4 - Solution: Tip Calculator with Loops**

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(tips, totals);
console.log(calcAverage(totals));
 */
