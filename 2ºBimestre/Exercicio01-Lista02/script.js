let inputVlrCotacao = document.querySelector("#inputVlrCotacao");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

inputVlrCotacao.style.width = "300px";

function calcularCotacao(){

    let valorCotacao = Number(inputVlrCotacao.value);

    //Calcular 1%, 2%, 5% e 10%;
    let cotacao1Prc = valorCotacao + (valorCotacao * (1/100)); 
    let cotacao2Prc = valorCotacao + (valorCotacao * (2/100));
    let cotacao5Prc = valorCotacao + (valorCotacao * (5/100));
    let cotacao10Prc = valorCotacao + (valorCotacao * (10/100));

    h3Resultado.innerHTML = 
        "Cota&ccedil;&atilde;o com 1%: "+
            cotacao1Prc.toFixed(2)+"<br>"+
        "Cota&ccedil;&atilde;o com 2%: "
            +cotacao2Prc.toFixed(2)+"<br>"+
        "Cota&ccedil;&atilde;o com 5%: "
            +cotacao5Prc.toFixed(2)+"<br>"+
        "Cota&ccedil;&atilde;o com 10%: "+
            cotacao10Prc.toFixed(2)+"<br>";

}

btCalcular.onclick = function(){
    calcularCotacao();
}