"use strict";
{
    const header = document.querySelector("header");
    const menubtn = document.getElementById("open");
    const menulist = document.getElementById("menulist");
    let menuOpen = false;
    header.style.height = 75 + "px";
    menubtn.addEventListener("click", () => {
        if (menuOpen) {
            header.style.height = 75 + "px";
            menulist.style.display = "none";
        }
        else {
            header.style.height = 170 + "px";
            menulist.style.display = "block";
        }
        menuOpen = !menuOpen;
        console("押した");
    });
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 700 && menuOpen) {
            header.style.height = 170 + "px";
            menulist.style.display = "block";
        }
        else {
            header.style.height = 75 + "px";
            menulist.style.display = "none";
        }
    }, false);
    
    const comment = document.getElementById("comment");
    comment.addEventListener("resize", ()=> {
        console.log("サイズ変わってんでえ");
    })
}