let inputQtdPessoas = document.querySelector("#inputQtdPessoas");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularIngredientes(){

    let qtdPessoas = Number(inputQtdPessoas.value);

    //2 ovos 50g queijo
    let qtdOvos = qtdPessoas * 2;
    let qtdQueijo = qtdPessoas * 50;

    h3Resultado.innerHTML = 
        "Quantidade de ovos necess&aacute;rio para fazer o omelete: "+
         qtdOvos+"<br>"+
         "Quantidade de queijo necess&aacute;rio para fazer o omelete: "+
         qtdQueijo+"g <br>";   

}

btCalcular.onclick = function(){
    calcularIngredientes();
}