console.clear();
console.log(':: Ciklo for panaudojimas ::');

// 1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
//      a. 0 … 0
//      b. 0 … 4
//      c. 0 … 100
//      d. 574 … 815
//      e. -50 … 50
//      f. -70 … 30
// 2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
//      a. pvz.: “abcdef” -> “fedcba”
// 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
//      a. 0 - 11
//      b. 8 - 31
//      c. -18 - 18
//      d. rezultatą pateikti tokiu formatu:
//          i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
//         ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
//        iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

console.log('-- 1.a. --');
let sumaA = 0;
for (let i=0; i<=0; i++) {
    //sumaA = sumaA + i;
    sumaA += i;
}
console.log(`sumaA yra = ${sumaA}`);

console.log('-- 1.b. --');
let sumaB = 0;
for (let i=0; i<=4; i++) {
    sumaB += i;
}
console.log(`sumaB yra = ${sumaB}`);

console.log('-- 1.c. --');
let sumaC = 0;
for (let i=0; i<=100; i++) {
    sumaC += i;
}
console.log(`sumaC yra = ${sumaC}`);

console.log('-- 1.d. --');
let sumaD = 0;
for (let i=574; i<=815; i++) {
    sumaD += i;
}
console.log(`sumaD yra = ${sumaD}`);

console.log('-- 1.e. --');
let sumaE = 0;
for (let i=-50; i<=50; i++) {
    sumaE += i;
}
console.log(`sumaE yra = ${sumaE}`);

console.log('-- 1.f. --');
let sumaF = 0;
for (let i=-70; i<=50; i++) {
    sumaF += i;
}
console.log(`sumaF yra = ${sumaF}`);

console.log('-- 2. --');
let text = 'abcdef';
let textR = '';
for (let i=text.length -1; i>=0; i--) {
    textR += text[i];
    // console.log(textR);
}
console.log(`${text} -> ${textR}`);

const reversedText = text.split('').reverse().join('');
console.log(`kitas budas: ${text} -> ${reversedText}`);

console.log('-- 3. --');
