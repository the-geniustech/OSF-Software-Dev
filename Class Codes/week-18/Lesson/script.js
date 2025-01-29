'use strict';
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER + 545353);
console.log(45645445767555556565667n);

console.log(BigInt(3345645455644));

console.log(457n - 450n);
console.log(45645445767555556565667n - BigInt(450));

console.log(Math.abs(-450));
console.log(Math.round(45.9));
console.log(Math.ceil(37.2));
console.log(Math.floor(28.7));
console.log(Math.trunc(30.987));
console.log(Math.floor(-23.6));
console.log(Math.trunc(-23.6));
console.log(+(100.5).toFixed(2));

console.log(Number('5645'));
console.log(+'23');
console.log(Number.parseInt('445'));
console.log(Number.parseInt('36.50px'));
console.log(Number.parseFloat('36.50px'));
console.log(isNaN('56'));
console.log(isFinite('54trtree'));

console.log(Math.max(45, 10, 57, 100));
console.log(Math.min(45, 10, 57, 100));

console.log(Math.trunc(Math.random() * 10) + 1);

console.log(5 % 2); // 2 * 2 + 1

const isEven = num => (num % 2 === 0 ? true : false);

console.log(isEven(11));

const now = new Date();
console.log(now);
console.log(new Date(1990, 10, 25, 22, 50, 12));

console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`);
console.log(navigator.language);

const dateFormated = Intl.DateTimeFormat('ar-SY').format(now);
console.log(dateFormated);

console.log(`300,20€`);
console.log(`$300.20`);

console.log(
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(
    300.2
  )
);

console.log('Before timeout');
setTimeout(function () {
  console.log('Executed after 3 seconds');
}, 1000 * 3);

console.log('After timeout');

// setInterval(function () {
//   const now = new Date();

//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000);

// let minute = 10;
// let seconds = 0;
