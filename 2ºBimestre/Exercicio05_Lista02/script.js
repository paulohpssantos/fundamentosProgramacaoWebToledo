let inputNome01 = document.querySelector("#inputNome01");
let inputIdade01 = document.querySelector("#inputIdade01");
let inputNome02 = document.querySelector("#inputNome02");
let inputIdade02 = document.querySelector("#inputIdade02");
let inputNome03 = document.querySelector("#inputNome03");
let inputIdade03 = document.querySelector("#inputIdade03");
let btOrdenar = document.querySelector("#btOrdenar");
let h3Resultado = document.querySelector("#h3Resultado");

function ordenarMaisVelho(){
    let idade01 = 2023 - Number(inputIdade01.value);
    let idade02 = 2023 - Number(inputIdade02.value);
    let idade03 = 2023 - Number(inputIdade03.value);
    let maisVelho;
    let meio;
    let maisNovo;
    let iguais;

    if(idade01 > idade02 && idade01 > idade03){
        maisVelho = String(inputNome01.value) + idade01 + " anos.";
        if(idade02 > idade03){
            meio = String(inputNome02.value) + idade02 + " anos.";
            maisNovo = String(inputNome03.value) + idade03 + " anos.";
        }else if(idade03 > idade02){
            meio = String(inputNome03.value) + idade03 + " anos.";
            maisNovo = String(inputNome02.value) + idade02 + " anos.";
        }else{
            iguais = String(inputNome03.value) + idade03 + " anos e <br>"+
            String(inputNome02.value) + idade02 + " anos";
        }
    }else if(idade02 > idade01 && idade02 > idade03){
        maisVelho = String(inputNome02.value) + idade02 + " anos.";
        if(idade01 > idade03){
            meio = String(inputNome01.value) + idade01 + " anos.";
            maisNovo = String(inputNome03.value) + idade03 + " anos.";
        }else if(idade03 > idade01){
            meio = String(inputNome03.value) + idade03 + " anos.";
            maisNovo = String(inputNome01.value) + idade01 + " anos.";
        }else{
            iguais = String(inputNome01.value) + idade01 + " anos e <br>"+
            String(inputNome03.value) + idade03 + " anos";
        }
    }else if(idade03 > idade01 && idade03 > idade02){
        maisVelho = String(inputNome03.value) + idade03 + " anos.";
        if(idade02 > idade01){
            meio = String(inputNome02.value) + idade02 + " anos.";
            maisNovo = String(inputNome01.value) + idade01 + " anos.";
        }else if(idade01 > idade02){
            meio = String(inputNome01.value) + idade01 + " anos.";
            maisNovo = String(inputNome02.value) + idade02 + " anos.";    
        }else{
            iguais = String(inputNome01.value) + idade01 + " anos e <br>"+
            String(inputNome02.value) + idade02 + " anos";
        }
    }else{
        maisVelho = null;
        meio = null;
        maisNovo = null;
        iguais = null;
    }

    if(maisVelho === null){
        h3Resultado.innerHTML ="Todas as idades são iguais!";
    }else if(iguais === null){
        h3Resultado.innerHTML = "Pessoa mais Velha: "+maisVelho+"<br>"+
        "Segunda pessoa mais velha: "+meio+"<br>"+
        "Pessoa mais nova: "+maisNovo;
    }else{
        h3Resultado.innerHTML = "Pessoa mais Velha: "+maisVelho+"<br>"+
        "Os outros tem idades iguais "+iguais;
    }
    


}

btOrdenar.onclick = function(){
    ordenarMaisVelho();
}