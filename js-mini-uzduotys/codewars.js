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
    for (let i=0; i<arrayOfSheep.length; i++) {
        // console.log('-> ' + arrayOfSheep[i]);
        if (arrayOfSheep[i] === true) {
            count++;
        }
    }
    return count;
}
let arrayOfSheep = [ 'null', null, undefined, true, true, true, false, true, true, true, true, '1', '0', 1, 0,
                    false, null, undefined, 0, NaN, " "];
console.log(countSheeps(arrayOfSheep));
