/*This is editoe.js.
This JavaScript file will work with editoe.html only
Unless another file is created with the exact same code as
editoe.html, this JS file will not work. This JS program is the engine behind the coolness behind editoe.html.
If you want more info, please
look at the bottom of this JS file
*/
//Functions
//Generators
function* NumberGenerator() {
  var index = 0;
  while (true) {
    yield index++;
  }
}
//Current time
setInterval(function(){
  var time = new Date();
  var min = time.toLocaleTimeString();
  var lvh = time.getHours();;
  if(lvh > 12){
    lvh = lvh-15;
    if(lvh <= 0){
      lvh = (lvh*-1)-1;
    }
  }
  var lvm = time.getMinutes();
  var lvs = time.getSeconds();
  document.getElementById('time').innerHTML = "Current time: "+min+"<br>Las vegas: "+lvh+":"+lvm+":"+lvs;
},100);
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function summer_switcher(person){
  var ul_list = document.getElementById('summer-ul');
  var list_items = ul_list.getElementsByTagName('li');
  $("#summer-ul").empty()
  var item = person.items;
  for(push = 0;push < person.items.length;push++){
    var list_ele = document.createElement("li");
    list_ele.setAttribute("id","list"+push);
    var inside_li = person.items[push];
    var tn = document.createTextNode(inside_li)
    list_ele.appendChild(tn);
    ul_list.appendChild(list_ele);
  }
}
function newElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("alert_text").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("alert_text").value = "";
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeb";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < closeb.length; i++) {
    closeb[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function clearList(){
  $("#myUl").empty();
  var li = document.getElementById("myUL").getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    li[i].style.display = "none";
  }
}
$(".closebtn").click(function(){
  var div = this.parentElement;
  console.log("gg");
  closer(div);
});
$(".closeb").click(function(){
  var div = this.parentElement;
  console.log("gg");
  closer(div);
});
function enterChecker(evt){
  if(evt.keyCode == 13){
    newElement();
  }
}
//Classes--
//Rectangle class
class rectangle {
  constructor(height,width,bc){
    this.height = height;
    this.width = width;
    this.area = height*width;
    this.bc = bc;
    console.log("Type var.draw() in the console to draw the rectangle.")
    this.perimeter = (height*2)+(width*2);
    //rectangle function
    this.drawTimes = 0;
    this.draw = function(){
      this.drawTimes++;
      if(this.drawTimes == 1){
        var div = document.createElement("div");
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(div);
        div.style.height = this.height+"px";
        div.style.width = this.width+"px";
        div.style.backgroundColor = this.bc;
        div.style.marginBottom = 10+"px";
      }else{
        alert("You can only draw each rectangle once");
        console.log("You can only draw each rectangle once");
      }
    }
  }
}
//Circle class
class circle {
  constructor(height,width,bc) {
    this.height = height;
    this.width = width;
    this.bc = bc;
    this.drawTimes = 0;
  }
  //draw function
  draw(){
    this.drawTimes++;
    if(this.drawTimes == 1){
      var div = document.createElement("div");
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(div);
      div.style.height = this.height+"px";
      div.style.width = this.width+"px";
      div.style.borderRadius = 50+"%";
      div.style.backgroundColor = this.bc;
      div.style.marginBottom = 10+"px";
    }else{
      alert("You can only draw each circle once");
      console.log("You can only draw each circle once");
    }
  }
}
var rotatDIV  =document.querySelector('.rotateJS');
rotatDIV.onclick = function(){
  rotatDIV.animate([
    {transform:'rotate(0deg)'},
    {transform:'rotate(360deg)'},
      ],{
    duration: 1000,
    iterations: Infinity,
    easing: 'cubic-bezier(0.85,0.55,0.33,0)'
  })
}

