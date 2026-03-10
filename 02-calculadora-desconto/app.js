function calcular(preco, desconto){
    let precoFinal = preco - (preco * (desconto / 100))
    return precoFinal
}

function formatarMoeda(num){
    let formatarMoeda = new Intl.NumberFormat('pt-br', {style: "currency", currency: "BRL"})
    let moedaFormatada = formatarMoeda.format(num)
    return moedaFormatada
}
function calcularDesconto(){
    const preco = document.getElementById('preco-original')
    const desconto = document.getElementById('desconto')
    const result = document.getElementById('result')

    if(desconto < 5){
        result.classList.add()
    }else  if(desconto){

    }

    let precoFinal = calcular(preco.value, desconto.value)
    let economia = formatarMoeda(preco.value - precoFinal)

    let precoFinalMoeda = formatarMoeda(precoFinal)

    console.log(precoFinal)
    console.log(economia);
    
    
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