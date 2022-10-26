let count=1;
document.getElementById("menu").addEventListener("click",function(){
    if(count==0){
    document.getElementById("mid").style.transition = "all 0.5s";
        document.getElementById("mid").style.height="0px";
        count++;
    }
    else{
    document.getElementById("mid").style.transition = "all 0.5s";
        document.getElementById("mid").style.height="192px";
        count=0;    
    }
})

let myMediaQuery = window.matchMedia('(min-width: 800px)');
 
function widthChangeCallback(myMediaQuery) {
  if(myMediaQuery.matches) {
    document.querySelector("#mid").style.height="18px";
    document.getElementById("mid").style.transition = "all 0s";
   } else {
    document.querySelector("#mid").style.height="0px";
   }
}
 
myMediaQuery.addEventListener('change', widthChangeCallback);