//global variables
var new_score = 0;
var number = 0;
var numitem = 0;
//functions
function addScore(score,boole){
  new_score += score;
  var title = document.getElementsByTagName('title')[0];
  var text = document.getElementById('scoretext');
  var rattext = document.getElementById('rte_per_sec');
  title.innerHTML = new_score+" cookies";
  text.innerHTML = new_score+" cookies";
  if(boole == true){
    number = score;
    rattext.innerHTML = number;
  }
}
function newLi(list,price){
  var ul = document.getElementById('store');
  $(ul).empty();
  for(t_appender = 0; t_appender < list.length; t_appender++){
    var li = document.createElement("li");
    var text = list[t_appender];
    var text2 = price[t_appender];
    var t = document.createTextNode(text);
    var t_num = document.createTextNode(text2);
    li.className = "unavailable";
    li.appendChild(t);
    li.appendChild(t_num)
    ul.appendChild(li);
  }
}
var store = ["Cursor ","Grandma ","Farm ","Mine "];
var price = [10,100,1000,12000];
newLi(store,price);
var change = document.getElementById('scoretext');
var giant_cookie = document.getElementById('giant_cookie');
giant_cookie.addEventListener("click",function(){addScore(1,false)});
var store_li = document.getElementById('store').getElementsByTagName('li');
var checker = setInterval(function(){
  for(checker=0;checker < store_li.length;checker++){
    if(new_score >= price[checker]){
      store_li[checker].className = "available";
    }else{
      store_li[checker].className = "unavailable"
    }
  }
},100);
//Item buying
//Check to buy items
store_li[0].addEventListener("click",function(){
  if(new_score >= price[0]){
    console.log("bought");
    new_score -= 10;
    numitem += 0.5;
    var curs_inter = setInterval(function(){addScore(numitem,true)},1000)
  }else{
    console.log("Not enough cookies")
  }
});
store_li[1].addEventListener("click",function(){
  if(new_score >= price[1]){
    console.log("bought");
    new_score -= 100;
    numitem += 1;
    var curs_inter = setInterval(function(){addScore(numitem,true)},1000)
  }else{
    console.log("Not enough cookies")
  }
});
store_li[2].addEventListener("click",function(){
  if(new_score >= price[2]){
    console.log("bought");
    new_score -= 16;
    numitem += 16;
    var curs_inter = setInterval(function(){addScore(numitem,true)},1000)
  }else{
    console.log("Not enough cookies")
  }
});
store_li[3].addEventListener("click",function(){
  if(new_score >= price[3]){
    console.log("bought");
    new_score -= 12000;
    numitem += 50;
    var curs_inter = setInterval(function(){addScore(numitem,true)},1000)
  }else{
    console.log("Not enough cookies")
  }
});
