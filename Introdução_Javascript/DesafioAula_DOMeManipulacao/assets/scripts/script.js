//definindo variaveis que vão acessar elementos html, para manipula-los aqui no código
const meuBody = document.getElementById("corpo");
const meuH1 = document.getElementById("page-title");
const meuBotao = document.getElementById("mode-selector");
const meuRodaPe = document.getElementById("rodape-pagina"); 

//variavel que funciona como parametro para veriricacao de qual classe o elemento body contem, mas poderia ter utilizado apenas o nome da classe na verificacao da funcao mudaTexto();
const classeDarkMode = 'dark-mode';

//funcao que adiciona e retira a classe darkmode quando o botao é clicado
function interruptor()
{
    meuBody.classList.toggle("dark-mode");

    meuH1.classList.toggle("dark-mode");

    meuBotao.classList.toggle("dark-mode");

    meuRodaPe.classList.toggle("dark-mode");

    //chamando a funcao para mudar o texto
    mudaTexto();

}

meuBotao.addEventListener("click", interruptor);


//criando a funcao que muda o texto
function mudaTexto()
{
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

    //verificando se o meu elemento body contem a classe "dark-mode", que foi passada como uma string com o valor "dark-mode"
	if(meuBody.classList.contains(classeDarkMode)) //← aqui poderia ter utilizado apenas o nome da classe "dark-mode"
    {
		meuBotao.innerHTML = lightMode;
		meuH1.innerHTML = darkMode + ' ON';
		return;
	}

	meuBotao.innerHTML = darkMode;
	meuH1.innerHTML = lightMode + ' ON';
}


