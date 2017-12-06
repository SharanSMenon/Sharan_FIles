//beginning
//Note: Chrome supports ES6 syntax
var y = document.querySelectorAll(".sliderC");
for (var i = 0; i < y.length; i++) {
  if (y[i].className == "sliderC active") {
    y[i].style.backgroundColor = "blue";
    y[i].style.border = "2px solid blue";
  } else {
    y[i].style.backgroundColor = "#white";
    y[i].style.border = "2px solid black";
  }
}
let ar = (a,b) => a+b;
console.log(`10 + 20 = ${ar(10, 20)}`);
function toggle(x) {
  x.classList.toggle("active");
  if (x.className == "sliderC active") {
    x.style.backgroundColor = "blue";
    x.style.border = "2px solid blue";
  } else {
    x.style.backgroundColor = "white";
    x.style.border = "2px solid black";
  }
}
//Layer 2
function closeL2() {
  var l2 = document.querySelector('.layer2');
  l2.style.top = "-100%";
}
function openL2() {
  var l2 = document.querySelector('.layer2');
  l2.style.top = "0";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function toggle4(x) {
  x.classList.toggle("active9");
}
var tabcontent = document.querySelectorAll('.tabcontent');
tabcontent[0].style.display = "block";
function openTab(event, id) {
  var tabcontent = document.querySelectorAll('.tabcontent');
  var tablinks = document.querySelectorAll('.tablinks');
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  event.target.className += " active";
  tabcontent[id].style.display = "block";
}
//Slider type 2
var y = document.querySelectorAll(".sliderC2");
for (var i = 0; i < y.length; i++) {
  if (y[i].className == "sliderC2 active2") {
    y[i].style.backgroundColor = "green";
  } else {
    y[i].style.backgroundColor = "#eee";
  }
}

function toggle2(x) {
  x.classList.toggle("active2");
  if (x.className == "sliderC2 active2") {
    x.style.backgroundColor = "green";
  } else {
    x.style.backgroundColor = "#eee";
  }
}

function snaToggle() {
  var snackbar = document.querySelector("#snackbar");
  snackbar.style.bottom = "20px";
  snackbar.style.opacity = "1";
  setTimeout(function () {
    snackbar.style.bottom = "-50px";
    snackbar.style.opacity = "0";
  }, 3000);
}
function tgplayer(x) {
  x.classList.toggle("change");
}
function run() {
  var pbar = document.querySelector(".pbar");
  var width = 1;
  var wid = document.querySelector("#width");
  var re = setInterval(frame, 1);
  function frame() {
    console.log(10);
    if (width >= 1000) {
      clearInterval(re);
    } else {
      width++;
      pbar.style.width = (width / 10) + "%";
      wid.innerHTML = parseInt(width / 10) + "%";
    }
  }
}
var modal = document.querySelector('.modal');
var modalcontent = document.getElementsByClassName("modal-content")[0];
var modalbody = document.querySelector('.modal-body');
function openModal() {
  modalcontent.style.webkitAnimationName = "slideIn";
  modal.style.display = "block";
}
function closeModal() {
  modalcontent.style.webkitAnimationName = "slideOut";
  modal.style.display = "block";
  setTimeout(function () {
    modal.style.display = "none";
  }, 250);
}
window.onclick = function (event) {
  var overlay = document.querySelector(".modal");
  if (event.target == overlay) {
    closeModal();
  }
};
function closeN() {
  var navig = document.querySelector('.navig');
  navig.style.width = "0";
}
function openN() {
  var navig = document.querySelector('.navig');
  navig.style.width = "100%";
}
var list = ["Sharan", "Cheetah", "Jahnvi", "Jaguar", "Anu", "Sajiv", "Tiger", "Lion", "Blue Whale", "Sperm Whale", "Orca", "Bottlenose Dolphin", "Humpback Whale", "Smilodon", "Spiderman", "Cougar", "Leopard", "Polar Bear", "Robin", "Albatross", "Elephant"];
for (var h = 0; h < list.length; h++) {
  var ul = document.querySelector("ul");
  var li = document.createElement("li");
  var t = document.createTextNode(list[h]);
  li.appendChild(t);
  ul.appendChild(li);
}
function filter() {
  var filter = document.querySelector("#filter");
  var filt = filter.value.toUpperCase();
  var ul = document.querySelector("#ul");
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
var type = 0;
function Tfilter(type) {
  var filter = document.querySelector("#tfilter");
  var filt = filter.value.toUpperCase();
  console.log(filt)
  var table = document.querySelector("#Table");
  var tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    var value = tr[i].getElementsByTagName("td")[type];
    if (value) {
      if (value.innerHTML.toUpperCase().indexOf(filt) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
var radios = document.querySelectorAll('.radioss');
for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", function () {
    if (radios[0].checked == true) {
      type = 0;
    }
    if (radios[1].checked == true) {
      type = 1;
    }
  })
}
document.querySelector('#tfilter').addEventListener("keyup", function () {
  Tfilter(type)
});
class sharantg extends HTMLElement {
  // Monitor the 'name' attribute for changes.
  static get observedAttributes() { return ['name', 'equation']; }

  // Respond to attribute changes.
  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr == 'name') {
      this.textContent += `Hello, ${newValue}. ` + "";
    }
    if (attr = "equation") {
      this.textContent += "Equation answer: " + eval(newValue.toString());
    }
  }
}

