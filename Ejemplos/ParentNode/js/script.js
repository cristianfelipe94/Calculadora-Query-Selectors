
let marcarHead = document.getElementById ('marcarHeader');

function Color (){

    marcarHead.parentNode.style.backgroundColor = "black";

}

marcarHead.onclick = Color;

let desmarcarHead = document.getElementById ('limpiarMarcado');

function deColor (){
    desmarcarHead.parentNode.style.backgroundColor = "";
}

desmarcarHead.onclick = deColor;