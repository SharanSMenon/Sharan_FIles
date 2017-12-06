class person {
  constructor (name,age,height,weight,objects) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.objects = objects;
  }
  solve(equation) {
      var ans = eval(equation);
      console.log("Answer is "+ans);
      return ans;
  }
  greet(){
      
  }
}
var input = require('readline-sync');
var name = input.question("Enter your name: ")
console.log(name);