let peso = parseFloat(prompt("Digite sua massa fi"))
let altura = parseFloat(prompt("Digite sua altura nego"))

//  let imc = calcularIMC(peso,altura)


function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
    alert ("seu indice de imc é.... ", imc)
    return imc
}

function classificarIMC(imc) {
    if (imc >= 40) {
        alert("Gordão nível 3: " + imc)
    } else if (imc >= 35) {
        alert("Gordão nível 2: " + imc)
    } else if (imc >= 30) {
        alert("Gordão nível 1: " + imc)
    } else if (imc >= 25) {
        alert("Gordinho: " + imc)
    } else if (imc >= 18, 5) {
        alert("Normal: " + imc )
    } else {
        alert("Só o Osso: " + imc)
    }
}
gerarRelatorio(peso,altura)
function gerarRelatorio(peso, altura) {
    let imc =calcularIMC(peso, altura)     
    classificarIMC(imc)
}
