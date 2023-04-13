const reduce1 = [1, 2, 3, 4].reduce((t, n) => t + n);
// 1+2+3+4 = 10
console.log('1:', reduce1);

const reduce2 = [1, 2, 3, 4].reduce((t, n) => t + n, 0);
// 0+1+2+3+4 = 10
console.log('2:', reduce2);

const reduce3 = [1, 2, 3, 4].reduce((t, n) => t + n, 100);
// 100+1+2+3+4 = 110
console.log('3:', reduce3);

const reduce4 = [1, 2, 3, 4].reduce((t, n) => t + n, -100);
// -100+1+2+3+4 = -90
console.log('4:', reduce4);

const reduce5 = [1, 2, 3, 4].reduce((t, n) => t - n);
// 1-2-3-4 = -8
console.log('5:', reduce5);

const reduce6 = [1, 2, 3, 4].reduce((t, n) => t - n, 0);
// 0-1-2-3-4 = -10
console.log('6:', reduce6);

const reduce7 = [1, 2, 3, 4].reduce((t, n) => t - n, 100);
// 100-1-2-3-4 = 90
console.log('7:', reduce7);

const reduce8 = [1, 2, 3, 4].reduce((t, n) => t - n, -100);
// -100-1-2-3-4 = -110
console.log('8:', reduce8);

const reduce9 = [1, 2, 3, 4].reduce((t, n) => t * n, 10);
// 10*1*2*3*4 = 240
console.log('9:', reduce9);

const reduce10 = [1, 2, 3, 4].reduce((t, n) => t / n, 10);
// 10/1/2/3/4 ~ 0.4166667
console.log('10:', reduce10);

const reduce11 = [1, 2, 3, 4].reduce((t, n) => t % n, 10);
// Neveiks, nes 10/1, liekana 0. tada 0/2 vel 0. 
// Netinka si f-ja nes atsinesa atmintyje pries tai buvusi rezultata!!
console.log('11:', reduce11);

// SORT
const marks = [1, 2, 5, 3, 4];
marks.sort();
console.log(marks);

marks.sort((a, b) => a - b);
console.log(marks);

marks.sort((a, b) => b - a);
console.log(marks);