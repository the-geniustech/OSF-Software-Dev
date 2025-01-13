'use strict';
/* // Short circuiting with (And &&)
const firstName = 0;
const lastName = 'Lizzy';

const userName = firstName && lastName;
console.log(userName);

// Short circuiting with (Or ||)
const userName2 = firstName || lastName;
console.log(userName2);

// Nulish coalescing (??)
const age = undefined;
const defaultAge = 18;

const userAge = age ?? defaultAge;
console.log(userAge);

// Logical Assignment operator
let x = 0;
x += 9;

let y = 10;
y &&= 89;
y &&= 70;
console.log(y);

let z = null;
z ||= 100;
console.log(z);

let a = null;
a ??= 100;
console.log(a);

// for of loop
const incomes = [40, 40000, 200, 76, 1000, 3174.12];
let totalIncome = 0;

for (const income of incomes) {
  totalIncome += income;
}

console.log(totalIncome);

const fruits = ['Apple', 'Orange', 'Banana', 'Cucumber', 'Gruava'];

for (const [i, fruit] of fruits.entries()) {
  console.log(`${fruit} is number ${i + 1} on the list of fruits.`);
}

const propNames = ['fullName', 'birthYear'];

const email = 'tESt@example.COM';

const user = {
  [propNames[0]]: 'Michael Temi',
  birthYear: 2000,
  email,
  calcAge() {
    this.age = 2025 - this.birthYear;

    return this.age;
  },
};

console.log(user);
console.log(user.fullName);
console.log(user.calcAge?.());

console.log(user.email?.toLowerCase());

const userData = {
  name: 'Tajudeen Elizabeth',
  job: 'Software Engineer',
  skills: ['HTML', 'CSS', 'JavaScript'],
};

for (const [key, value] of Object.entries(userData)) {
  console.log(`Key: ${key} & Value: ${value}`);
}

for (const key of Object.keys(userData)) {
  console.log(`Key: ${key}`);
}
for (const value of Object.values(userData)) {
  console.log(`Value: ${value}`);
}

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'No data available';
}

console.log(hasExamplesInJava(books[1]));
*/

const user = [1, 2];

const users = {
  name: 'Temi',
  age: 30,
};

const footballClubs = ['Liverpool', 'Chelsea', 'Arsenal'];

const arrOfFruits = [
  'Apple',
  'Orange',
  'Cucumber',
  'Watermelon',
  'Orange',
  'Apple',
];
// Set
const uniqueFruits = new Set(arrOfFruits);

console.log('Array: ', arrOfFruits);
console.log('Sets: ', uniqueFruits);
console.log(arrOfFruits[1]);
uniqueFruits.add('Banana');
uniqueFruits.delete('Orange');
console.log(uniqueFruits.has('Apple'));
console.log(uniqueFruits.size);
// uniqueFruits.clear();
console.log(uniqueFruits);

for (const fruit of uniqueFruits) {
  console.log(`I love eating ${fruit}`);
}

const userDataMap = new Map([
  ['name', '   Temi     '],
  ['job', 'Software Engineer'],
  ['email', 'test@example.com'],
]);

console.log(userDataMap);
userDataMap.set('gender', 'male');
userDataMap.delete('email');
console.log(userDataMap);
console.log(userDataMap.get('name'));
console.log(userDataMap.size);
console.log(userDataMap.has('email'));

for (const [key, value] of userDataMap) {
  console.log(`Key: ${key} <===> Value: ${value}`);
}

const str = 'This is a string';
const emailStr = 'teSt@eXAmple.cOm';
console.log('Initail: ', str);
console.log('Initail: ', emailStr);
// Working with String
console.log(str.length);
console.log(emailStr.toLowerCase());
console.log(str.toUpperCase());

const fruitsStr = 'Apple Orange Cucumber Watermelon';

console.log(fruitsStr);

const fruits = fruitsStr.split(' ');
console.log(fruits);

console.log(fruitsStr.slice(5, 12));
console.log(fruitsStr.slice(22));
