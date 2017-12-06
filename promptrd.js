/*
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
*/
/*
Class basic format:
    class ClassName {`
      constructor() {

      }
    }
*/
var readline = require('readline-sync');
function age() {
    var brthy = readline.question("Enter your birthyear: ");
    brthy = parseInt(brthy);
    var datetime = new Date();
    var year = datetime.getFullYear();
    var age = year - brthy;
    return age;   
}
function birthyear() {
    var age = readline.question("Enter your age: ");
    age = parseInt(age);
    var datetime = new Date();
    var year = datetime.getFullYear();
    var brthy = year - age;
    return brthy;  
}
var name = readline.question("What is your name?");
console.log("Hello, "+name);
var find = readline.question("Do you want to find out your birthyear or age?");
if (find == "age" || find == "Age") {
    var ag = age();
    console.log("You are " + ag + " years old.");
} else {
    var by = birthyear();
    console.log("You were born in " + by + ".");
}