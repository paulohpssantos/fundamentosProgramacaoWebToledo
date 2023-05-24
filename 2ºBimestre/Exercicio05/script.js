let inputVlr01 = document.querySelector("#inputVlr01");
let inputVlr02 = document.querySelector("#inputVlr02");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function verificarMaior(){
    let valor1 = Number(inputVlr01.value);
    let valor2 = Number(inputVlr02.value);

    if(valor1 > valor2){
        h3Resultado.innerHTML = 
        "O maior valor encontrado &eacute;: "+valor1;
    }else{
        h3Resultado.innerHTML = 
        "O maior valor encontrado &eacute;: "+valor2;
    }

}

btVerificar.onclick = function(){
    verificarMaior();
}