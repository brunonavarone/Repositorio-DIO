

function quadradoDePares(varNumero)
{   
    
        //variavel do tipo array para guardar os números pares 
        let numerosPares = [];

        //verificando se o parametro enviado é do tipo número
        if(typeof varNumero !== 'number')
        {      
            if(typeof varNumero === 'undefined')
            {
                console.log("Envie um parâmetro!")
            }

            else
            {
                console.log(`O parametro ${varNumero} precisa ser um inteiro positivo maior que 5 e menor que 2000!`);
                return;
            }
        }
  
        else
        {   
            //verificando se o parametro enviado é menor ou igual a 5
            if(varNumero <= 5)
            {
                console.log(`O número ${varNumero} é menor ou igual a 5. Utilize um número maior que 5 e menor que 2000!`);
            }

            //verificando se o parametro enviado é maior ou igual a 2000
            else if(varNumero >= 2000)
            {
                console.log(`O número ${varNumero} é maior ou igual a 2000. Utilize um número maior que 5 e menor que 2000!`);
            }

            else
            {
                //verificando os números pares existentes no parâmetro enviado
                for(i = 1; i <= varNumero; i++)
                {
                    if(i % 2 === 0)
                    {
                        numerosPares.push(i);
                        console.log(`${i}^2 = ${i**2}`)
                    }
                }
                
            }
        }
    
   
}

//chamando a funcao 
quadradoDePares(2);