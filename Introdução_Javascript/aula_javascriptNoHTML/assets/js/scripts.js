var numeroAtualContainer = document.getElementById('numero-atual');
var numeroAtual = 0;

function funAcrescentar() {
    numeroAtual = numeroAtual + 1;
    numeroAtualContainer.innerHTML = numeroAtual;
    if(numeroAtual<0){
        numeroAtualContainer.style.color="red";
        
        
    }
    else{
        numeroAtualContainer.style.color="black";
    }
    
    
}

function funSubtrair() {
    numeroAtual = numeroAtual - 1;
    numeroAtualContainer.innerHTML = numeroAtual;
    if(numeroAtual<0){
        numeroAtualContainer.style.color="red";
        
    }
    else{
        numeroAtualContainer.style.color="black";
        
    }
    
}


