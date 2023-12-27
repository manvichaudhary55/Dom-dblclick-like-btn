const contain = document.querySelector("#container");
const icon = document.querySelector("i");

contain.addEventListener("dblclick",function(){
icon.style.transform ="translate(-50%,-50%) scale(5)"
icon.style.opacity =1;

setTimeout(function(){
icon.style.transform = "translate(-50%,-50%) scale(0)"
},2000);

setTimeout(function(){
icon.style.opacity = 0 ;
},1000);

});
