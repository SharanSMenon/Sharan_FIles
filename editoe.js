/*This is editoe.js.
This JavaScript file will work with editoe.html only
Unless another file is created with the exact same code as
editoe.html, this JS file will not work. This JS program is the engine behind the coolness behind editoe.html.
If you want more info, please
look at the bottom of this JS file
*/
//Functions
var codeDiv = document.getElementsByClassName('codeDiv');
for (var i = 0; i < codeDiv.length; i++) {
  w3CodeColor(codeDiv[i]);
}
function w3CodeColor(elmnt, mode) {
  var lang = (mode || "html");
  var elmntObj = (document.getElementById(elmnt) || elmnt);
  var elmntTxt = elmntObj.innerHTML;
  var tagcolor = "#D64848";
  var tagnamecolor = "#D64848";
  var attributecolor = "#cc3333";
  var attributevaluecolor = "green";
  var commentcolor = "green";
  var cssselectorcolor = "blue";
  var csspropertycolor = "#ea4848";
  var csspropertyvaluecolor = "mediumblue";
  var cssdelimitercolor = "black";
  var cssimportantcolor = "red";
  var jscolor = "black";
  var jskeywordcolor = "purple";
  var jsstringcolor = "green";
  var jsnumbercolor = "lightgreen";
  var jspropertycolor = "blue";
  elmntObj.style.fontFamily = "Consolas,'Courier New', monospace";
  if (!lang) {lang = "html"; }
  if (lang == "html") {elmntTxt = htmlMode(elmntTxt);}
  if (lang == "css") {elmntTxt = cssMode(elmntTxt);}
  if (lang == "js") {elmntTxt = jsMode(elmntTxt);}
  elmntObj.innerHTML = elmntTxt;

  function extract(str, start, end, func, repl) {
    var s, e, d = "", a = [];
    while (str.search(start) > -1) {
      s = str.search(start);
      e = str.indexOf(end, s);
      if (e == -1) {e = str.length;}
      if (repl) {
        a.push(func(str.substring(s, e + (end.length))));
        str = str.substring(0, s) + repl + str.substr(e + (end.length));
      } else {
        d += str.substring(0, s);
        d += func(str.substring(s, e + (end.length)));
        str = str.substr(e + (end.length));
      }
    }
    this.rest = d + str;
    this.arr = a;
  }
  function htmlMode(txt) {
    var rest = txt, done = "", php, comment, angular, startpos, endpos, note, i;
    comment = new extract(rest, "&lt;!--", "--&gt;", commentMode, "W3HTMLCOMMENTPOS");
    rest = comment.rest;
    while (rest.indexOf("&lt;") > -1) {
      note = "";
      startpos = rest.indexOf("&lt;");
      if (rest.substr(startpos, 9).toUpperCase() == "&LT;STYLE") {note = "css";}
      if (rest.substr(startpos, 10).toUpperCase() == "&LT;SCRIPT") {note = "javascript";}
      endpos = rest.indexOf("&gt;", startpos);
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += tagMode(rest.substring(startpos, endpos + 4));
      rest = rest.substr(endpos + 4);
      if (note == "css") {
        endpos = rest.indexOf("&lt;/style&gt;");
        if (endpos > -1) {
          done += cssMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
      if (note == "javascript") {
        endpos = rest.indexOf("&lt;/script&gt;");
        if (endpos > -1) {
          done += jsMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
    }
    rest = done + rest;
    for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("W3HTMLCOMMENTPOS", comment.arr[i]);
    }
    return rest;
  }
  function tagMode(txt) {
    var rest = txt, done = "", startpos, endpos, result;
    while (rest.search(/(\s|<br>)/) > -1) {
      startpos = rest.search(/(\s|<br>)/);
      endpos = rest.indexOf("&gt;");
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeMode(rest.substring(startpos, endpos));
      rest = rest.substr(endpos);
    }
    result = done + rest;
    result = "<span style=color:" + tagcolor + ">&lt;</span>" + result.substring(4);
    if (result.substr(result.length - 4, 4) == "&gt;") {
      result = result.substring(0, result.length - 4) + "<span style=color:" + tagcolor + ">&gt;</span>";
    }
    return "<span style=color:" + tagnamecolor + ">" + result + "</span>";
  }
  function attributeMode(txt) {
    var rest = txt, done = "", startpos, endpos, singlefnuttpos, doublefnuttpos, spacepos;
    while (rest.indexOf("=") > -1) {
      endpos = -1;
      startpos = rest.indexOf("=");
      singlefnuttpos = rest.indexOf("'", startpos);
      doublefnuttpos = rest.indexOf('"', startpos);
      spacepos = rest.indexOf(" ", startpos + 2);
      if (spacepos > -1 && (spacepos < singlefnuttpos || singlefnuttpos == -1) && (spacepos < doublefnuttpos || doublefnuttpos == -1)) {
        endpos = rest.indexOf(" ", startpos);
      } else if (doublefnuttpos > -1 && (doublefnuttpos < singlefnuttpos || singlefnuttpos == -1) && (doublefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf('"', rest.indexOf('"', startpos) + 1);
      } else if (singlefnuttpos > -1 && (singlefnuttpos < doublefnuttpos || doublefnuttpos == -1) && (singlefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf("'", rest.indexOf("'", startpos) + 1);
      }
      if (!endpos || endpos == -1 || endpos < startpos) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeValueMode(rest.substring(startpos, endpos + 1));
      rest = rest.substr(endpos + 1);
    }
    return "<span style=color:" + attributecolor + ">" + done + rest + "</span>";
  }
  function attributeValueMode(txt) {
    return "<span style=color:" + attributevaluecolor + ">" + txt + "</span>";
  }
  function commentMode(txt) {
    return "<span style=color:" + commentcolor + ">" + txt + "</span>";
  }
  function cssMode(txt) {
    var rest = txt, done = "", s, e, comment, i, midz, c, cc;
    comment = new extract(rest, /\/\*/, "*/", commentMode, "W3CSSCOMMENTPOS");
    rest = comment.rest;
    while (rest.search("{") > -1) {
      s = rest.search("{");
      midz = rest.substr(s + 1);
      cc = 1;
      c = 0;
      for (i = 0; i < midz.length; i++) {
        if (midz.substr(i, 1) == "{") {cc++; c++}
        if (midz.substr(i, 1) == "}") {cc--;}
        if (cc == 0) {break;}
      }
      if (cc != 0) {c = 0;}
      e = s;
      for (i = 0; i <= c; i++) {
        e = rest.indexOf("}", e + 1);
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s + 1);
      done += cssPropertyMode(rest.substring(s + 1, e));
      rest = rest.substr(e);
    }
    rest = done + rest;
    rest = rest.replace(/{/g, "<span style=color:" + cssdelimitercolor + ">{</span>");
    rest = rest.replace(/}/g, "<span style=color:" + cssdelimitercolor + ">}</span>");
    for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("W3CSSCOMMENTPOS", comment.arr[i]);
    }
    return "<span style=color:" + cssselectorcolor + ">" + rest + "</span>";
  }
  function cssPropertyMode(txt) {
    var rest = txt, done = "", s, e, n, loop;
    if (rest.indexOf("{") > -1 ) { return cssMode(rest); }
    while (rest.search(":") > -1) {
      s = rest.search(":");
      loop = true;
      n = s;
      while (loop == true) {
        loop = false;
        e = rest.indexOf(";", n);
        if (rest.substring(e - 5, e + 1) == "&nbsp;") {
          loop = true;
          n = e + 1;
        }
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s);
      done += cssPropertyValueMode(rest.substring(s, e + 1));
      rest = rest.substr(e + 1);
    }
    return "<span style=color:" + csspropertycolor + ">" + done + rest + "</span>";
  }
  function cssPropertyValueMode(txt) {
    var rest = txt, done = "", s;
    rest = "<span style=color:" + cssdelimitercolor + ">:</span>" + rest.substring(1);
    while (rest.search(/!important/i) > -1) {
      s = rest.search(/!important/i);
      done += rest.substring(0, s);
      done += cssImportantMode(rest.substring(s, s + 10));
      rest = rest.substr(s + 10);
    }
    result = done + rest;
    if (result.substr(result.length - 1, 1) == ";" && result.substr(result.length - 6, 6) != "&nbsp;" && result.substr(result.length - 4, 4) != "&lt;" && result.substr(result.length - 4, 4) != "&gt;" && result.substr(result.length - 5, 5) != "&amp;") {
      result = result.substring(0, result.length - 1) + "<span style=color:" + cssdelimitercolor + ">;</span>";
    }
    return "<span style=color:" + csspropertyvaluecolor + ">" + result + "</span>";
  }
  function cssImportantMode(txt) {
    return "<span style=color:" + cssimportantcolor + ";font-weight:bold;>" + txt + "</span>";
  }
  function jsMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", jsStringMode);
      dfnuttpos = getPos(rest, '"', '"', jsStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
      numpos = getNumPos(rest, jsNumberMode);
      keywordpos = getKeywordPos("js", rest, jsKeywordMode);
      dotpos = getDotPos(rest, jsPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span style=color:" + jscolor + ">" + rest + "</span>";
  }
  function jsStringMode(txt) {
    return "<span style=color:" + jsstringcolor + ">" + txt + "</span>";
  }
  function jsKeywordMode(txt) {
    return "<span style=color:" + jskeywordcolor + ">" + txt + "</span>";
  }
  function jsNumberMode(txt) {
    return "<span style=color:" + jsnumbercolor + ">" + txt + "</span>";
  }
  function jsPropertyMode(txt) {
    return "<span style=color:" + jspropertycolor + ">" + txt + "</span>";
  }
  function getDotPos(txt, func) {
    var x, i, j, s, e, arr = [".","<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%"];
    s = txt.indexOf(".");
    if (s > -1) {
      x = txt.substr(s + 1);
      for (j = 0; j < x.length; j++) {
        cc = x[j];
        for (i = 0; i < arr.length; i++) {
          if (cc.indexOf(arr[i]) > -1) {
            e = j;
            return [s + 1, e + s + 1, func];
          }
        }
      }
    }
    return [-1, -1, func];
  }
  function getMinPos() {
    var i, arr = [];
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i][0] > -1) {
        if (arr.length == 0 || arguments[i][0] < arr[0]) {arr = arguments[i];}
      }
    }
    if (arr.length == 0) {arr = arguments[i];}
    return arr;
  }
  function getKeywordPos(typ, txt, func) {
    var words, i, pos, rpos = -1, rpos2 = -1, patt;
    if (typ == "js") {
      words = ["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete",
      "do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import",
      "in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static",
      "super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"];
    }
    for (i = 0; i < words.length; i++) {
      pos = txt.indexOf(words[i]);
      if (pos > -1) {
        patt = /\W/g;
        if (txt.substr(pos + words[i].length,1).match(patt) && txt.substr(pos - 1,1).match(patt)) {
          if (pos > -1 && (rpos == -1 || pos < rpos)) {
            rpos = pos;
            rpos2 = rpos + words[i].length;
          }
        }
      }
    }
    return [rpos, rpos2, func];
  }
  function getPos(txt, start, end, func) {
    var s, e;
    s = txt.search(start);
    e = txt.indexOf(end, s + (end.length));
    if (e == -1) {e = txt.length;}
    return [s, e + (end.length), func];
  }
  function getNumPos(txt, func) {
    var arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%", "="], i, j, c, startpos = 0, endpos, word;
    for (i = 0; i < txt.length; i++) {
      for (j = 0; j < arr.length; j++) {
        c = txt.substr(i, arr[j].length);
        if (c == arr[j]) {
          if (c == "-" && (txt.substr(i - 1, 1) == "e" || txt.substr(i - 1, 1) == "E")) {
            continue;
          }
          endpos = i;
          if (startpos < endpos) {
            word = txt.substring(startpos, endpos);
            if (!isNaN(word)) {return [startpos, endpos, func];}
          }
          i += arr[j].length;
          startpos = i;
          i -= 1;
          break;
        }
      }
    }
    return [-1, -1, func];
  }
}
function* NumberGenerator() {
  var index = 0;
  while (true) {
    yield index++;
  }
}
$("pre").html(function (index, html) {
    return html.replace(/^(.*)$/mg, "<span class=\"line\">$1</span>")
});
/*
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud/*exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
*/
$(document).ready(function(){
  $(".nava").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },800,function(){
        window.location.hash = hash;
      });
    } // End if
  });
});

