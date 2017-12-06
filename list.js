setInterval(function(){
  var time = new Date();
  var min = time.toLocaleTimeString();
  document.getElementById('time').innerHTML = "Current time: "+min;
},1000);
function list_ul_appender(list){
  var ul = document.getElementById('listUl');
  $(ul).empty();
  for(i = 0;i < list.length;i++){
    var li = document.createElement("li");
    var rawTxt = list[i];
    var flTxt = document.createTextNode(rawTxt);
    li.appendChild(flTxt);
    ul.appendChild(li);
  };
};
var list1 = ["Piano","Video games","Math","Python","Video Games","Dino Course"];
list_ul_appender(list1);
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    if(ev.target.className == "checked"){
      ev.target.innerHTML = "\u2714 " + ev.target.innerHTML;
    }else{
      var evTxt = ev.target.innerHTML;
      evTxt = evTxt.substring(1);
      evTxt.replace('\u2714','');
      ev.target.innerHTML = evTxt;
    }
  }
}, false);
var counter1 = 0;
var chkbox = document.getElementsByClassName('chkbox');
for (var i = 0; i < chkbox.length; i++) {
  chkbox.onclick = function(event){
    counter1++;
    console.log(counter1);
    if(counter1%2 == 1){
      event.target.style.backgroundColor = "white";
      var p = document.createElement("p");
      var txt = document.createTextNode("\u2714");
      p.className = "p";
      p.appendChild(txt);
      event.target.appendChild(p);
    }else{
      event.target.style.backgroundColor = "white";
      event.target.innerHTML = "";
    }
  };
}
