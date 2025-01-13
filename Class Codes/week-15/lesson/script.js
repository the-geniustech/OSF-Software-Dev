'use strict';
/* const firstName = 'Segun';
const lastName = 'Yinka';

// Short circuiting (and &&)
const userName = firstName && lastName;

console.log(userName);

// Short circuiting (or ||)
const userName2 = firstName || lastName;
console.log(userName2);

// Nullish coalescing
const greeting = null;
const greeting2 = 'Hello';

const message = greeting ?? greeting2;
console.log(message);

let x = 20;

x += 10;
console.log(x);

// Logical assignment operator (&&)
let y = 5;
y &&= 20;
console.log(y);

// Logical assignment operator (||)
let z = null;
z ||= 50;
console.log(z);

// Logical assignment operator (??)
let a = 5;
a ??= 13;
console.log(a);

///////////////////////////////
// For of loop
const incomes = [20, 75, 28, 16, 34, 28, 20, 72];
let totalIncome = 0;

for (const income of incomes) {
  totalIncome += income;
}

console.log(totalIncome);

// for (let i = 0; i < incomes.length; i++) {
//   totalIncome += incomes[i];
// }

const fruits = ['Apple', 'Orange', 'Banana', 'Cucumber'];

for (const [index, fruit] of fruits.entries()) {
  console.log(`${fruit} is at index ${index}`);
}

const propNames = ['age', 'name'];

const user = {
  [propNames[1]]: 'Segun',
  [propNames[0]]: 50,
  greeting() {
    alert(`You are welcome back ${this.name}`);
  },
};

console.log(user.age, user.name);

// user.greeting();

const email = 'test@example.com';

// Optional chaining
const userData = {
  fullName: 'Segun Hidee',
  job: 'Software Engineer',
  email,
};
console.log(userData?.email?.toLowerCase());

console.log(userData);

// user?.greeting?.();

for (const [key, value] of Object.entries(userData)) {
  console.log(`Key: ${key} == Value: ${value}`);
}

for (const key of Object.keys(userData)) {
  console.log(`Key: ${key}`);
}

for (const value of Object.values(userData)) {
  console.log(`Value: ${value}`);
}

// Class work
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
  return book.programmingLanguage === 'Java' || 'no data available';
}

console.log(hasExamplesInJava(books[1]));

for (const book of books) {
  book.onlineContent && console.log(`${book.title} provides online content`);
}

const fullName = 'Hidee';
const age = 20;
const hasDriversLicense = true;

if (age >= 18 && hasDriversLicense) {
  console.log(`${fullName} can drive`);
} else {
  console.log(`${fullName} cannot drive`);
}

age >= 18 && hasDriversLicense && console.log(`${fullName} can drive`);
 */
const fruitsArray = [
  'Apple',
  'Orange',
  'Banana',
  'Apple',
  'Cucumber',
  'Banana',
];

console.log(fruitsArray.includes('Grape'));

fruitsArray[1] = 'Tomato';
console.log(fruitsArray);
fruitsArray.push('Guava');
console.log(fruitsArray);

const uniqueValues = new Set([
  'Apple',
  'Orange',
  'Banana',
  'Apple',
  'Cucumber',
  'Banana',
]);

console.log(uniqueValues.has('Orange'));

uniqueValues.add('Berry');
uniqueValues.delete('Berry');
console.log(uniqueValues.size);
// uniqueValues.clear();

console.log(uniqueValues);

const mapObj = new Map([
  ['name', 'Segun'],
  ['job', 'Software Engineer'],
]);

console.log(mapObj.get('name'));
mapObj.set('email', 'test@example.com');
mapObj.delete('job');
console.log(mapObj.has('email'));
console.log(mapObj.size);
// mapObj.clear();

console.log(mapObj);

for (const fruit of uniqueValues) {
  console.log(`I love eating ${fruit}`);
}

for (const [key, value] of mapObj) {
  console.log(`Key: ${key} and Value: ${value}`);
}

// Working with strings
const str = 'This is a StrIng';
console.log(str);
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

const fruitInput = 'Apple Orange Banana Apple Cucumber Olive';

const favouriteFruits = fruitInput.split(' ');

console.log(favouriteFruits.join(', '));

const creditCardNumber = '557785783478478784';

console.log(creditCardNumber.slice(-4).padStart(creditCardNumber.length, '*'));

console.log(fruitInput.slice(6));

const userName = ' Segun Akorede          ';
console.log(userName.trim());

console.log(fruitInput.slice(fruitInput.indexOf('O')));

console.log(fruitInput.indexOf('O'));
console.log(fruitInput.lastIndexOf('O'));

console.log(fruitInput.includes('Orange'));

console.log(creditCardNumber.startsWith('5577'));
console.log(str.endsWith('ng'));

// Solution to number 3
// Data for Challenge #3
const genres = ['Pop', 'Rock', 'Jazz', 'Pop', 'Classical', 'Jazz'];

const songs = [
  { title: 'Imagine', artist: 'John Lennon', duration: 183 },
  { title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 },
  { title: 'Hotel California', artist: 'Eagles', duration: 391 },
];

// #3.1
const uniqueGenres = new Set(genres);
console.log(uniqueGenres);
/*
const songsMap1 = new Map([
  ['Imagine', { artist: 'John Lennon', duration: 183 }],
  ['Bohemian Rhapsody', { artist: 'Queen', duration: 354 }],
  ['Hotel California', { artist: 'Eagles', duration: 391 }],
]); */

// 3.2
const songsMap = new Map();

for (const { title, ...details } of songs) {
  songsMap.set(title, details);
}

console.log(songsMap);

// #3.3
console.log(songsMap.get('Imagine'));

// 3.4
for (const [song, details] of songsMap) {
  console.log(song, details);
}
