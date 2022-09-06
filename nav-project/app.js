let toggle = document.querySelector(".burger")
let navSide = document.querySelector(".nav-links")
let socialMedia =  document.querySelector('.social-icons')



toggle.addEventListener('click',() => {
    navSide.classList.toggle('nav-active')
    toggle.classList.toggle('rotate');
    socialMedia.classList.toggle('social-icons-toggle')
})