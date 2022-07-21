function funcao(){
    let parametro1 = Number(prompt("Insira o primeiro parâmetro:"))
    let parametro2 = Number(prompt("Insira o segundo parâmetro:"))
    let soma = parametro1 + parametro2
    if(parametro1 !== parametro2 && 10 <= soma && soma <= 20){
        alert(`Os números ${parametro1} e ${parametro2} não são iguais. Sua soma é ${soma} e está no intervalo de 10 a 20.`)
    }else if(parametro1 !== parametro2 && soma < 10){
        alert(`Os números ${parametro1} e ${parametro2} não são iguais. Sua soma é ${soma}, que é menor que 10.`)
    }else if(parametro1 !== parametro2 && soma > 20){
        alert(`Os números ${parametro1} e ${parametro2} não são iguais. Sua soma é ${soma}, que é maior que 20.`)
    }else if(parametro1 === parametro2 && 10 <= soma && soma <= 20){
        alert(`Os números ${parametro1} e ${parametro2} são iguais. Sua soma é ${soma} e está no intervalo de 10 a 20.`)
    }else if(parametro1 === parametro2 && soma < 10){
        alert(`Os números ${parametro1} e ${parametro2} são iguais. Sua soma é ${soma}, que é menor que 10.`)
    }else if(parametro1 === parametro2 && soma > 20){
        alert(`Os números ${parametro1} e ${parametro2} são iguais. Sua soma é ${soma}, que é maior que 20.`)}    
}

funcao()
