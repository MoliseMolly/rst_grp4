document.addEventListener("DOMContentLoaded", start);
console.log("begin");

function start() {
    let streams = ["www.twitch.tv/marckozhd/", "www.twitch.tv/jk_fifa/", "www.twitch.tv/fjallefar/", "www.twitch.tv/brianfromdenmark/", "www.twitch.tv/jaxstyle/"];
    let streamerList = document.querySelectorAll(".streamer_item");
    document.querySelector("#burgermenu").addEventListener("click", burger);
    document.querySelector("#read_article").addEventListener("click", readArticle);

    streamerList.forEach(function (item, i) {
        item.addEventListener("click", function () {
            openStream(streams[i]);
        });

    });
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

function openStream(s) {
    // Example on opening a new tab with link in js: https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window-using-javascript
    let win = window.open(s, '_blank');
    win.focus();
}

function readArticle() {
    this.style.display = "none";
    document.querySelector(".grey_gradient").style.display = "none";
    document.querySelector("#pimp_article").style.height = "auto";
}
