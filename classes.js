function person(name,age){
  this.name = name;
  this.age = age;
  this.hello = function(){
    console.log("Hello");
  }
}
