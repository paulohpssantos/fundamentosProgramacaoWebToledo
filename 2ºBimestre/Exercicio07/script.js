let inputVlr = document.querySelector("#inputVlr");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function verificarImpar(){
    let valor = Number(inputVlr.value);

    if(valor % 2 != 0){
        h3Resultado.innerHTML = 
            "Este n&uacute;mero &eacute; impar!!";
    }else{
        h3Resultado.innerHTML = 
            "Este n&uacute;mero n&atilde;o &eacute; impar!!";
    }
}

btVerificar.onclick = function(){
    verificarImpar();
}