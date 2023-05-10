let input01 = document.querySelector("#input01");
let input02 = document.querySelector("#input02");
let btSomar = document.querySelector("#btSomar");
let h1Resultado = document.querySelector("#h1Resultado");

function somar(){
    let vlr1 = Number(input01.value);
    let vlr2 = Number(input02.value);

    //let result = Number(input01.value) + Number(input02.value);
    //h1Resultado = result;

    h1Resultado.textContent = vlr1 + vlr2;

}

btSomar.onclick = function(){
    somar();
}