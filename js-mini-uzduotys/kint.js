console.clear();
console.log(`:: Kintamųjų inicijavimas ::`);
// 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//      Po kiekvieno jų inicijavimo, išvesti į console
// 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//      Po kiekvieno jų inicijavimo, išvesti į console
// 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//      Po kiekvieno jų inicijavimo, išvesti į console
// 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//      Po kiekvieno jų inicijavimo, išvesti į console

console.log('-- 1. --');
const x= 3; const y= 6; const z= 10;
console.log(`${x} ${y} ${z}`);

console.log('-- 2. --');
const x1='trys'; const y1='šeši'; const z1='dešimt';
console.log(`${x1} ${y1} ${z1}`);

console.log('-- 3. --')
const list1 = [1, 2, 3, 4, 5];
console.log(`${list1}`);
const list2 = [10, 20, 30, 40, 50];
console.log(`${list2}`);
const list3 = [100, 200, 300, 400, 500];
console.log(`${list3}.`);

console.log('-- 4. --')
const list11 = ['1', '2', '3', '4', '5'];
console.log(`${list11}`);
const list22 = ['10', '20', '30', '40', '50'];
console.log(`${list22};`);
const list33 = ['100', '200', '300', '400', '500'];
console.log(`${list33}`);

console.clear();
console.log(':: Veiksmai su kintamaisiais ::');
// 1. Susumuoti visus skaičiaus tipo kintamuosius
//      Rezultatą išvesti į console
// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
//      Rezultatą išvesti į console
// 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//      1-2+3-4+5
//      Rezultatą išvesti į console
// 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

console.log('-- 1. --');
console.log(x + y + z);

console.log('-- 2. --');
console.log(`${x1} ${y1} ${z1}`);

console.log('-- 3. --');
console.log(list1[0] - list1[1] + list1[2] - list1[3] + list1[4]);
console.log(list2[0] - list2[1] + list2[2] - list2[3] + list2[4]);
console.log(list3[0] - list3[1] + list3[2] - list3[3] + list3[4]);

console.log('-- 4. --');
const textTransformer = list11.join(', ') + ', ' + list22.join(', ') + ', ' + list33.join(', ');
console.log(textTransformer);

console.clear();
console.log(':: Kintamųjų palyginimas ::');
// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

// 1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
//      a. kuris didesnis
//      b. kuris mažesnis
//      c. ar jie lygūs
//      d. ar jie nelygūs
//      e. kuris didesnis arba lygus
//      f. kuris mažesnis arba lygus
// 2. Išvesti teksto tipo kintamųjų ilgius
// 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
//      a. kuris didesnis
//      b. kuris mažesnis
//      c. ar jie lygūs
//      d. ar jie nelygūs
//      e. kuris didesnis arba lygus
//      f. kuris mažesnis arba lygus
// 4. Išvesti sąrašo tipo kintamųjų ilgius
// 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
//      a. kuris didesnis
//      b. kuris mažesnis
//      c. ar jie lygūs
//      d. ar jie nelygūs
//      e. kuris didesnis arba lygus
//      f. kuris mažesnis arba lygus
