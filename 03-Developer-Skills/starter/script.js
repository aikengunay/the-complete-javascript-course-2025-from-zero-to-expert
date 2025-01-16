// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// 7. Using Google, StackOverflow and MDN

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
console.log(amplitudeNew);
