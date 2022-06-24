//criando as variáveis 
const listaNumeros = [1, 2, 5 , 4 ,5];
const meuNumero = 5;

//
function validaArray (varArray, varNumero)
{
    try
    {
    /*verificando se os parametros enviados existem (o " ! " na frente de uma variável serve para "verificar ou mudar" aquele valor para o oposto ou inexiste)
    OBS: de forma comparativa*/
    if(!varArray && !varNumero) throw new ReferenceError("Envie os parâmetros");

    //verificando se o parâmetro enviado é do tipo object. Se não for, envia um erro do tipo TypeError
    if(typeof varArray !== 'object') throw new TypeError("Envie um array como parâmetro");

    //verificando se o parâmetro enviado é do tipo number. Se não for, envia um erro do tipo TypeError
    if(typeof varNumero !== 'number') throw new TypeError("Envie um número como parâmetro");

    //verificando se o tamanho do array enviado é igual ao número enviado. Se não for, envia um erro do tipo RangeError    
    if(varArray.length !== varNumero) throw new RangeError("Array diferente do tamanho do número");

    //se tudo for validado, retorna o array
    return `Esse array: ${varArray} é válido!`;
    
    }

    //manipulando os erros individualmente
    catch(e)
    {
        if(e instanceof ReferenceError)
        {
            console.log("Este erro é um ReferenceError")
            console.log(e.message)
        }

        else if(e instanceof TypeError)
        {
            console.log("Este erro é um TypeError")
            console.log(e.message)
        }

        else if(e instanceof RangeError)
        {
            console.log("Este erro é um RangeError")
            console.log(e.message)
        }

        else
        {
            console.log("Tipo de erro não esperado: " + e)
        }
    }
}

console.log(validaArray(listaNumeros, meuNumero))