

const calcularMedia = (n1, n2, n3) => {
    let media1 = Number(n1);
    let media2 = Number(n2); 
    let media3 = Number(n3);

    let media = (media1 + media2 + media3) / 3
    return media
}

const definirStatusAluno = (media) => {
    if (media >= 7) {
        return 'Aprovado'
    }else if (media >= 5) {
        return 'Recuperação'
    } else{
        return 'Reprovado'
    }
}

const formatarCor = (media) => {
    if (media >= 7) {
        return 'aprovado'
    }else if (media >= 5) {
        return 'em-recuperacao'
    } else{
        return 'reprovado'
    }
} 
const removerCondicionalFormat = () => {
    document.getElementById('resultado').classList.remove('aprovado', 'em-recuperação', 'reprovado')
}
function handleClick(){
    const nota1 = document.getElementById('nota1').value
    const nota2 = document.getElementById('nota2').value
    const nota3 = document.getElementById('nota3').value

    const resultado = document.getElementById('resultado')

    let media = calcularMedia(nota1, nota2, nota3)
    let statusAluno = definirStatusAluno(media)

    let cor = formatarCor(media)
    
    removerCondicionalFormat()
    resultado.textContent = `${statusAluno}`
    resultado.classList.add(cor)
}