function show(text){
    var snack = document.getElementById("snackbar");
    snack.style.bottom = "30px";
    snack.style.opacity = "1";
    snack.innerHTML = text;
    setTimeout(function(){
      snack.style.bottom = "-70px";
      snack.style.opacity = "0";
    },3000);
  }
//Typewriter
var x = 0;
var txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
function typeWriter(){
  if(x < txt.length){
      document.getElementById("typewriter").innerHTML += txt.charAt(x);
        x++;
        setTimeout(typeWriter,50);
  }
}
function reset() {
  x = 0;
  document.getElementById("typewriter").innerHTML = "";
}
function stoggle(x){
    x.classList.toggle("active");
      if(x.className == "slcontainer active"){
        x.style.backgroundColor="grey";
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
      }
      else{
        x.style.backgroundColor="#eee";
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
      }
      if(x.className == "slcontainer round active"){
        x.style.backgroundColor="blue";
        document.body.style.backgroundColor="lightblue";
      }
   }
var z = 0;
var n = "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277";
function piWriter(){
  if(z < n.length){
    document.getElementById("piwriter").innerHTML += n.charAt(z);
    z++;
    setTimeout(piWriter,10);
  }
}
function pireset() {
  z = 0;
  document.getElementById("piwriter").innerHTML = "";
}
//Current time
var slides = document.getElementsByClassName("mySlides");
var slideIndex = 1;
currentSlide(slideIndex)
/*
setInterval(function () {
  plusSlides(1);
},5000)
*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var dots = document.getElementsByClassName("dot");
  console.log(slides[1])
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
function ListSort(list) {
  function minimum(num1,num2){
    if(num1 < num2){
      return num1;
    }else{
      return num2
    }
  }
  function maximum(num1,num2){
    if(num1 > num2){
      return num1;
    }else{
      return num2
    }
  }
  function sort(list,empty) {
    /**/
    var smallest = list.reduce(minimum);
    var index = list.indexOf(smallest);
    empty.push(list[index]);
    list.splice(index,1)
    if(list.length == 0){
      return empty;
    }else{
      return sort(list,empty)
    }
  }
  console.log("List: ")
  console.log(list);
  console.log("Sorted list: ")
  console.log(sort(list,[]));
}
function randomList(length,to){
  var list = [];
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random()*to)
    list.push(random)
  }
  return list;
}
setInterval(function(){
  var time = new Date();
  var min = time.toLocaleTimeString();
  document.getElementById('time').innerHTML = "Current time: "+min;
},100);
var navig = document.getElementsByClassName('navig')[0];
var closhelp = document.getElementsByClassName('closhelp')[0];
var open1 = false;
function closeN(){
  navig.style.width = "0%";
  closhelp.style.opacity = "0";
  setTimeout(function(){
    closhelp.style.display = "none";
  },500)
  open1 = false;
}
function openN(){
  var closhelp = document.querySelector('.closhelp')
  navig.style.width = "30%";
  closhelp.style.display = "block";
  setTimeout(function(){
    closhelp.style.opacity = "1";
  },0)
  open1 = true;
}
function toggle(x){
  console.log();
}
var closec = document.querySelector('.closec');
closec.onclick = function(){
  closeN();
}
/*
var open = document.getElementsByClassName('open')[0];
open.onclick = function() {
  if(open1 == false){
    openN();
  }else{
    closeN();
  }
}
*/
var acc = document.getElementsByClassName("accord3");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent p1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks p1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tabcontent[i].style.height = "0";
    }
    document.getElementById(cityName).style.display = "block";
    setTimeout(function(){
      document.getElementById(cityName).style.height = "250px"
    },50)
    evt.currentTarget.className += " active";
}
function openCity2(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent p2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].style.height = "0";
    }
    tablinks = document.getElementsByClassName("tablinks p2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    setTimeout(function(){
      document.getElementById(cityName).style.height = "250px"
    },50)
    evt.currentTarget.className += " active";
}

