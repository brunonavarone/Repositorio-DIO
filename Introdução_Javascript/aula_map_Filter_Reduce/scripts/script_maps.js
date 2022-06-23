const numeros = [2, 3, 4 ,6];

const dragaoFogo =
{
    value: 5,
}

const dragaoAgua =
{
    value: 3,
}

//funcao que recebe um array e um objeto como parametros 
function mapComThis(varArray, esseArgumento)
{
    //realizando operacoes em ordem com o map ( do index 0 até o ultimo)
    return varArray.map(function(item)
    {
        //multiplicando os items do array com o value do objeto que foi passado como parametro
        return item * this.value; 
    }, esseArgumento);
}

//printando a funcao com os parametros: array = numeros e objeto dragaoFogo
console.log(`O valor do Dragão de fogo é: ${dragaoFogo.value}`,"Valores do dragão de fogo: ", mapComThis(numeros, dragaoFogo))

console.log(`O valor do Dragão de água é: ${dragaoAgua.value}`,"Valores do dragão de água: ", mapComThis(numeros, dragaoAgua))

function mapSemThis(varArray)
{
    return varArray.map(function (item)
    {
        return item * 10;
    });
    
}

console.log(`Os numeros da array são: ${numeros}. Os items do array multiplicados por 10 são: `, mapSemThis(numeros));