let peso = parseFloat(prompt("Digite sua massa fi"))
let altura = parseFloat(prompt("Digite sua altura nego"))

//  let imc = calcularIMC(peso,altura)


function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
    alert ("seu indice de imc é ", imc)
    return imc
}

function classificarIMC(imc) {
    if (imc >= 40) {
        alert("Gordão nível 3")
    } else if (imc >= 35) {
        alert("Gordão nível 2")
    } else if (imc >= 30) {
        alert("Gordão nível 1")
    } else if (imc >= 25) {
        alert("Gordinho")
    } else if (imc >= 18, 5) {
        alert("Normal")
    } else {
        alert("Só o Osso")
    }
}
gerarRelatorio(peso,altura)
function gerarRelatorio(peso, altura) {
    let imc =calcularIMC(peso, altura)
        
classificarIMC(imc)
}
