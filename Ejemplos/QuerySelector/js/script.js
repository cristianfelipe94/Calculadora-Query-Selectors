function marcarKickass() {

    let KickAssIcon = document.querySelector(".kickass");
    KickAssIcon.style.backgroundColor = "#DDA775";    
}

function marcarGatubela() {

    let GatubelaIcon = document.querySelector(".gatubela");
    GatubelaIcon.style.backgroundColor = "#70798C";
}

function limpiarMarcado() {

    let cleaner = document.querySelectorAll (".kickass, .gatubela");

    for (let i = 0; i < cleaner.length; i++) {
        cleaner[i].style.backgroundColor = "";
    }
}