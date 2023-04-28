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



// document.write('<p>The sum of 3 and 7 is: ' + x + '</p>');