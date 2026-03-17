function calcularPrecoFinal(preco, desconto){
    let precoFinal = preco - (preco * (desconto / 100))
    return precoFinal
}

function formatarMoeda(num){
    let formatarMoeda = new Intl.NumberFormat('pt-br', {style: "currency", currency: "BRL"})
    let moedaFormatada = formatarMoeda.format(num)
    return moedaFormatada
}

const formatCondicional = (desconto) => {
    if(desconto <= 5){
        return 'desconto1' 
    }else  if(desconto <= 10){
        return 'desconto2'
    }else{
        return 'desconto3'
    }
}

const removerCondicionalFormat = () => {
    document.getElementById('result').classList.remove('desconto1', 'desconto2', 'desconto3')
}
function calcularDesconto(){
    const preco = Number(document.getElementById('preco-original').value)
    const desconto = Number(document.getElementById('desconto').value)
    const result = document.getElementById('result')

    
    let precoFinal = calcularPrecoFinal(preco, desconto)
    let economia = formatarMoeda(preco - precoFinal)

    let precoFinalMoeda = formatarMoeda(precoFinal)

    console.log(precoFinal)
    console.log(economia);
    
    removerCondicionalFormat()

    let formatoCondicional = formatCondicional(desconto)
    result.classList.add(formatoCondicional)

    
    let resultados = [{nome: "Preço Final", value: precoFinalMoeda}, {nome: "Valor Economizado", value: economia}]

    result.textContent = ''

    resultados.forEach(i => {
        let card = document.createElement('div')
        card.className = 'card-preco'

        let titulo = document.createElement('span')
        titulo.textContent = i.nome

        let valor = document.createElement('span')
        valor.textContent = i.value

        card.appendChild(titulo)
        card.appendChild(valor)

        result.appendChild(card)
    })
    
}