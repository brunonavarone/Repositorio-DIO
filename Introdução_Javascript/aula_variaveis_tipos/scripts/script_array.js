function testePar(array){
    //verificando se o array existe 
    if(!array) return -1;
    if(!array.length) return -1;
    //fazendo o loop e percorrendo toda a lista
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero")
        }
        else if(array[i] % 2 === 0){

            console.log(`Substituindo ${array[i]} por 0`)
            array[i] = 0;
        }
    }
    return array;
}

let meuArray = [0, 1, 2, 3, 4, "quartena", 6, 7, 0, 8, 9, 10, 12, 14, 60, 100];

console.log(testePar(meuArray));

