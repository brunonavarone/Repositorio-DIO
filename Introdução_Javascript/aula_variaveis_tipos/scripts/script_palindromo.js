function verificaPalindromo(string) {
    if(string === ""){
        return console.log("Você não digitou palavra nenhuma");
    }        
    //verificando a quantidade de palavras na frase
    let quantidadeDePalavras = string.split(" ");
    if(quantidadeDePalavras.length == 1){
        //split separa os argunmentos da string, reverse inverte os argumentos da string e join junta dos argumentos.
        let reversa = string.split("").reverse().join("");
        console.log(`A palavra reversa é ${reversa}`);
        if(reversa === string) {
            console.log(`A palavra ${reversa} é um Palíndromo!`)
        }
        else{
            console.log(`A palavra ${reversa} não é um Palíndromo!`)
        }   
    }
    else{
        console.log("Coloque apenas uma palavra")
    }

}

verificaPalindromo("matheus");