//Fibonacci numbers
function Fibonacci(length){
  var list = [0,1]
  for (var i = 0; i < length - 2 ; i++) {
    var newAppend = list[list.length -1] + list[list.length -2];
    list.push(newAppend);
  }
  return list
}
//Person constructor
function person(name,age,height,weight,email,items){
  this.name = name;
  this.age = age;
  this.height = height;
  this.email = email;
  this.weight = weight;
  this.items = items;
  this.hello = function(){
    console.log("Hello from "+this.name);
  }
  this.bye = function(){
    console.log("Bye from "+this.name);
  }
}
function closer(div){
  div.style.opacity = "0";
  div.style.display = "none";
};
$(".check").click(function(ev){
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
})
function slider(number){
  $(".data"+number).slideToggle(500);
}
function Speslider(number){
  $(".spi"+number).slideToggle(500);
}
function Accslider(number){
  $(".accord"+number).slideToggle(500);
  if($(".i"+number).hasClass("up") == true){
    $(".i"+number).addClass("down").removeClass("up");
  }else{
    $(".i"+number).addClass("up").removeClass("down");
  }
}
function fader(number){
  $(".data"+number).fadeToggle(500);
}
//Main code
var fib1 = Fibonacci(26);
console.log(fib1);
for (var i = 0; i < fib1.length; i++) {
  document.getElementById('fib').innerHTML = document.getElementById('fib').innerHTML +i+": "+ fib1[i]+"<br>";
};
var Numgen = NumberGenerator();
for (var i = 0; i < 3; i++) {
  console.log(Numgen.next().value);
};
var rect1 = new rectangle(100,100,"blue");
var cir1 = new circle(100,100,"blue");
var closeb = document.getElementsByClassName("closeb");
var list = document.getElementsByClassName('todo-div');
var close = document.getElementsByClassName("closebtn");
var shlist = ["Piano","Video Games","Python","Electronics","Math","Trig Khan","Dino course"]
var salist = ["Office work","Food","Drop off","Pay bills","Month-end stuff"]
var anlist = ["Office work","Food","Take care family","Medicine"]
var jalist = ["Teaching Textbooks","Clean room"]
var sharan = new person("Sharan",12,57,66,"sharansajivmenon@gmail.com",shlist);
var sajiv = new person("Sajiv",40,71,150,"sajivkamalakar@gmail.com",salist);
var anu = new person("Anu",36,65,132,"anuradhasajiv@gmail.com",anlist);
var jahnvi = new person("Jahnvi",8,49,52,"jahnvisajivmenon@gmail.com",jalist);
summer_switcher(sharan);
//Modal
var modal = document.getElementById('myModal');
var modalcontent = document.getElementsByClassName("modal-content")[0];
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modalcontent.style.webkitAnimationName = "slideIn";
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalcontent.style.webkitAnimationName = "slideOut";
  modal.style.display = "block";
  setTimeout(function () {
    modal.style.display  ="none"
  },250)
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalcontent.style.webkitAnimationName = "slideOut";
    modal.style.display = "block";
    setTimeout(function () {
      modal.style.display  ="none"
    },250)
  }
}
//constructor code p2
document.getElementById("name").innerHTML = sharan.name;
document.getElementById("age").innerHTML = "Age: "+sharan.age+" yrs";
document.getElementById("height").innerHTML = "Height: "+sharan.height+" in";
document.getElementById("weight").innerHTML = "Weight: "+sharan.weight+" lbs";
document.getElementById("email").innerHTML = "Email: "+sharan.email;
$(".submit").click(function(){
  var namee = $(".dominf").val();
  var pers = namee.toLowerCase();
  if(pers == "sharan"){
    document.getElementById("name").innerHTML = sharan.name;
    document.getElementById("age").innerHTML = "Age: "+sharan.age+" yrs";
    document.getElementById("height").innerHTML = "Height: "+sharan.height+" in";
    document.getElementById("weight").innerHTML = "Weight: "+sharan.weight+" lbs";
    document.getElementById("email").innerHTML = "Email: "+sharan.email;
    summer_switcher(sharan);
  }
  if(pers == "sajiv"){
    document.getElementById("name").innerHTML = sajiv.name;
    document.getElementById("age").innerHTML = "Age: "+sajiv.age+" yrs";
    document.getElementById("height").innerHTML = "Height: "+sajiv.height+" in";
    document.getElementById("weight").innerHTML = "Weight: "+sajiv.weight+" lbs";
    document.getElementById("email").innerHTML = "Email: "+sajiv.email;
  summer_switcher(sajiv);
  }
  if(pers == "anu"){
    document.getElementById("name").innerHTML = anu.name;
    document.getElementById("age").innerHTML = "Age: "+anu.age+" yrs";
    document.getElementById("height").innerHTML = "Height: "+anu.height+" in";
    document.getElementById("weight").innerHTML = "Weight: "+anu.weight+" lbs";
    document.getElementById("email").innerHTML = "Email: "+anu.email;
    summer_switcher(anu);
  }
  if(pers == "jahnvi"){
    document.getElementById("name").innerHTML = jahnvi.name;
    document.getElementById("age").innerHTML = "Age: "+jahnvi.age+" yrs";
    document.getElementById("height").innerHTML = "Height: "+jahnvi.height+" in";
    document.getElementById("weight").innerHTML = "Weight: "+jahnvi.weight+" lbs";
    document.getElementById("email").innerHTML = "Email: "+jahnvi.email;
    summer_switcher(jahnvi);
  }
})
$("#accordion").accordion();
//End of JS program
/*Note to user: This is not a proper JS program.
This file developed as time went on.
As more HTML and CSS to the
other 2 files, more JS was added
 to this file and will continue to
do so in the future. This file need JQuery to work.
Here is Microsoft's CDN for JQuery:
"
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
"
Copy this HTML to the header (the <head> tag) section of your HTML file.
Thank you for looking at this JS file.
*/
