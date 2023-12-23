var arry=[];
arry=JSON.parse(localStorage.getItem("log"));
var x="";

document.getElementById("welcome").innerHTML=`welcome ${x} ${arry.name}`;



var z=document.querySelector(".btnout");

z.addEventListener("click",function(){

     location.assign("index.html");
    
});
