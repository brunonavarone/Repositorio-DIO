const pessoa1 = {
    nome: "Cláudia",
    idade: 52, 
}

const pessoa2 = {
    nome: "Bruno",
    idade: 28,
}

const pessoa3 = {
    nome: "Marcos",
    idade: 27,
}

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(pessoa3, 5));