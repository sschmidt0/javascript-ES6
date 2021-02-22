/**
 *  NIVELL 1
 */
// Exercici 1
const multiply = (num1, num2) => num1 * num2;

const toCelsius = (fahrenheit) => (5/9) * (fahrenheit-32);

const padZeros = (num, totalLen) => {
  let numStr = num.toString();
  let numZeros = totalLen - numStr.length;
  for (let i = 1; i <= numZeros; i++) {
    numStr = '0' + numStr;
  }
  return numStr;
}

const power = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

const greet = who => console.log(`Hello ${who}`);

console.log(multiply(3,4));
console.log(toCelsius(59));
console.log(padZeros('23', '5'));
console.log(power(2, 3));
console.log(greet('Sarah'));


// Exercici 2 (not sure if I understood the exercise, I suppose we need an array with just the firstnames from the array users)
const users = [
  { firstName: 'Homer', lastName: 'Simpson' },
  { firstName: 'Marge', lastName: 'Simpson' },
  { firstName: 'Bart', lastName: 'Simpson' },
  { firstName: 'Lisa', lastName: 'Simpson' },
  { firstName: 'Maggie', lastName: 'Simpson' }
];

let usersFirstName = users.map(user => {
  return user.firstName;
});

console.log(usersFirstName);


// Exercici 3
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentence = epic.reduce((prevVal, currVal, idx) => {
  return idx == 0 ? currVal : prevVal + ' ' + currVal;
});

console.log(sentence);


// Exercici 4
const reverseString = (str) => [...str].reverse().join('');

console.log(reverseString('Schmidt'));


// Exercici 5
function b() {
  // ...
}

async function a() {
  await b();
  doMoreWork();
}


// Exercici 6
const tasks = [
  { 'name' : 'Start React web', 'duration' : 120 },
  { 'name' : 'Work out', 'duration' : 60 },
  { 'name' : 'Procrastinate on facebook', 'duration' : 240 }
];

const tasks2 = [];
tasks.forEach(item => tasks2.push(item.name));
console.log(tasks2);

const tasks3 = tasks.map(item => item.name);
console.log(tasks3);


// NIVELL 2 - exercici 7
let prompt1, prompt2;
const getValues = () => {
  prompt1 = prompt('Quin nombre vols multipliar', 1);
  prompt2 = prompt('Fins a quin nombre vols multiplicar', 1);

  console.log('from', prompt1);
  console.log('to', prompt2);
}

const printValues = (num1, num2) => {
  console.log(num2);
  for (let i = 0; i <= num2-1; i++) {
    console.log(`${num1} * ${i+1} = ${num1 * (i+1)}`);
  }
}

const taulaMultiplicar = async () => {
  console.log('executing taulaMultiplicar');
  await getValues();
  console.log('calculem amb:');
  await printValues(prompt1, prompt2);
};

taulaMultiplicar();


