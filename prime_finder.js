var inp = require('readline-sync');
function primes(array) {
    //Remove 1
    var ind = array.indexOf(1);
    array.splice(ind, 1);
    //Filter out multiples of 2
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element % 2 == 0 && element != 2) {
            var ind = array.indexOf(array[i]);
            array.splice(ind,1);
        }
    }
    //Filter out multiples of 3
    for (var i = 1; i < array.length; i++) {
        var element = array[i];
        if (element % 3 == 0 && element != 3) {
            var ind = array.indexOf(array[i]);
            array.splice(ind, 1);
        }
    }
    //Filter out multiples of 5
    for (var i = 1; i < array.length; i++) {
        var element = array[i];
        if (element % 5 == 0 && element != 5) {
            var ind = array.indexOf(array[i]);
            array.splice(ind, 1);
        }
    }
    //Filter out multiples of 7
    for (var i = 1; i < array.length; i++) {
        var element = array[i];
        if (element % 7 == 0 && element != 7) {
            var ind = array.indexOf(array[i]);
            array.splice(ind, 1);
        }
    }
    return array;
}
var array = [];
var amount = inp.questionInt("Enter length of list: ");
for (var i = 1; i < amount+1; i++) {
    array.push(i);
}
console.log("Original array: ");
console.log(array);
var p = primes(array);
console.log("All primes: ");
console.log(p);
