const numeros = [5, 10, 15, 20, 50];
const outrosNumeros = [1, 2];

//funcao que soma numeros de um array
function somaNumeros(varArray)
{
    //utilizando metodo reduce para retornar um valor unico 
    return varArray.reduce(function(valorAnterior, valorAtual)
    {
        return valorAtual + valorAnterior;
    })
}

console.log("Somando os numeros de um array. ",`Array: ${outrosNumeros}. Soma dos números desse array: `, somaNumeros(outrosNumeros))
console.log("Somando os numeros de outro array.",`Array: ${numeros}. Soma dos números desse array: `, somaNumeros(numeros))

/*outro exercicio 
objetivo: fazer uma lista de itens com objeto diferentes e seus respectivos preços e depois subtrair cada um desses itens de um valor inicial: o saldo disponível 
*/

//lista de compras com os objetos 
const lista = 
[
    {
        nome: 'chocolate',
        preco: 10
    },
    {
        nome:'refri',
        preco: 8
    },
    {
        nome:'fini',
        preco: 12
    },
    {
        nome:'cerveja',
        preco: 7
    },
    {
        nome:'batata',
        preco: 20
    }
];

//valor disponível 
const saldoDispnivel = 100;

//funcao que subtrai cada objeto da lista de compras do valor total 
function calculaSaldo(varArray, saldo)
{
    //metodo reduce utilizando dois parametros: anterior e atual 
    return varArray.reduce(function(anterior, atual)
    {
        /*subtraindo o saldo anterior pelo atual
        IMPORTANTE: por ser um objeto com mais de um propriedade, é importante utilizar apenas a propriedade que é interessante para a operação. Nesse caso foi o preço*/
        return anterior - atual.preco;
    }, saldo) // ← definindo o começo da subtração, ou seja, o valor inicial é o saldo que será passado como parametro na hora de chamar a função
}

// printando o resultado da funcao 
console.log("Pequeno sistema de compras");
console.log(`Meu saldo disponível é: R$${saldoDispnivel},00`);
console.log(`O valor total das compras é R$${saldoDispnivel- (calculaSaldo(lista, saldoDispnivel))},00`);
console.log(`Meu saldo final é: R$${(calculaSaldo(lista, saldoDispnivel))},00`)

