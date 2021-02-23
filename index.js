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
// let prompt1, prompt2;
// const getValues = () => {
//   prompt1 = prompt('Quin nombre vols multipliar', 1);
//   prompt2 = prompt('Fins a quin nombre vols multiplicar', 1);

//   console.log('from', prompt1);
//   console.log('to', prompt2);
// }

// const printValues = (num1, num2) => {
//   console.log(num2);
//   for (let i = 0; i <= num2-1; i++) {
//     console.log(`${num1} * ${i+1} = ${num1 * (i+1)}`);
//   }
// }

// const taulaMultiplicar = async () => {
//   console.log('executing taulaMultiplicar');
//   await getValues();
//   console.log('calculem amb:');
//   await printValues(prompt1, prompt2);
// };

// taulaMultiplicar();


// Exercici 8
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const calculateBtn = document.getElementById('calcular');
const calculateForm = document.getElementById('calculateForm');
const divTable = document.getElementById('calculate-table');
const tableMultiplicar = document.getElementById('table-multiplicar');
const tableBody = document.getElementById('table-body');

const createTableRows = (num1, num2) => {
  let rowsTable = '';
  for (let i = 0; i <= num2-1; i++) {
    console.log(`${num1} * ${i+1} = ${num1 * (i+1)}`);
    let rowElem = `
      <tr>
        <th scope="row">${i+1}</th>
        <td>${num1} * ${i+1} = ${num1 * (i+1)}</td>
      </tr>
    `;
    rowsTable += rowElem;
  }
  return rowsTable;
};

const taulaMultiplicarToTable = (n1, n2) => {
  let tableRow = createTableRows(n1, n2);
  tableBody.innerHTML = tableRow;
};

const validation = (nombre, field) => {
  let errors = false;
  let errorDiv = field === 1 ? 'error_num1' : 'error_num2';
  if (nombre.value == '' || nombre.value == null) {
    nombre.classList.add('is-invalid');
    document.getElementById(errorDiv).textContent = "Introdueix un nombre";
    errors = true;
  } else if (isNaN(nombre.value)) {
    nombre.classList.add('is-invalid');
    document.getElementById(errorDiv).textContent = "No has introduït un nombre";
    errors = true;
  } else if (nombre.value == 0) {
    nombre.classList.add('is-invalid');
    document.getElementById(errorDiv).textContent = "No es pot multiplicar 0";
    errors = true;
  }
  return errors;
}

calculateForm.addEventListener('blur', (e) => {
  if (e.target.value != '') e.target.classList.remove('is-invalid');
}, true);

calculateBtn.addEventListener('click', (e) => {
  e.preventDefault();

  calculateForm.classList.remove('is-invalid');

  let errorsNum1 = validation(num1, 1);
  let errorsNum2 = validation(num2, 2);

  if(!errorsNum1 && !errorsNum2) {
    divTable.style.display = 'block';
    taulaMultiplicarToTable(num1.value, num2.value);
  }
});


// Nivell 3 - exercici 9
let inputField = document.getElementById("myInput");
let nameList = document.getElementById("myUL");

function filterNames() {
  let filter, li, a;
  filter = inputField.value.toUpperCase();
  li = nameList.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

inputField.addEventListener('focus', () => nameList.style.display = 'block');
