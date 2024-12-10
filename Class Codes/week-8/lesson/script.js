/*console.log("hello world"); // String
console.log(4); // Number
console.log(true, false); // Boolean
console.log(null); // null
console.log(undefined); // undefined
// console.log(new Symbol(["hello world"]));
console.log(BigInt(122345645767846758784576789));
console.log(122345645767846758784576789);
console.log(Number.MAX_SAFE_INTEGER);

console.log(typeof "Yinka");
console.log(typeof 45);
console.log(typeof true);
console.log(typeof null);

let firstName = "Yinka";
const lastName = "Hidee";
console.log(firstName, lastName);
// var middleName = "Silas"

firstName = "Victor";
console.log(firstName);
lastName = "Segun";
console.log(lastName);
*/

/*
const job1 = "Teacher";
const $class = "tell me your name";
const first_name = "Hakeem";
const FIRSTNAME = "Hakeem";
const FirstName = "Hakeem";

// const age = 56;

console.log(middleName);
var middleName = "Silas";

// Maths Operators
const add = 45 + 7;
const sub = 76 - 90;
const div = 60 / 10;
const mult = 10 * 4;
const expo = 4 ** 3;

const firstName = "Victor";
let age = 45;

console.log("My name is " + firstName + ", Age: " + age); // My name is Victor, Age: 45

console.log(typeof 45);
console.log(typeof "null");
console.log(typeof "undefined");

// Assignment Operators
// age = age + 1;
age += 1;
// age = age - 1
age -= 1;
age++;
age--;
console.log(age);

const mathOps = (20 + 5 - 10) * 2;
console.log(mathOps);
console.log("4" + 8);

// Comparison Operators
const ageHidee = 62;
const ageSegun = 62;

console.log(ageHidee > ageSegun);
console.log(ageHidee < ageSegun);
console.log(ageHidee <= ageSegun);
console.log(ageHidee >= ageSegun);

// Control Statements (if/else statement)
if (ageHidee > ageSegun) {
  console.log("Hidee is older than Segun");
} else {
  console.log("Segun is older than Hidee");
}

const gradeSilas = 67;

if (gradeSilas >= 90) {
  console.log("Silas got an A");
} else if (gradeSilas >= 80) {
  console.log("Silas got a B");
} else if (gradeSilas >= 70) {
  console.log("Silas got a C");
} else {
  console.log("Silas failed");
}
*/

const jobTitle = "Programmer";
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

// Type Conversion and coercion
let age = 40;

// Type Conversion
age = Number("42");
console.log(typeof age);
console.log(typeof String(90));

// Type Coercion
console.log(40 - "10");
console.log(23 + age);

// 5 Falsy values: "", 0, null, undefined, {}
console.log(Boolean("t"));
console.log(Boolean(20));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));

// Equallity Operator (strict ===) || (loose ==)
const ageHidee = 62;
const ageSegun = 45;

console.log(ageHidee === ageSegun);
console.log(40 === Number("40"));
console.log("20" == 20);

if (ageHidee === ageSegun) {
  console.log("Hidee and Segun are the same age");
} else {
  console.log("Hidee and Segun are not the same age");
}

// Logical Operators (&&, ||, !) = (AND, OR, NOT)
const ageYinka = 17;
const hasDriverLicense = true;
const tired = false;

// Logical Operator (AND && x NOT !)
if (ageYinka >= 18 && hasDriverLicense && !tired) {
  console.log("Yinka can drive");
} else {
  console.log("Yinka cannot drive");
}

// if (ageYinka >= 18){
//   if (hasDriverLicense) {
//     if (tired !== false) {
//       console.log("Yinka can drive");
//     }
//   }
// } else {
//   console.log("Yinka cannot drive");
// }

// logical Operator (OR ||)
const isHoliday = true;
const isWeekend = false;

if (isHoliday || isWeekend) {
  console.log("Yinka is on vacation");
} else {
  console.log("Yinka is not on vacation");
}

// Temlate Literal
const firstName = "Silas";
const lastName = "Victor";
const year = 1991;
const job = "Programmer";

// My name is Silas Victor, I was born in 1991. I am a Programmer.
console.log(
  "My name is " +
    firstName +
    " " +
    lastName +
    ", " +
    " I was born in " +
    year +
    "." +
    " I am a " +
    job
);

console.log(
  `My name is ${firstName} ${lastName}, I was born in ${year}. I am a ${job}`
);

console.log("I'm Hidee by name");
console.log("I'm " + '"Hidee"' + " by name"); // I'm "Hidee" by name
console.log(`I'm "Hidee" by name`);
