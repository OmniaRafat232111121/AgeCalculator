var yearInput=document.getElementById("yearInput");
var ageElement=document.getElementById("age");
var timeElement=document.getElementById("time");
var currentElement=document.getElementById("current");
var typeElement=document.getElementById("type");
var asteriskElement=document.getElementById("asterisk");
var shbakElement=document.getElementById("shbak");

function calcAge(){
    var birthYear=yearInput.value;
    var birthTime=timeInput.value;
    var date=new Date();
   var age=date.getFullYear()-birthYear;
   var time=date.getTime()-birthTime;
  
   console.log(age);
   console.log(time);
    ageElement.innerHTML=`Your age : <span> ${age} </span>`;
    timeElement.innerHTML = `Your time :    <span>   ${time}     </span> `;
    


    if (age >= 18) {
        typeElement.innerHTML = "You are young"
    } else {
        typeElement.innerHTML = "You are kid"
    }

    if(asterisk>=10){
        shbakElement.innerHTML="You are tolerant";
    }
     else{
        shbakElement.innerHTML="You are Bad";
     }



     for (var i = 0; i < age; i++) {
        asteriskElement.innerHTML += "*";
    }
}