// Define the new element
try {
  customElements.define('sharan-t', sharantg);
} catch (e) {
  console.log("Your browser does not support custom elements");
}
var codeDiv = document.getElementsByClassName('codeDiv');
for (var i = 0; i < codeDiv.length; i++) {
  CodeColor(codeDiv[i]);
}
function CodeColor(elmnt, mode) {
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
  if (!lang) { lang = "html"; }
  if (lang == "html") { elmntTxt = htmlMode(elmntTxt); }
  if (lang == "css") { elmntTxt = cssMode(elmntTxt); }
  if (lang == "js") { elmntTxt = jsMode(elmntTxt); }
  elmntObj.innerHTML = elmntTxt;

  function extract(str, start, end, func, repl) {
    var s, e, d = "", a = [];
    while (str.search(start) > -1) {
      s = str.search(start);
      e = str.indexOf(end, s);
      if (e == -1) { e = str.length; }
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
      if (rest.substr(startpos, 9).toUpperCase() == "&LT;STYLE") { note = "css"; }
      if (rest.substr(startpos, 10).toUpperCase() == "&LT;SCRIPT") { note = "javascript"; }
      endpos = rest.indexOf("&gt;", startpos);
      if (endpos == -1) { endpos = rest.length; }
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
      if (endpos == -1) { endpos = rest.length; }
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
      if (!endpos || endpos == -1 || endpos < startpos) { endpos = rest.length; }
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
        if (midz.substr(i, 1) == "{") { cc++; c++ }
        if (midz.substr(i, 1) == "}") { cc--; }
        if (cc == 0) { break; }
      }
      if (cc != 0) { c = 0; }
      e = s;
      for (i = 0; i <= c; i++) {
        e = rest.indexOf("}", e + 1);
      }
      if (e == -1) { e = rest.length; }
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
    if (rest.indexOf("{") > -1) { return cssMode(rest); }
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
      if (e == -1) { e = rest.length; }
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
    for (i = 0; i < rest.length; i++) {
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
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) { break; }
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) { break; }
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
    var x, i, j, s, e, arr = [".", "<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/", "-", "*", "|", "%"];
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
        if (arr.length == 0 || arguments[i][0] < arr[0]) { arr = arguments[i]; }
      }
    }
    if (arr.length == 0) { arr = arguments[i]; }
    return arr;
  }
  function getKeywordPos(typ, txt, func) {
    var words, i, pos, rpos = -1, rpos2 = -1, patt;
    if (typ == "js") {
      words = ["abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete",
        "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import",
        "in", "instanceof", "int", "interface", "let", "long", "NaN", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static",
        "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"];
    }
    for (i = 0; i < words.length; i++) {
      pos = txt.indexOf(words[i]);
      if (pos > -1) {
        patt = /\W/g;
        if (txt.substr(pos + words[i].length, 1).match(patt) && txt.substr(pos - 1, 1).match(patt)) {
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
    if (e == -1) { e = txt.length; }
    return [s, e + (end.length), func];
  }
  function getNumPos(txt, func) {
    var arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/", "-", "*", "|", "%", "="], i, j, c, startpos = 0, endpos, word;
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
            if (!isNaN(word)) { return [startpos, endpos, func]; }
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
$("pre").html(function (index, html) {
  return html.replace(/^(.*)$/mg, "<span class=\"line\">$1</span>")
});