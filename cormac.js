/*
Note: Please keep
all cormac.html, cormac.css
and cormac.js in the
same folder.
*/
//Slide show
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
setInterval(function () {
  plusSlides(1)
},5000)
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//Navigation slideIn
var navig = document.getElementsByClassName('navig')[0];
var open1 = false;
var close = document.querySelector('.close');
var closhelp = document.getElementsByClassName('closhelp')[0];

function closeN(){
  navig.style.width = "0%";
  open.style.color = "black";
  closhelp.style.display = "none";
  open1 = false;
}
function openN(){
  navig.style.width = "30%";
  open.style.color = "white";
  closhelp.style.display = "block";
  open1 = true;
}
close.onclick = function () {
  closeN();
}
window.onclick = function(event){
  if(event.target == closhelp){
    closeN();
  }
}
var open = document.getElementsByClassName('open')[0];
open.onclick = function() {
  if(open1 == false){
    openN();
  }else{
    closeN();
  }
}
  //Social media
  var facebook = document.getElementById('facebook');
  facebook.onclick = function(){
    window.location.href = 'https://www.facebook.com';
  }
  var twitter = document.getElementById('twitter');
  twitter.onclick = function(){
    window.location.href = 'https://www.twitter.com';
  }
  var linkedin = document.getElementById('soc3');
  linkedin.onclick = function(){
    window.location.href = 'https://www.linkedin.com/company/cormac-corporation';
  }
