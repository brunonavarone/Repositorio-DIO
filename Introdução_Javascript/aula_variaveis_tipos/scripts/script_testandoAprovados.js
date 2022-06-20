const alunos = [
    {
        nome: "Bruno",
        nota1: 10,
        nota2: 8,
        turma: "1A",
    },
    {
        nome: "Marcos",
        nota1: 10,
        nota2: 9,
        turma: "1B",
    },    
    {
        nome: "Victor",
        nota1: 7,
        nota2: 5,
        turma: "1C",
    },
    {
        nome: "William",
        nota1: 7.9,
        nota2: 7.5,
        turma: "1D",
    },
];

function verificaAlunosAprovados(variavelArray, media)
{
    let aprovados = [];

    for(i = 0; i < variavelArray.length; i++)
    {
        if((variavelArray[i].nota1 + variavelArray[i].nota2)/2 >= media)
        {
            aprovados.push(variavelArray[i].nome);
        }
    }

    console.log(...aprovados);
    
}

verificaAlunosAprovados(alunos, 7);

