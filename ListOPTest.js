const lf = require('./listsOP.js');
var l = []; //[3, 5, 4, 4, 1, 1, 2, 3];
for (let x = 0; x < 10; x++) {
    const n = Math.round(Math.random() * 100)
    l.push(n);
}
console.log(`Original list: ${l}`);
console.log(`Sorted list: ${lf.sort(l)}`);
console.log(`Average of list: ${lf.average(l)}`);
console.log(`Median of list: ${lf.median(l)}`);
console.log(`Minimum of list: ${lf.smallest(l)}`);
console.log(`Maximum of list: ${lf.largest(l)}`);
