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
