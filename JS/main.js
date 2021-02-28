var burger = document.getElementById("burgerIcon") ;
var menu = document.getElementById("burgerMenu");
burgerIcon.addEventListener("click" , function(){
    menu.style.left = "0" ;
})

var back = document.getElementById("Back") ;
back.addEventListener("click" , function(){
    menu.style.left = "-100%" ;
});