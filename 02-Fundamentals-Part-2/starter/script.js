/* 
// 02 activate strict mode

"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");


// 03 functions
function logger() {
  console.log("My name is Jonas");
}

// calling a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
num;


// 04 function declarations vs expressions

// you can call this function before making this function
const beforeAge1 = calcAge1(1991);

// function declaration
// you can call this function before making this function
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// cannot call the function expression, this is because of hoisting
// const beforeAge2 = calcAge2(1991);
// function expression
// anonymous function
// expression produces a value
// functions are just a value, if its a value, we can store it as a variable
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// recommend using function expression as it is structured.
// this is a personal preferences


// 05 arrow function

// function expression references
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// arrow function
// use this if you mostly have 1 paramater and one line of code
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Aiken"));
console.log(yearsUntilRetirement(1980, "Bob"));


// 06 functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


// 07 Reviewing function

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));


// 08 Code challenge
// JavaScript Fundamentals – Part 2
// Coding Challenge #1

// Data 1
let dolphinScore1 = 44;
let dolphinScore2 = 23;
let dolphinScore3 = 71;

let koalaScore1 = 65;
let koalaScore2 = 54;
let koalaScore3 = 49;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins average: ${avgDolphins}`);
    console.log(`Koalas average: ${avgKoalas}`);
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Dolphins average: ${avgDolphins}`);
    console.log(`Koalas average: ${avgKoalas}`);
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`Dolphins average: ${avgDolphins}`);
    console.log(`Koalas average: ${avgKoalas}`);
    console.log(`No team wins`);
  }
}

console.log(`Data 1`);
checkWinner(
  calcAverage(dolphinScore1, dolphinScore2, dolphinScore3),
  calcAverage(koalaScore1, koalaScore2, koalaScore3)
);

// Data 2
dolphinScore1 = 85;
dolphinScore2 = 54;
dolphinScore3 = 41;

koalaScore1 = 23;
koalaScore2 = 34;
koalaScore3 = 27;

console.log(`\nData 2`);
checkWinner(
  calcAverage(dolphinScore1, dolphinScore2, dolphinScore3),
  calcAverage(koalaScore1, koalaScore2, koalaScore3)
);



//  09 Introduction to Arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// can mutate per index
friends[2] = "Jay";
console.log(friends);

// Cannot mutate  the entire list
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Scmedtmann", 2037 - 1991, "Teacher", friends];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];



// 11 Basic Array Operations (Method)
const friends = ["Alice", "Mark", "Jennifer", "Sam"];
// adds a value at the end of the list
friends.push("Layla");
friends.push("Crucia");
friends.push(42);
// Returns the new length of the array
const friendsLength = friends.push("Wark");
console.log(friends);
console.log(friendsLength);
// length of friends
console.log(friends.length);

// Adds a value at the start of the list
friends.unshift("Aiken");
console.log(friends);

// Remove elements
// Removes a value at the end of the list
// Wark is removed
friends.pop();
// Returns 42 that is being removed
const friendRemoved = friends.pop();
console.log(friends);
console.log(friendRemoved);

// Remove the first data in the list
// Remove the value of Aiken
friends.shift();
// Returns a value of Alice that undegoes shift
const friendFirstRemoved = friends.shift();
console.log(friends);
console.log(friendFirstRemoved);

// Returns the index position of the value youre looking for
console.log(friends.indexOf("Sam"));

// If a value cannot be found, it returns a 0
console.log(friends.indexOf("Hardbardk"));

// Returns a boolean
console.log(friends.includes("Jennifer"));
console.log(friends.includes("Wax"));

friends.push(44);
console.log(friends.includes("44"));
console.log(friends.includes(44));

// you can use the include method for conditional statement
if (friends.includes("Layla")) {
  console.log("You have a friend called Layla!");
}


// 13 Challenge #2

// function declaration
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    // tip 15%
    return bill * 0.15;
  } else {
    // tip 20%
    return bill * 0.2;
  }
}

// function expression
const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// arrow function
const calcTip3 = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Calculation
// bill for each order
const bills = [125, 555, 44];
// Store each tip per bill
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// Store the total bill + tip per order
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
 */

/* // 14 introduction to objects
const jonasArray = [
  "Jonas",
  "Gunay",
  2027 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Gunay",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas); 
*/

/* // 15 Dot vs Bracket Notation
// access the value by dot notation
console.log(jonas.lastName);
// access by bracket notation
console.log(jonas["firstName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// This doesnt work
// to use dot notation, you must call the final property name
// console.log(jonas.'last' + nameKey);

// When to use dot or bracket notation
// just use dot notation usually for objects.

//  when using bracket notation
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

// console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@aikengunay";
console.log(jonas);

// challenge
// Jonas has 3 friends, and his bf is called Michael
jonasInformation = {
  name: "Jonas",
  numberOfFriends: 3,
  friend: "Michael",
};
console.log(
  `${jonasInformation.name} has ${jonasInformation.numberOfFriends} and his bestfriend is called ${jonasInformation.friend}`
); */

/* // 16. Object Methods

// you can add function expressions in this object
// you cannot put a function declaration in the object

const jonas = {
  firstName: "Jonas",
  lastName: "Gunay",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcage: function value
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
  calcAge2: function () {
    // dont repeat yourself principle
    // use the this keyword to directly access in jonas object
    // use the "this" keyword
    // console.log(this);
    return 2037 - this.birthYear;
  },
  calcAge3: function () {
    // we are creating a new key-value pair called age for jonas object
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge3()}-year old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver License`;
  },
};

console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas["calcAge"](jonas["birthYear"]));

console.log(jonas.calcAge2(jonas.calcAge()));
console.log(jonas.calcAge3());
console.log(jonas.age);

console.log(jonas.getSummary()); */

/* // 17 and 18 Challenge

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:

1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method

3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: 
Marks weights 78 kg and is 1.69 m tall. 
John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/* // Answer
// kg
// meter
const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = Math.round(this.mass / this.height ** 2);
    return this.bmi;
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    // calculate bmi and round it to a whole number
    this.bmi = Math.round(this.mass / this.height ** 2);
    return this.bmi;
  },
};

console.log(
  markMiller.calcBMI() > johnSmith.calcBMI()
    ? `${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s (${johnSmith.bmi}).`
    : `${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s (${markMiller.bmi}).`
); */

/* // 19 Iteration for loops
// console.log("Lifting weights repetition 1");

// for loops keeps running while condition is True
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
} */

// 20 Looping arrays, continuing, and breaking

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i <= jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // filling types of array
  // types[i] = typeof jonasArray[i];

  // second type of adding a new value in the array
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  // do calculate one by one
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("--STRINGS--");
for (let i = 0; i <= jonasArray.length; i++) {
  // if value type is not string, skip to the index
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--BEAK WITH NUMBER--");
for (let i = 0; i <= jonasArray.length; i++) {
  // if value type is not string, skip to the index
  if (typeof jonasArray[i] == "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}
