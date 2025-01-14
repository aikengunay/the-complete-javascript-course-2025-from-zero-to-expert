// For loop

// let array = [3, 4, 5, 6, 7]; let sum = 0; for (let i=0; i
// Reduce()

// let array = [3, 4, 5, 6, 7]; let avg = array.reduce((a,b) => a + b)/array.length; console.log(avg); // 5

const dolphinScores = [96, 108, 89];
const koalasScores = [97, 112, 11];

let dolphinAverage =
  dolphinScores.reduce((a, b) => a + b) / dolphinScores.length;
dolphinAverage;

let koalasAverage = koalasScores.reduce((a, b) => a + b) / koalasScores.length;
koalasAverage;

if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
  console.log("Dolphins win the trophy");
} else if (koalasAverage > dolphinAverage && koalasAverage >= 100) {
  console.log("Koalas win the trophy");
} else if (
  dolphinAverage === koalasAverage &&
  dolphinAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No onw wins the trophy");
}
