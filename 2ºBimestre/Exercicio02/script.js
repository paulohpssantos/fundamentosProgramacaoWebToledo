let inputVlrPeso = document.querySelector("#inputVlrPeso");
let inputQtdProd = document.querySelector("#inputQtdProd");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularTotalProduto(){
    let vlrPeso = Number(inputVlrPeso.value);
    let qtdProd = Number(inputQtdProd.value);

    h3Resultado.innerHTML = 
        "Valor Total do Produto: "+vlrPeso * qtdProd;
}

btCalcular.onclick = function(){
    calcularTotalProduto();
}