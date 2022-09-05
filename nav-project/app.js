let toggle = document.querySelector(".burger")
let navSide = document.querySelector(".nav-links")
let navLinks = document.querySelectorAll('.nav-links li')



toggle.addEventListener('click',() => {
    navSide.classList.toggle('nav-active')
    toggle.classList.toggle('rotate');
})