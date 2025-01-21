// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* // 7. Using Google, StackOverflow and MDN

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// What is temp amplitude? answer: difference between highest and lowest temp
// What is a sensor error, and what to do?
// Why is there a sensor error?
// How do we calculate the temperatre amplitude? max and min?

// 2) Breaking up into sub-problems
// How to ignore errors
// Find max value in temperature array
// find the min value in temp array
// Subrtract min from max and return it (the difference)

const calcTempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // if the type of the current temperature is not a numner
    if (typeof curTemp !== 'number') {
      // go to the next index and compare it again
      continue;
    }
    // if the current temperature is greater than the maximum value stored in max,
    if (curTemp > max) {
      // then set the current temperature to the max variable
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
calcTempAplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);
// max = 3
// max = 7

// problem 2
// function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// with 2 arrays, should we implement the functionality twice? no, merge two arrays

// 2) Breaking up into sub-problems
// - merge two arrays
// - search in mdn or internet

const calcTempAplitudeNew = function (t1, t2) {
  // merge t1 and t2 arrays and store it in a new array
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // if the type of the current temperature is not a numner
    if (typeof curTemp !== 'number') {
      // go to the next index and compare it again
      continue;
    }
    // if the current temperature is greater than the maximum value stored in max,
    if (curTemp > max) {
      // then set the current temperature to the max variable
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); */

/* // 009 Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    //  C. FIXME Wrap this to a number method
    value: Number(prompt('Degrees celsius')),
  };
  // FIND THE BUG
  // BUG: the prompt is taking up string values
  console.log(measurement);
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

//  A. identiy the bug
// BUG: Kelvin is not being converted
// console.log(measureKelvin());

//=======================
// Using a debugger
const calcTempAplitudeNew = function (t1, t2) {
  // merge t1 and t2 arrays and store it in a new array
  const temps = t1.concat(t2);

  let max = 0;
  // FIND THE BUG
  // This is not set to the index
  // C. FIXME
  // set the the value to temp[0]
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // if the type of the current temperature is not a numner
    if (typeof curTemp !== 'number') {
      // go to the next index and compare it again
      continue;
    }
    // This is how you instantly run the debugger in your live server without clicking a breakpoint manually
    debugger;
    // if the current temperature is greater than the maximum value stored in max,
    if (curTemp > max) {
      // then set the current temperature to the max variable
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAplitudeNew([3, 5, 1], [9, 4, 5]);

// A. Identify the BUG
// this is where the bug happends
// the amplitude is not correct
console.log(amplitudeNew); */

// 10 Coding Challenge
/* 
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..." 

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
- Data 1: [17, 21, 23]
- Data 2: [12, 5, -5, 0, 4]

*/

// 1) Understanding the problem
// What is forecasted maximum Temperature?
// What does the printforecast method take in?
// A array of strings with values of temperatures
// What will the method output
// Print the string of arrays 1 by one to output "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// So using for loop or for each to print every temperature and printing the index as days
// How do you print them one by one

// 2) Breaking up into sub-problems (Task)
// Iterate through the array of strings and print the temperature
// print the index as number of days + 1

// 3) Research

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

const dataSet1 = [17, 21, 23];
const dataSet2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // store the message in a single string
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days... `;
  }
  console.log('...' + str);
};
printForecast(dataSet1);
// 4) Write Pesudo-code
