//criando um map para armazenar todos os tipos de usuarios
usersMap = new Map();

//adicionando usuarios no sistema 
usersMap.set("Bruno","Admin");
usersMap.set("Marcos","Admin");
usersMap.set("Victor","Usuário");
usersMap.set("William","Usuário");
usersMap.set("Luan","Usuário");
usersMap.set("Bea","Suporte");

//criando a funcao que verifica cada tipo de usuario
function getAdmin(map)
{
    //criando variaveis para armazenar os tipos de usuarios
    let adms = [];
    let usuarios = [];
    let suporte = [];

    //condicionando para cada chave e valor do map
    for([key, value] of map)
    {
        //verificando os tipos de usuario e adicionando cada um em sua respectiva funcao
        if(value === "Admin")
        {
            adms.push(key)
        }

        else if (value === "Usuário")
        {
            usuarios.push(key)
        }

        else 
        {
            suporte.push(key)
        }
    }

    //printando os tres tipos de usuario
    console.log(`Administradores do sistems: ${adms}`)
    console.log(`Usuários do sistema: ${usuarios}`)
    console.log(`Suportes do sistema: ${suporte}`) 
}

//chamando a função 
getAdmin(usersMap);
