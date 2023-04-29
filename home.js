import sum from './jScript/sum.js';
import { minus } from './jScript/minus.js';

// Galima jei dubliuojasi funkciju vardai ir todel ivyksta konfliktas
// import { minus as minusuojame } from './jScript/minus.js'; 

// console.clear(); // Safari auto reload daro - nereikia!
console.log('Labas rytas!');

const x = sum(3,7);
console.log(x);

const y = minus(12,9);
console.log(y);


// print in html
const resultSum = document.querySelector('.result1');
const resultMinus = document.querySelector('.result2');

let HTML1 = '', HTML2 = '';

HTML1 = `<p>Suma yra: ${x}</p>`;
HTML2 = `<p>Minus yra: ${y}</p>`;

// console.log(resultSum.innerHTML);
resultSum.innerHTML = HTML1;
resultMinus.innerHTML = HTML2;
