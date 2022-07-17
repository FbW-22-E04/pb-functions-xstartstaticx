// 1 Add Up
function sumInteger(integer) {
  let sum = 0;
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  console.log("Q1:", sum);
}
sumInteger(4);

// 2 Cubed
function sumOfCubes(a, b, c) {
  return a ** 3 + b ** 3 + c ** 3;
}
console.log("Q2:", sumOfCubes(1, 5, 9));

// 3 String Check
function stringWord(string, word) {
  console.log("Q3:", string == word.slice(0, string.length));
}
stringWord("bu", "button");

// 4 Less Than or Equal to Zero
function isLEQZero(g) {
  console.log("Q4:", g <= 0 ? true : false);
}
isLEQZero(3);

// 5 Count Occurrences
function countOccurences(string, letter) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      counter++;
    }
  }
  return counter;
}
console.log("Q5:", countOccurences("this is a string", "i"));

// 6 X to the Power of X
function calcBaseToExponent(j, k) {
  console.log("Q6:", j ** k);
}
calcBaseToExponent(3, 3);

// 7 Dog Years
function dogAge(l) {
  console.log("Q7: Your doggo is", l * 7, "years old in dog years!");
}
dogAge(4);

// 8 A Lifetime Supply...
function calcLifetimeSupply(m, n) {
  const yearsLeft = 100 - m;
  const snacksAmount = yearsLeft * (n * 365.25);
  console.log(
    "Q8: The snack company should provide you with",
    snacksAmount.toFixed(0),
    "units, until you are a ripe old age of",
    m + ".",
    "Happy snacking!"
  );
}
calcLifetimeSupply(25, 2);

// Bonus 1
// function calcLifetimeSupply(m, n, o) {
//   const yearsLeft = 100 - m;
//   const snacksAmount = yearsLeft * (n * 365.25);
//   if (o <= 100) {
//     console.log(snacksAmount);
//   } else {
//     console.log("you are cut off!");
//   }
// }
// calcLifetimeSupply(25, 2, 100);

// Bonus 2
// function calcLifetimeSupply(m, n, o) {
//   const yearsLeft = 100 - m;
//   const snacksAmount = yearsLeft * (n * 365.25);
//   if (o <= 100) {
//     console.log(Math.ceil(snacksAmount));
//   } else {
//     console.log("you are cut off!");
//   }
// }
// calcLifetimeSupply(32, 0.58, 65);

// 9 Where's Waldo?
function isWaldoHere(string) {
  if (string.includes("Waldo")) {
    console.log("Q9:", true);
  } else {
    console.log("Q9:", false);
  }
}
isWaldoHere("I found you Waldo!");

// 10 Pie
function isEqualSlices(x, y, z) {
  const neededSlices = y * z;
  if (x >= neededSlices) {
    console.log("Q10:", true);
  } else {
    console.log("Q10:", false);
  }
}
isEqualSlices(11, 5, 3);

// 11 XO
// function isEqualNumXandO(string, letter1, letter2) {
//   let counter1 = 0;
//   let counter2 = 0;
//   for (let index = 0; index < string.length; index++) {
//     if (string[index] === letter1) {
//       counter1++;
//     }
//     if (string[index] === letter2) {
//       counter2++;
//     }
//   }
//   return counter1, counter2;
// }
// isEqualNumXandO("ooxx", "x", "o");
// console.log();

function ExOh(str) {
  sumsofarx = 0;
  sumsofary = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      sumsofarx++;
    }
    if (str[i] === "o") {
      sumsofary++;
    }
  }
  if (sumsofarx === sumsofary) {
    return true;
  } else {
    return false;
  }
}
console.log("Q11:", ExOh("ooxx"));

// function countOccurences(string, letter) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == letter) {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log("Q5:", countOccurences("this is a string", "i"));

// 12 isPrime
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
console.log("Q12:", isPrime(0));
console.log("Q12:", isPrime(7));
console.log("Q12:", isPrime(9));
console.log("Q12:", isPrime(10));
