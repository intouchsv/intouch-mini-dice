const cubo = document.querySelector('.cubo')
const tirar = document.querySelector('.tirar')
let uno = 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)'
let dos = 'rotateX(270deg) rotateY(180deg)'
let tres = 'rotateZ(180deg) rotateY(270deg)'
let cuatro = 'rotateX(360deg) rotateY(90deg)'
let cinco = 'rotateX(270deg) rotateZ(180deg)'
let seis = 'rotateX(360deg) rotateY(180deg)'
let random

function generarRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
function tirarClick() {
    random = generarRandom(1, 7)
    if (random == '1') {
        cubo.style.transform = uno
    }
    else if (random == '2') {
        cubo.style.transform = dos
    }
    else if (random == '3') {
        cubo.style.transform = tres
    }
    else if (random == '4') {
        cubo.style.transform = cuatro
    }
    else if (random == '5') {
        cubo.style.transform = cinco
    }
    else if (random == '6') {
        cubo.style.transform = seis
    }
}

tirar.addEventListener('click', tirarClick)
cubo.addEventListener('click', tirarClick)