
let marcarHead = document.getElementById('marcarHeader');

function addBefore(){

    let currentNode = document.getElementById('head');
    let header = document.getElementById('header');

    let NewText = document.createElement("h2");
    NewText.textContent = 'NextElementSibling Marvel, Star Wars y';

    header.insertBefore(NewText, currentNode);

}

marcarHead.onclick = addBefore;
