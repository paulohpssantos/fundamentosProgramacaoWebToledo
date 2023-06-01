let inputNumero01 = document.querySelector("#inputNumero01");
let inputNumero02 = document.querySelector("#inputNumero02");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let num01 = Number(inputNumero01.value);
    let num02 = Number(inputNumero02.value);

    h3Resultado.innerHTML = "Soma: "+(num01 + num02)+"<br>"+
        "Subtra&ccedil;&atilde;o: "+(num01 - num02)+"<br>"+
        "Divis&atilde;o: "+(num01 / num02)+"<br>"+
        "Multiplica&ccedil;&atilde;o: "+(num01 * num02)+"<br>";


}

btCalcular.onclick = function(){
    calcular();
}
