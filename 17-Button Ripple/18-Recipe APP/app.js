let searchinput = document.getElementById('searchin')
let searchBox = document.querySelector('.searchBox')
let logo =document.querySelector('.logo')

searchBox.addEventListener('click' , (e) => {
    e.preventDefault()
    searchinput.classList.dd('display')
    logo.classList.add('hide')
})