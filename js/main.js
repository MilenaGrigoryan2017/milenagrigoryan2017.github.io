"use strict";
let day=document.querySelector(".day");
let hours=document.querySelector(".hours");
let minutes=document.querySelector(".minutes");
let seconds=document.querySelector(".seconds");
function countDown(){
let d=new Date();
// let year=d.getFullYear()+1;
let newYear=new Date(2024,1,23,0,0,0);

let dMiliseconds=d.getTime();
let newYearMiliseconds=newYear.getTime();

let defference=newYearMiliseconds-dMiliseconds;
// 1*24*60*60*1000
let days=Math.floor(defference/(1000*60*60*24));

let hoursd=Math.floor((defference/(1000*60*60))%24);

let minutesd=Math.floor((defference/(1000*60))%60);

let secondsd=Math.floor((defference/1000)%60);

day.innerHTML=days;
hours.innerHTML=((hoursd<10)?"0":"") + hoursd;
minutes.innerHTML=((minutesd<10)?"0":"") + minutesd;
seconds.innerHTML=((secondsd<10)?"0":"") + secondsd;
  if(days<0 && hoursd<0 && minutesd<0 && secondsd<0){
    clearInterval(indecator)
    day.innerHTML="00";
    hours.innerHTML="00";
    minutes.innerHTML="00";
    seconds.innerHTML="00";
}
}

let indecator=setInterval(countDown,1000);






