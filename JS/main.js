var btn = document.getElementById("menu-btn") ;
var menu = document.getElementById("menu-bg");
btn.addEventListener("click" , function(){
    menu.style.left = "0" ;
})

var back = document.getElementById("back") ;
back.addEventListener("click" , function(){
    menu.style.left = "-100%" ;
});