function openTab(event, num) {
  var tablinks = document.querySelectorAll('.tab2 button');
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].style.width = "0";
  }
  tabcontent[num-1].style.display = "block";
  setTimeout(function(){
    tabcontent[num-1].style.width = "400px";
  },50)
  event.currentTarget.className += " active";
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
  return list;
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
  div.style.opacity= "0";
  setTimeout(function(){
    div.style.display = "none";
  },300)
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
}
var Numgen = NumberGenerator();
for (var i = 0; i < 3; i++) {
  console.log(Numgen.next().value);
}

var rect1 = new rectangle(100,100,"blue");
var cir1 = new circle(100,100,"blue");
var closeb = document.getElementsByClassName("closeb");
var list = document.getElementsByClassName('todo-div');
var close = document.getElementsByClassName("closebtn");
var shlist = ["Piano","Video Games","Python","Electronics","Math","Trig Khan","Dino course"];

var salist = ["Office work","Food","Drop off","Pay bills","Month-end stuff"];
var anlist = ["Office work","Food","Take care family","Medicine"];
var jalist = ["Teaching Textbooks","Clean room"];
var sharan = new person("Sharan",12,57,66,"sharansajivmenon@gmail.com",shlist);
var sajiv = new person("Sajiv",40,71,150,"sajivkamalakar@gmail.com",salist);
var anu = new person("Anu",36,65,132,"anuradhasajiv@gmail.com",anlist);
var jahnvi = new person("Jahnvi",8,49,52,"jahnvisajivmenon@gmail.com",jalist);
summer_switcher(sharan);

//Modal
var modal = document.getElementById('myModal');
var modalcontent = document.getElementsByClassName("modal-content")[0];
var modalbody = document.querySelector('.modal-body');
var btn = document.getElementsByClassName("modalbtn");
var span = document.getElementsByClassName("close")[0];
function OpenM(div) {
  modalcontent.style.webkitAnimationName = "slideIn";
  modal.style.display = "block";
  var d = document.querySelector("."+div)
  modalbody.innerHTML = d.innerHTML;
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalcontent.style.webkitAnimationName = "slideOut";
  modal.style.display = "block";
  setTimeout(function () {
    modal.style.display  ="none";
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
  if(event.target == closhelp){
    closeN();
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
console.log("Ignore Lorem Ipsum. It is dummy text");
/*
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
*/
/*
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
*/
