document.addEventListener("DOMContentLoaded", start);
console.log("begin");

function start() {
    document.querySelector("#burgermenu").addEventListener("click", burger);
    document.querySelector("#read_article").addEventListener("click", readArticle);
}

function burger() {
    console.log("we here");
    //this code we have partly stolen from this example: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
    var x = document.querySelector(".header_menu");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.querySelector("#burgermenu").style.backgroundImage = "url(img/burger.svg)";
        document.querySelector("#burgermenu").style.width = "11px";
    } else {
        x.style.display = "block";
        document.querySelector("#burgermenu").style.backgroundImage = "url(img/exitburger.svg)";
        document.querySelector("#burgermenu").style.width = "6px";
    }
}

function readArticle() {
    this.style.display = "none";
    document.querySelector(".grey_gradient").style.display = "none";
    document.querySelector("#pimp_article").style.height = "auto";
}
