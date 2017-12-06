var tabcontent = document.querySelectorAll('.tabcontent');
tabcontent[0].style.display="block";
function openTab(event,id) {
  var tabcontent = document.querySelectorAll('.tabcontent');
  var tablinks = document.querySelectorAll('.tablinks');
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  event.target.className += " active";
  tabcontent[id].style.display = "block"
}
function closeN() {
  var navig = document.querySelector('.navig');
  navig.style.width = "0";
}
function openN() {
  var navig = document.querySelector('.navig');
  navig.style.width = "100%";
}
