let menuBtn = document.getElementById('menuBtn')
let navbar = document.getElementById('navbar')

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('show')
})

let carrousel = document.getElementById('carrousel')
let arrowLeft = document.getElementById('arrowLeft')
let arrowRight = document.getElementById('arrowRight')
let pagOne = document.getElementById('pagOne')
let pagTwo = document.getElementById('pagTwo')
let pagThree = document.getElementById('pagThree')
let index = 1

arrowRight.addEventListener('click', () => {
    if (index == 1) {
        carrousel.style.transform = "translateX(-100%)"
        index = 2

        pagOne.classList.remove('active')
        pagTwo.classList.add('active')
        pagThree.classList.remove('active')
    } else if (index == 2) {
        carrousel.style.transform = "translateX(-200%)"
        index = 3
        
        pagOne.classList.remove('active')
        pagTwo.classList.remove('active')
        pagThree.classList.add('active')
    } else if (index == 3) {
        carrousel.style.transform = "translateX(0%)"
        index = 1

        pagOne.classList.add('active')
        pagTwo.classList.remove('active')
        pagThree.classList.remove('active')
    }
})

arrowLeft.addEventListener('click', () => {
    if (index == 1) {
        carrousel.style.transform = 'translateX(-200%)'
        index = 3
        
        pagOne.classList.remove('active')
        pagTwo.classList.remove('active')
        pagThree.classList.add('active')
    } else if (index == 2) {
        carrousel.style.transform = 'translateX(0%)'
        index = 1

        pagOne.classList.add('active')
        pagTwo.classList.remove('active')
        pagThree.classList.remove('active')
    } else if (index == 3) {
        carrousel.style.transform = 'translateX(-100%)'
        index = 2

        pagOne.classList.remove('active')
        pagTwo.classList.add('active')
        pagThree.classList.remove('active')
    }
})

let hoverOne = document.getElementById('hoverOne')
let hoverTwo = document.getElementById('hoverTwo')
let hoverThree = document.getElementById('hoverThree')

carrousel.addEventListener('mouseenter', () => {
    hoverOne.style.height = '100%'
    hoverTwo.style.height = '100%'
    hoverThree.style.height = '100%'
})

carrousel.addEventListener('mouseleave', () => {
    hoverOne.style.height = '0'
    hoverTwo.style.height = '0'
    hoverThree.style.height = '0'
})