//strict allows us to have a secure, avoiding bugs, code in javascript
"use strict";

/* function logger() {
  console.log("My name is Gustavo");
}
// calling/running / invoking the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); //Juice with 5 apples and 0 oranges

const appleOragneJuice = fruitProcessor(2, 4);
console.log(appleOragneJuice); //Juice with 2 apples and 4 oranges
 */

/* // function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// anonymous function or function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2); */

// arrow function

/* const calcAge3 = (birthYear) => 2037 - birthYear;

console.log(calcAge3(1991)); // 46

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples)
  const orangePieces = cutPieces(oranges)

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
};

console.log(fruitProcessor(2, 3));
 */

/* Write your code below. Good luck! 🙂 */

/* const calcAverage = (first, second, third) =>{
    return (first+second+third)/3
}

const scoreDolphins = calcAverage(44,23,71)
const scoreKoalas = calcAverage(65,54,49)

function checkWinner(){
    let avgDolphins = scoreKoalas
    let avgKoalas = scoreKoalas
    
    if(avgDolphins > avgKoalas){
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`)
    }else{
        console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`)
    }
    
    return
} */

/* const friends = ["Michael", "Steven", "Peter"];

friends.push("Jay"); //["Michael", "Steven", "Peter", "Jay"];

// Introduction to Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
}; */

///////////////////////////////////////
// Dot vs. Bracket Notation
/* const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas); */

// jonas.firstName;
// jonas.friends.length;
// jonas.bestFriend = jonas.friends[0];

/* const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  birthYear: 1991,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
 */

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  birthYear: 1991,
};

// o array começa a contar no 0
for (let i = 0; i >= jonas.length; i++) {
  console.log(jonas[i]);
}
