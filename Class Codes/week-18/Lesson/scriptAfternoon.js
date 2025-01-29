'use strict';
/* console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(3425768768676845787893457878n);
console.log(BigInt(763476345768768));
console.log(45n + BigInt(69));
console.log(Number('50'));
console.log(40n === 40n);
console.log(40n > 9);

console.log(Math.abs(-50));
console.log(Math.round(49.567));
console.log(Math.ceil(39.1));
console.log(Math.floor(39.9));
console.log(Math.trunc(39.9));

console.log(Math.floor(-23.7));
console.log(Math.trunc(-23.7));
console.log(+(68.896).toFixed(2));
console.log(+'70');
console.log(Math.sqrt(25));

const initialWidth = '200px';
const doubleWidth = Number.parseInt(initialWidth) * 2 + 'px';
console.log(Number.parseInt(initialWidth));
console.log(doubleWidth);

console.log(Number.parseFloat('36.50px'));

console.log(isNaN(67));

const invalidNumberErrorMsg = num =>
  isNaN(num) ? 'Invalid character 💥' : 'Valid character ✅';

console.log(invalidNumberErrorMsg(768));

console.log(isFinite('hhsd'));

console.log(5 % 2); // 2 * 2 + 1
const isEven = num => (num % 2 === 0 ? true : false);

console.log(isEven(30));

const now = new Date();
console.log(now);

const date = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();

console.log(`${date}/${month}/${year}`);

console.log(navigator.language);

const dateFormated = Intl.DateTimeFormat(navigator.language).format(now);
console.log(dateFormated);

const formattedAmount = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'USD',
}).format(300.5);

console.log(formattedAmount);

setTimeout(function () {
  console.log('Loan has been granted');
}, 1000 * 60 * 60 * 24 * 3);

let counter = 0;
const timerId = setInterval(function () {
  const now = new Date();
  counter++;
  console.log(`${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`);
  // console.log('Logging in every second...');
  if (counter >= 5) clearInterval(timerId);
}, 1000);
 */
