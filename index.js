console.clear();

const vardas = 'Saulius';
const pabaigaVardo = '!';
const printText = 'Labas rytas ' + vardas + pabaigaVardo;
console.log(printText);

const n1 = 4; // pvz: kai n1 yra text, n1 = '4'
const n2 = 5;

if (isNaN(n1)) {
    console.log('Jei n1 nera sk., tai suma: ', n1 + n2);
} else {
    console.log('Suma: ', n1 + n2)
}
