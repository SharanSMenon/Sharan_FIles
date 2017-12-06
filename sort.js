function ListSort(list) {
  let minimum = (a, b) => a < b ? a : b;
  function sort(list, empty) {
    /**/
    const smallest = list.reduce(minimum);
    var index = list.indexOf(smallest);
    empty.push(list[index]);
    list.splice(index, 1)
    if (list.length == 0) {
      return empty;
    } else {
      return sort(list, empty)
    }
  }
  console.log("List: " + list)
  console.log("Sorted list: " + sort(list, []))
}
var lst = [];
for (let x = 0; x < 10; x++) {
  const n = Math.round(Math.random() * 100)
  lst.push(n);
}
ListSort(lst);
