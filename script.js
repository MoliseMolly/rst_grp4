document.addEventListener("DOMContentLoaded", start);
console.log("begin");

function start() {
    document.querySelector("#burgermenu").addEventListener("click", burger);
}

function burger() {
    console.log("we here");
    //this code we have partly stolen from this example: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
    var x = document.querySelector(".header_menu");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.querySelector("#burgermenu").style.backgroundImage = "url(img/burger.svg)";
        document.querySelector("#burgermenu").style.width = "15px";
    } else {
        x.style.display = "block";
        document.querySelector("#burgermenu").style.backgroundImage = "url(img/exitburger.svg)";
        document.querySelector("#burgermenu").style.width = "10px";
    }
}
