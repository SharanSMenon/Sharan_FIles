let minimum = (a, b) => a < b ? a : b;
let maximum = (a, b) => a > b ? a : b;
let sort = array => {
    var newArray = [];
    var clone = array.slice();
    for (let x = 0; x < array.length; x++) {
        const minimu = clone.reduce(minimum);
        var index = clone.indexOf(minimu)
        newArray.push(minimu);
        clone.splice(index, 1)
    }
    return newArray;
}
let largest = array => array.reduce(maximum);
let smallest = array => array.reduce(minimum);
let average = array => {
    const length = array.length;
    var n = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        n += element;
    }
    var ans = n / length;
    return ans;
}
let median = array => {
    var median = 0,
        ln = array.length;
    var srt = sort(array)
    if (ln % 2 === 0) {
        median = (srt[ln / 2 - 1] + srt[ln / 2]) / 2;
    } else {
        median = srt[(ln - 1) / 2];
    }
    return median;
}
module.exports = {
    minimum,
    maximum,
    sort,
    largest,
    smallest,
    average,
    median
}