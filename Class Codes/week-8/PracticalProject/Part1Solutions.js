////////////////////////////////////////////////////////////
// ### **Challenge #1 - Solution: Comparing BMI**

const massYinka1 = 78,
  heightYinka1 = 1.69;
const massMoyo1 = 92,
  heightMoyo1 = 1.95;

const bmiYinka1 = massYinka1 / heightYinka1 ** 2;
const bmiMoyo1 = massMoyo1 / heightMoyo1 ** 2;
const yinkaHigherBMI1 = bmiYinka1 > bmiMoyo1;

console.log(bmiYinka1, bmiMoyo1, yinkaHigherBMI1);

// Test Data 2
const massYinka2 = 95,
  heightYinka2 = 1.88;
const massMoyo2 = 85,
  heightMoyo2 = 1.76;

const bmiYinka2 = massYinka2 / heightYinka2 ** 2;
const bmiMoyo2 = massMoyo2 / heightMoyo2 ** 2;
const yinkaHigherBMI2 = bmiYinka2 > bmiMoyo2;

console.log(bmiYinka2, bmiMoyo2, yinkaHigherBMI2);

////////////////////////////////////////////////////////////
// ### **Challenge #2 - Solution: Improved BMI Comparison**

const massYinka = 78,
  heightYinka = 1.69;
const massMoyo = 92,
  heightMoyo = 1.95;

const bmiYinka = massYinka / heightYinka ** 2;
const bmiMoyo = massMoyo / heightMoyo ** 2;

if (bmiYinka > bmiMoyo) {
  console.log(
    `Yinka's BMI (${bmiYinka.toFixed(
      1
    )}) is higher than Moyo's (${bmiMoyo.toFixed(1)})!`
  );
} else {
  console.log(
    `Moyo's BMI (${bmiMoyo.toFixed(
      1
    )}) is higher than Yinka's (${bmiYinka.toFixed(1)})!`
  );
}

////////////////////////////////////////////////////////////
// ### **Challenge #3 - Solution: Gymnastics Competition**

const hideeScores = [96, 108, 89];
const silasScores = [88, 91, 110];

const averageHidee = hideeScores.reduce((a, b) => a + b) / hideeScores.length;
const averageSilas = silasScores.reduce((a, b) => a + b) / silasScores.length;

if (averageHidee > averageSilas && averageHidee >= 100) {
  console.log("Hidee wins the trophy!");
} else if (averageSilas > averageHidee && averageSilas >= 100) {
  console.log("Silas wins the trophy!");
} else if (averageHidee === averageSilas && averageHidee >= 100) {
  console.log("It's a draw!");
} else {
  console.log("No team wins the trophy!");
}

////////////////////////////////////////////////////////////
// ### **Challenge #4 - Solution: Tip Calculator**

const bill = 275; // Change for other test values
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip.toFixed(
    2
  )}, and the total value was ${(bill + tip).toFixed(2)}.`
);
