let menuBtn = document.getElementById('menuBtn')
let navbar = document.getElementById('navbar')

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('show')
})