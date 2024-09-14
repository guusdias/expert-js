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

/* // math operators
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
x--; // x = x+1 = 99 */

//comaparison operators
// > , < , >=, <=
/* console.log(ageJonas > ageSara); // true
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
 */

// STRINGS

/* const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonas);

console.log("String with \n multiple \n lines");

console.log(`String
  new 
  lines`);
 */
/* 
const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("sarah pode dirigir");
}

const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

if (markHigherBMI) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMarko})!`);
}
 */

/* const inputYear = "2002";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
 */

// 5 falsy values => 0, '', null, undefined, NaN

/* console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Jonas")); //true
console.log(Boolean({})); // true
console.log(Boolean('')); //false
const isOldEnough = 0;
if (isOldEnough) {
  console.log("sarah pode dirigir");
}else{
	console.log('oi')
}// 'oi'


const heigh;
if (heigh) {
  console.log("sarah pode dirigir");
}else{
	console.log('oi')
}// 'oi' because height is undefined */

/* const age = 18;
if (age === 18) console.log("you just became adult");

"18" == 18; //true
"18" === 18; //false
18 === 18; //true
18 === 19; //false

18 == 18; //true --> loose operator AVOID THIS ONE
18 === 18; //true --> strict operator
 */

/* const hasCNH = true
const hadGoodVision = false
console.log(hasCNH && hadGoodVision); // false
console.log(hasCNH || hadGoodVision); // true
console.log(!hasCNH);// false
 */
/* 
const scoreDolphins = (96 + 108) / 2;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins > scoreKoalas) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}
 */

// const age = 23
// age>= 18 ? console.log('i like wine') : console.log('i like coffee');

// const bill = 275;
// let billByFifity = bill * (15 / 100);
// let billByTwenty = bill * (20 / 100);
// let tip = bill >= 500 && bill <= 300 ? billByTwenty : billByFifity;
// let finalBill = bill + tip

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${finalBill}.`
// );
