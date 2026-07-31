/*=================================
      Nasrin Surprise ❤️
=================================*/

let selectedDate="";
let selectedPlace="";
let selectedChoice="";

let lastX=-1;
let lastY=-1;


/*=========================
  نمایش صفحه
=========================*/

function showPage(id){

document.querySelectorAll(".page").forEach(function(page){

page.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}



/*=========================
 شروع
=========================*/

const music=document.getElementById("bgMusic");

document.getElementById("startBtn").onclick=function(){

music.play().catch(()=>{});

showPage("page1");

};



/*=========================
 سوال ها
=========================*/

document.getElementById("yes1").onclick=function(){

showPage("page2");

};


document.getElementById("yes2").onclick=function(){

showPage("page3");

};


document.getElementById("yes3").onclick=function(){

showPage("page4");

};


document.getElementById("goDate").onclick=function(){

showPage("page5");

};



/*=========================
 تاریخ
=========================*/

document.getElementById("dateNext").onclick=function(){

let value=document.getElementById("datePicker").value;

if(value==""){

alert("اول تاریخ رو انتخاب کن ❤️");

return;

}

selectedDate=value;

showPage("page6");

};



/*=========================
 قلب های متحرک
=========================*/

const hearts=document.getElementById("hearts");

setInterval(function(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(function(){

heart.remove();

},8000);

},450);
/*=========================
دکمه نه فراری
=========================*/

const noButtons = document.querySelectorAll(".no");

noButtons.forEach(function(btn){

btn.addEventListener("click",function(e){

e.preventDefault();

const maxX = window.innerWidth - btn.offsetWidth - 20;
const maxY = window.innerHeight - btn.offsetHeight - 20;

let x;
let y;

do{

x = Math.floor(Math.random() * maxX);
y = Math.floor(Math.random() * maxY);

}while(
Math.abs(x - lastX) < 80 &&
Math.abs(y - lastY) < 80
);

lastX = x;
lastY = y;

btn.style.opacity = "0";

setTimeout(function(){

btn.style.left = x + "px";
btn.style.top = y + "px";
btn.style.opacity = "1";

},150);

});

});


/*=========================
انتخاب مکان
=========================*/

const placeButtons = document.querySelectorAll(".place");

placeButtons.forEach(function(btn){

btn.addEventListener("click",function(){

selectedPlace = this.dataset.place;

if(selectedPlace === "کافه"){

showPage("cafePage");

}

else if(selectedPlace === "فست فود"){

showPage("foodPage");

}

else if(selectedPlace === "بازی"){

showPage("gamePage");

}

else if(selectedPlace === "دور دور"){

selectedChoice = "دور دور";

finishPage();

}

});

});
/*=========================
انتخاب نوشیدنی / غذا / بازی
=========================*/

const choiceButtons = document.querySelectorAll(".choice");

choiceButtons.forEach(function(btn){

btn.addEventListener("click",function(){

selectedChoice = this.dataset.choice;

finishPage();

});

});


/*=========================
صفحه پایانی
=========================*/

function finishPage(){

let result = "";

result += "📅 تاریخ: " + selectedDate + "<br><br>";

result += "📍 قرار: " + selectedPlace + "<br><br>";

result += "❤️ انتخاب: " + selectedChoice;

document.getElementById("resultText").innerHTML = result;

showPage("finishPage");

}


/*=========================
شروع دوباره
=========================*/

document.getElementById("restartBtn").addEventListener("click",function(){

selectedDate = "";

selectedPlace = "";

selectedChoice = "";

document.getElementById("datePicker").value = "";

showPage("page0");

});


/*=========================
دکمه شروع دوباره
=========================*/

function resetNoButtons(){

document.querySelectorAll(".no").forEach(function(btn){

btn.style.left="";
btn.style.top="";
btn.style.opacity="1";

});

}

const restartBtn=document.getElementById("restartBtn");

restartBtn.addEventListener("click",function(){

selectedDate="";
selectedPlace="";
selectedChoice="";

document.getElementById("datePicker").value="";

resetNoButtons();

showPage("page0");

});


/*=========================
تبدیل ورودی تاریخ
=========================*/

$(function () {
    $("#datePicker").persianDatepicker({
        format: "YYYY/MM/DD",
        autoClose: true,
        initialValue: false
    });
});

/*=========================
پخش خودکار موزیک بعد از اولین لمس
=========================*/

document.body.addEventListener("click",function(){

if(music.paused){

music.play().catch(()=>{});

}

},{once:true});
/*=========================
تقویم شمسی
=========================*/

$(function(){

$("#datePicker").persianDatepicker({

format:"YYYY/MM/DD",

autoClose:true,

initialValue:false

});

});
