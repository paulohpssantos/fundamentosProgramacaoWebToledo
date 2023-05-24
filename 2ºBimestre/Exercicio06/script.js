let inputVlr01 = document.querySelector("#inputVlr01");
let inputVlr02 = document.querySelector("#inputVlr02");
let inputVlr03 = document.querySelector("#inputVlr03");
let inputVlr04 = document.querySelector("#inputVlr04");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function verificarMenor(){
    let valor1 = Number(inputVlr01.value);
    let valor2 = Number(inputVlr02.value);
    let valor3 = Number(inputVlr03.value);
    let valor4 = Number(inputVlr04.value);
    let menor;

    if(valor1 < valor2 && valor1 < valor3 
        && valor1 < valor4){
        menor = valor1;
    }else if(valor2 < valor1 && valor2 < valor3
        && valor2 < valor4){
        menor = valor2;
    }else if(valor3 < valor1 && valor3 < valor2 
        && valor3 < valor4){
         menor = valor3;   
    }else if(valor4 < valor1 && valor4 < valor2 
        && valor4 < valor3){
         menor = valor4;   
    }else{
        menor = -1;
    }

    if(menor >= 0 ){
        h3Resultado.innerHTML = 
            "Menor valor encontrado &eacute;: "+menor;
    }else{
        h3Resultado.innerHTML = 
    "N&atilde;o existe valor menor entre os 4 valores informados";
    }
}

btVerificar.onclick = function(){
    verificarMenor();
}