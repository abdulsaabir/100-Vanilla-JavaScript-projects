let searchinput = document.getElementById('searchin')
let searchBox = document.querySelector('.searchBox')
let logo =document.querySelector('.logo')

searchBox.addEventListener('click' , (e) => {
    e.preventDefault()
    searchinput.classList.add('displahy')
    logo.classList.add('hide')
})