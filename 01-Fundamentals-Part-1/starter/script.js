/* let js = "amazing";
if (js === "amazing") alert("hellow world");

//things you cant do
let name = "hey";
// let new = 'hey'
// let function = 'hey'

// if you want to do that you should put other caratcters in front
let $function;
let _function;

// there's also good practices

//right
let myFirstJob = "programmer";
let myCurrentJob = "teacher";

//wrong
let job1 = "programmer";
let job2 = "teacher"; */

/* let javascriptisfun = true;
console.log(javascriptisfun);

console.log(typeof javascriptisfun); // true
console.log(typeof true); // true
console.log(typeof 23); // number
console.log(typeof "Gustavo"); // string

javascriptisfun = "YES!";

console.log(typeof javascriptisfun); // string

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1991;
console.log(typeof year); //number

console.log(null); //object
 */

/* let age = 30; //let can change
age = 31;

// const cant change
const birthYear = 1991;
birthYear = 1990; // uncaught type error

//const job // it'll return error, you cant set const empty

var job = "programmer";
job = "teacher";
 */

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Gusta";
const lastName = "Dias";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 10; // x = x + 4 = 100
x++; // x = x+1 = 101
x--; // x = x+1 = 100
x--; // x = x+1 = 99

//comaparison operators
// > , < , >=, <=
console.log(ageJonas > ageSara); // true
console.log(ageSara >= 18); // false

const isFullAge = ageSara >= 18;
//he first subtratc than the compare
console.log(now - 1991 > now - 2018);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIJohn, BMIMark, markHigherBMI);
