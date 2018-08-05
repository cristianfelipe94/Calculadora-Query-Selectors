function marcarOperadores() {

    let listaNodosOperadores = document.querySelectorAll("#wrapperCalc .btns span.mathOperators");
    let nodoIgual = document.querySelector(".equalSign");

    for (let i = 0; i < listaNodosOperadores.length; i++) {
        listaNodosOperadores[i].style.backgroundColor = "#DDA775";
        listaNodosOperadores[i].style.color = "white";
    }

    nodoIgual.style.backgroundColor = "#DDA775";
    nodoIgual.style.color = "white";
}

function marcarNumeros() {

    let listaNodosNumeros = document.querySelectorAll("#wrapperCalc .btns span.number");

    for (let i = 0; i < listaNodosNumeros.length; i++) {
        listaNodosNumeros[i].style.backgroundColor = "#70798C";
        listaNodosNumeros[i].style.color = "white";
    }
}

function marcarLetraC () {

    let letraLimpiar = document.querySelector (".cleanBtn");
    letraLimpiar.style.backgroundColor = "#C64A3B";
    letraLimpiar.style.color = "white";
}

function marcarPunto () {

    let puntoTecla = document.querySelector (".dot");
    puntoTecla.style.backgroundColor = "#8BBD8B";
    puntoTecla.style.color = "white";
}


function marcarPantalla () {

    let pantalla = document.querySelector (".screen");
    pantalla.style.backgroundColor = "#2EC98E";
}

function limpiarMarcado() {

    let cleaner = document.querySelectorAll (".screen, .dot, .cleanBtn, span.number, span.mathOperators");
    let cleanerIgual = document.querySelector(".equalSign");

    for (let i = 0; i < cleaner.length; i++) {
        cleaner[i].style.backgroundColor = "";
        cleaner[i].style.color = "";
    }
    cleanerIgual.style.backgroundColor = "";
    cleanerIgual.style.color = "";
}