function marcarStarWars() {

    let listaStarWars = document.querySelectorAll(".starWars");

    for (let i = 0; i < listaStarWars.length; i++) {
        listaStarWars[i].style.backgroundColor = "#DDA775";
    }
}

function marcarMarvel() {

    let listaMarvel = document.querySelectorAll(".marvel");

    for (let i = 0; i < listaMarvel.length; i++) {
        listaMarvel[i].style.backgroundColor = "#70798C";
    }
}

function limpiarMarcado() {

    let cleaner = document.querySelectorAll (".starWars, .marvel");

    for (let i = 0; i < cleaner.length; i++) {
        cleaner[i].style.backgroundColor = "";
    }
}