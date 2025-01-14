/* let js = "amazing";

console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "alice";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);


true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);

year = 1991;

// this is a bug
// return a null
console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;
// dont use var
var job = "programmer";
job = "teacher";

// do not use this
// lastName = "Gunay";
// console.log(lastName);

// always use let and const and define a variable

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Aiken";
const lastName = "Gunay";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4;
x++;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job}`;

console.log(jonasNew);

console.log(`just a regular string...`);

console.log(`String with \nmultiple \nlines`);

console.log(`String
multiple
liness`);


const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);



// ===

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
// invalid number type
console.log(typeof NaN);

// Start with capital in the syntax
console.log(String(23));

// type coercion
console.log("I am " + 23 + " years old");
// minus operator triggers the substraction
console.log("23" - "10" - 3);
console.log("23" * "10" * 3);
console.log("23" / "10" / 3);

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);



// 5 falsy values: 0, "', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("Yay! height is defined");
} else {
  console.log("Height is undefined");
}



// 20. equality operator
const age = 18;
// '===' means strict equal operator and does not do type coercion
if ("age" === 18) console.log("Strict equal. You just became an adult");
if ("18" == 18) console.log("loose equal");

const favorite = Number(prompt("What's your favourite number?"));
console.log(favorite);
console.log(typeof favorite);

// we use a loose equality operator '23' == 23
// use strict equal operator
if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("Why not 23?");


// 21 boolean logic
const hasDriverLicense = true; //A
const hasGoodVision = true; //b
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;
shouldDrive;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; //c

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}


const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code example");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

//  26. statements and expression
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  // statement with semicolon
  const str = "23  is bigger";
}
// expression for operations
console.log(`I'm ${2037 - 1991} years old`);

//  27. conditional ternary

const age = 18;
age > 18
? console.log(`I like to drink wine 🍸`)
: console.log("I like to drink water 💦");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

*/
