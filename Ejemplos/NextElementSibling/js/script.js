
let currentImg = document.getElementById('currentSibling').nextElementSibling;
let marcarHead = document.getElementById('marcarHeader');

function withColor(){

    currentImg.style.opacity = '0.1';

}

marcarHead.onclick = withColor;


let desmarcarHead = document.getElementById ('limpiarMarcado');

function deColor (){
    currentImg.style.opacity = '';
}

desmarcarHead.onclick = deColor;