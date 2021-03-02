    //..resposcive menu ...//
var btn = document.getElementById("menu-btn");
var menu = document.getElementById("menu-bg");
btn.addEventListener("click" , function(){
    menu.style.left = "0" ;
})

var back = document.getElementById("back") ;
back.addEventListener("click" , function(){
    menu.style.left = "-100%" ;
});

    //..delete class...//

var a = document.querySelectorAll(".img-anim");

window.addEventListener("resize", function () {
    for (var i = 0; i < a.length; i++) {
        if (window.innerWidth < 769) a[i].classList.remove("animation-div");
    }
});