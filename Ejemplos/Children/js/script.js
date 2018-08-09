
let marcarHead = document.getElementById ('marcarHeader');
let acc = document.getElementById ('header').childNodes;

function WithColor (){

    acc[1].style.backgroundColor = "white"
    acc[1].style.color = "black";

}

marcarHead.onclick = WithColor;


let desmarcarHead = document.getElementById ('limpiarMarcado');

function deColor (){

    acc[1].style.backgroundColor = "";
    acc[1].style.color = "";
    
}

desmarcarHead.onclick = deColor;