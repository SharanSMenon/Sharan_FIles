function Sequence(n) {
  var list = [n]
  while (list[list.length-1] != 1) {
    var num;
    if(list[list.length-1]%2 == 1){
      num = ((list[list.length-1]) * 3) + 1;
    }else{
      num = (list[list.length-1])/2;
    }
    list.push(num)
  }
  console.log("Length: "+list.length);
  return list
}
var seq = Sequence(55)
console.log("Numbers: "+seq)
console.log("All numbers:")
console.log(seq)
console.log("Length: "+seq.length)
