//definindo o array 
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

//criando uma funcao que verifica e retorna apenas numeros unicos de uma array
function verificaValoresUnicos(varArray)
{   
    //criando uma variavel que transforma o parametro passado na funcao para tipo Set
    const meuSet = new Set(varArray);
    
    //retornando o valor da variavel Set como Array pelo comando spread (espalhamento)
    return [...meuSet];
    

}

//chamando a funcao com a variavel meuArray
console.log(verificaValoresUnicos(meuArray));