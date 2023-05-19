let inputVlrSaldo = document.querySelector("#inputVlrSaldo");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularReajuste(){

    let vlrSaldo = Number(inputVlrSaldo.value);

    h3Resultado.innerHTML = 
        "Valor com Reajuste de 1%: "+ (vlrSaldo +(vlrSaldo * (1/100))); 

}


btCalcular.onclick = function(){
    calcularReajuste();
}