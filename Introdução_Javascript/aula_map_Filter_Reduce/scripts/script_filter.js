//criando um array com varios numeros, pares e impares
const variosNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//funcao que filtra os numeros de um array que são pares
function verificaNumerosPares(varArray)
{
    return varArray.filter(callBack);
}

//funcao que verifica se o numero é par (veririca se o resto da divisao por 2 de um numero de um arra é igual a zero)
function callBack(item)
{
    return item % 2 === 0;
}   

console.log(verificaNumerosPares(variosNumeros))