//Functions and Classes
function openTab(num) {
    var tabcontent  = document.querySelectorAll(".tabcontent");
    var tablinks  = document.querySelectorAll(".tabheader button");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    tablinks[num].className = "active";
    var background = tablinks[num].style.backgroundColor;
    for (var j = 0; j < tabcontent.length; j++) {
        tabcontent[j].style.display = "none";
        tabcontent[j].style.color = "white";
    }
    tabcontent[num].style.display="block";
    tabcontent[num].style.backgroundColor = background;

}
//Typewriter
var x = 0;
var txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
//Add this on later
/*Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.*/
function typeWriter(){
  if(x < txt.length){
    document.getElementById("typeWriter").innerHTML += txt.charAt(x);
    x++;
    setTimeout(typeWriter,50);
  }
}
function reset(){
    document.getElementById("typeWriter").innerHTML = "";
    x=0;
}
//Navigation
function closeN() {
    var navig = document.querySelector('.navig');
    navig.style.width = "0";
    document.body.classList.toggle("red");
}
function openN() {
    var navig = document.querySelector('.navig');
    navig.style.width = "100%";
    document.body.classList.toggle("red");
}
//Layer 2
function closeL2() {
    var l2 = document.querySelector('.layer2');
    l2.style.top="-100%";
    document.body.classList.toggle("red");
}
function openL2() {
    var l2 = document.querySelector('.layer2');
    l2.style.top="0";
    document.body.classList.toggle("red");
}
var tabcontent  = document.querySelectorAll(".tabcontent");
tabcontent[0].style.display="block";
tabcontent[0].style.backgroundColor = "green";
tabcontent[0].style.color = "white";
//Filter list
function filter() {
    var filterinp = document.querySelector("#list");
    var filt = filterinp.value.toUpperCase();
    var ul = document.querySelector("#fltul");
    var li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        var value = li[i].innerHTML;
        if (value.toUpperCase().indexOf(filt) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }
}