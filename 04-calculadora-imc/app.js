'use strict'

const calcularIMC = (peso, altura) => {
    let imc = peso / (altura * altura)
    return imc
}

const definirClassificacao = (imc) => {
    if (imc < 18.5) {
        return "Abaixo do peso"
    } else if (imc < 25){
        return "Peso Normal"
    }else if(imc < 30){
        return "Sobrepeso"
    }else if(imc < 35){
        return "Obesidade grau I"
    }else if(imc < 40){
        return "Obesidade grau II"
    }else{
        return "Obesidade grau III"
    }
}

const formatarCor = (imc) => {
    if (imc < 18.5) {
        return "format1"
    } else if (imc < 25){
        return "format2"
    }else if(imc < 30){
        return "format3"
    }else if(imc < 35){
        return "format4"
    }else if(imc < 40){
        return "format5"
    }else{
        return "format6"
    }
}

const removerCondicionalFormat = () => {
    document.getElementById('resultado')
        .classList
            .remove('format1', 'format2', 'format3', 'format4', 'format5', 'format6')
}

function hadleClick() {
    const altura = Number(document.getElementById('altura').value)
    const peso = Number(document.getElementById('peso').value)

    const resultado = document.getElementById('resultado')

    let imc = calcularIMC(peso, altura)
    let classificação = definirClassificacao(imc)
    let cor = formatarCor(imc)

    removerCondicionalFormat()
    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} | Classificação: ${classificação}`
    resultado.classList.add(cor)
}