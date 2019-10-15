document.addEventListener("DOMContentLoaded", start);

function start() {
    //link til streamers indsættes i et array. Ved at oprette links programatisk, kan det nye vindue åbnes som en ny tab, så brugeren ikke kommer væk fra sitet. Gjordes dette gennem et link i html, åbnes linket i samme tab, hvilket ikke ønskes her
    let streams = ["http://www.twitch.tv/marckozhd/", "http://www.twitch.tv/jk_fifa/", "http://www.twitch.tv/fjallefar/", "http://www.twitch.tv/brianfromdenmark/", "http://www.twitch.tv/jaxstyle/"];
    //Streamernes html elementer læses ind i et array
    let streamerList = document.querySelectorAll(".streamer_item");

    //Eventlisteners til knapper oprettes
    document.querySelector("#burgermenu").addEventListener("click", burger);
    document.querySelector("#read_article").addEventListener("click", readArticle);
    document.querySelector("#test").addEventListener("click", function () {
        // Eksempel på at åbne et link i nyt tab i js: https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window-using-javascript
        let win = window.open("https://play.kahoot.it/v2/?quizId=b6da4f54-0005-465d-82b6-97f1329553a6",
            '_blank');
        win.focus();
    });

    //For hvert html streamer element oprettes en eventlistener der åbner linksene fra arrayet streams i nyt tab
    streamerList.forEach(function (item, i) {
        item.addEventListener("click", function () {
            // Example on opening a new tab with link in js: https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window-using-javascript
            let win = window.open(streams[i], '_blank');
            win.focus();
        });

    });
}

function burger() {
    console.log("we here");
    //Basiskoden til at åbne og lukke burgermenuen er lånt herfra: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
    //Når viewet er småt er header_menu skjult og ændret fra top menu, til en åben burgermenu. Klikkes der på burgermenuen sættes header_menu til synligt, og er den synlig, sættes den til skjult. Burgermenu billedet skifter mellem burgermenu og luk burgermenu
    let x = document.querySelector(".header_menu");
    if (x.style.display == "block") {
        x.style.display = "none";
        document.querySelector("#burgermenu").style.backgroundImage = "url(img/burger.svg)";
        document.querySelector("#burgermenu").style.width = "20px";
    } else {
        x.style.display = "block";
        document.querySelector("#burgermenu").style.backgroundImage = "url(img/exitburger.svg)";
        document.querySelector("#burgermenu").style.width = "16px";
    }
}

//Når der klikkes på knappen Open Pimp My Ride, så fjernes knappen, gradienten fjernes, og artiklens højde sættes til auto, hvilket gør at hele artiklen vises i stedet for at være skjult
function readArticle() {
    this.style.display = "none";
    document.querySelector(".grey_gradient").style.display = "none";
    document.querySelector("#pimp_article").style.height = "auto";
}
