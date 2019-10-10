document.addEventListener("DOMContentLoaded", start);
console.log("begin");

function start() {
    document.querySelector("#burgermenu").addEventListener("click", burger);
}

function burger() {
    console.log("we here");
    var x = document.querySelector(".header_menu");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.querySelector("#burgermenu").style.backgroundImage = "url(img/burger.svg)";
    } else {
        x.style.display = "block";
        document.querySelector("#burgermenu").style.backgroundImage = "url(img/exitburger.svg)";
    }
}
