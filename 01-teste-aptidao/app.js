'use strict'

function removerClasse(){
    const resultado = document.getElementById("resultado")
    resultado.classList.remove('apto', 'nao_apto')
}


function avaliar(){
    const tempo = document.getElementById("tempo")
    const resultado = document.getElementById("resultado")

    removerClasse()
    
    if(tempo.value < 14){
        resultado.textContent = 'Apto'
        resultado.classList.add('apto') //<- adiciona uma classe sem sobrescrever outras
    }else{
        resultado.textContent = 'Não Apto'
        resultado.classList.add('nao_apto')
    }
}