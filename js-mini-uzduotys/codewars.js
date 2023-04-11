console.clear();

console.log('-1-'); // -1-
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
    // return str1; // reverse those words
}
console.log(reverseWords('hello word!'));

console.log('-2-'); // -2-
let count=0;
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    for (i=0; i<arrayOfSheep.length; i++) {
        // console.log('-> ' + arrayOfSheep[i]);
        arrayOfSheep[i] === true ? count += arrayOfSheep[i] : '';
    }
    return count;
}
let arrayOfSheep = [true, false, true, true, false];
console.log(countSheeps(arrayOfSheep));
