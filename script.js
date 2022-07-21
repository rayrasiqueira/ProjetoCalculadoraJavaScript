function somar() {
    let elementoUm = document.querySelector("#primeiroNumero").value 
    let elementoDois = document.querySelector("#segundoNumero").value

    if (elementoUm == "" || elementoDois == "") {
        alert("Os dois campos devem ser preenchidos!")

    } else { 
        document.querySelector("#resultado").innerHTML = Number(elementoUm) + Number(elementoDois)
    }
}

function subtrair() {
    let elementoUm = document.querySelector("#primeiroNumero").value
    let elementoDois = document.querySelector("#segundoNumero").value

    if (elementoUm == "" || elementoDois == "") {
        alert("Os dois campos devem ser preenchidos!")

    } else {
        document.querySelector("#resultado").innerHTML = Number(elementoUm) - Number(elementoDois)
    }
}

function multiplicar() {
    let elementoUm = document.querySelector("#primeiroNumero").value
    let elementoDois = document.querySelector("#segundoNumero").value

    if (elementoUm == "" || elementoDois == "") {
        alert("Os dois campos devem ser preenchidos!")

    } else {
        document.querySelector("#resultado").innerHTML = Number(elementoUm) * Number(elementoDois)
    }
}

function dividir() {
    let elementoUm = document.querySelector("#primeiroNumero").value
    let elementoDois = document.querySelector("#segundoNumero").value

    if (elementoUm == "" || elementoDois == "") {
        alert("Os dois campos devem ser preenchidos!")
    } else if (elementoDois == 0){
        alert("Erro, divisão por zero!")
    } else {
        document.querySelector("#resultado").innerHTML = Number(elementoUm) / Number(elementoDois)
    }
}

function hypot() {
    let elementoUm = document.querySelector("#primeiroNumero").value
    let elementoDois = document.querySelector("#segundoNumero").value
    
    if (elementoUm == "" || elementoDois == "") {
        alert("Os dois campos devem ser preenchidos!")
    } else {
        document.querySelector("#resultado").innerHTML = Math.hypot(elementoUm, elementoDois)
    }
}

function pow() {
    let elementoUm = document.querySelector("#primeiroNumero").value
    let elementoDois = document.querySelector("#segundoNumero").value

    if (elementoUm == "" || elementoDois == "") {
        alert("Os dois campos devem ser preenchidos!")
    } else {
        document.querySelector("#resultado").innerHTML = Math.pow(elementoUm, elementoDois)
    }
}
