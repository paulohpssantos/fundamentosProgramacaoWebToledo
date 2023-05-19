let inputVlr1 = document.querySelector("#inputVlr1");
let inputVlr2 = document.querySelector("#inputVlr2");
let inputVlr3 = document.querySelector("#inputVlr3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularMedias(){

    let vlr1 = Number(inputVlr1.value);
    let vlr2 = Number(inputVlr2.value);
    let vlr3 = Number(inputVlr3.value);

    let mediaAritmetica = (vlr1 + vlr2 + vlr3)/3;

    let somaVlrPeso = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaVlrPeso / somaPesos;

    let somaMedias = mediaAritmetica + mediaPonderada;

    let mediaMedias = somaMedias / 2;

    h3Resultado.innerHTML = 
        "Media Aritmetica: " + mediaAritmetica + "<br>"+
        "Media Ponderada: " + mediaPonderada + "<br>"+
        "Soma das Medias: " + somaMedias + "<br>"+
        "Media das Medias: " + mediaMedias + "<br>";

}

btCalcular.onclick = function(){
    calcularMedias();
}



