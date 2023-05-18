let inputMedia = document.querySelector("#inputMedia");
let btVerificaMedia = document.querySelector("#btVerificaMedia");

function verificarMedia(){
    let media = Number(inputMedia.value);

    //Desvio condicional simples
    if(media > 60){
        alert('O aluno esta APROVADO');
    }else{
        alert('O Aluno esta REPROVADO');
    }

    //DESVIO CONDICIONAL COMPOSTO
    if(media > 60){
        alert('O aluno esta APROVADO');
    }else if(media > 20 && media <= 60){
        alert('O aluno devera fazer SUB');
    }else{
        alert('O aluno esta REPROVADO');
    }

    // >, <, ===, !==, >==, <==
    //&& ---> E
    //|| ----> OU
}

btVerificaMedia.onclick = function(){
    verificarMedia();
}

