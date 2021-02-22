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
