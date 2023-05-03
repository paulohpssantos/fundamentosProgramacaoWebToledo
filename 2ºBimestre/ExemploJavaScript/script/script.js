let titulo = document.querySelector("#titulo");
let campoTexto = document.querySelector("#campoTexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function alterarTexto(){
    let texto = String(campoTexto.value);
    titulo.textContent = texto;
}


btTrocarTexto.onclick = function(){
    alterarTexto();
}