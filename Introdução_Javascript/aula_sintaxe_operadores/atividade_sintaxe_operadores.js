function verifica(a, b){
    soma = a +b;
    if(a === b){
        if(soma < 10){
            console.log("Os números " + a + " e " + b + " são iguais. Sua soma é : " + soma + ", que é menor que 10 e menor que 20");
        }

        else if (soma == 10){
            console.log("Os números " + a + " e " + b + " são iguais. Sua soma é : " + soma + ", que é igual a 10 e menor que 20");
        }

        else if (soma > 10 && soma < 20){
            console.log("Os números " + a + " e " + b + " são iguais. Sua soma é : " + soma + ", que é maior qe 10 e menor que 20");
        }

        else if (soma == 20){
            console.log("Os números " + a + " e " + b + " são iguais. Sua soma é : " + soma + ", que é maior que 10 e igual a 20");
        }

        else if (soma > 20){
            console.log("Os números " + a + " e " + b + " são iguais. Sua soma é : " + soma + ", que é maior que 10 e maior que 20");
        }
    }
    
    else if (a != b) {
        if(soma < 10){
            console.log("Os números " + a + " e " + b + " não são iguais. Sua soma é : " + soma + ", que é menor que 10 e menor que 20");
        }

        else if (soma == 10){
            console.log("Os números " + a + " e " + b + " não são iguais. Sua soma é : " + soma + ", que é igual a 10 e menor que 20");
        }

        else if (soma > 10 && soma < 20){
            console.log("Os números " + a + " e " + b + " não são iguais. Sua soma é : " + soma + ", que é maior qe 10 e menor que 20");
        }

        else if (soma == 20){
            console.log("Os números " + a + " e " + b + " não são iguais. Sua soma é : " + soma + ", que é maior que 10 e igual a 20");
        }

        else if (soma > 20){
            console.log("Os números " + a + " e " + b + " não são iguais. Sua soma é : " + soma + ", que é maior que 10 e maior que 20");
        }
    }
}

verifica(10, 10);