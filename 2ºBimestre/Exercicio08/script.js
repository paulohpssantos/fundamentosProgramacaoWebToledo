let inputCodigo = document.querySelector("#inputCodigo");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

inputCodigo.style.width = "300px";

function verificarDescricao(){
    let codigo = String(inputCodigo.value);
    let descricao;

    if(codigo === "001"){
        descricao = "Parafuso";
    }else if(codigo === "002"){
        descricao = "Porca"
    }else if(codigo === "003"){
        descricao = "Prego";
    }else{
        descricao = "Diversos"
    }

    h3Resultado.textContent = descricao;
    h3Resultado.style.color = "blue";

}

btVerificar.onclick = function(){
    verificarDescricao();
}