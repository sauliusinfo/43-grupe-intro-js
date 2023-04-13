console.clear();

function go(a,b) {
    const suma = a+b;
    return suma;
}
console.log('F-1: ', go(10,11));

// arrow f-jos
const sum = (a,b) => a+b;
console.log('AF-1: ', sum(10,11));

const double = (num) => num * 2;
console.log('AF-2: ', double(10.5));
