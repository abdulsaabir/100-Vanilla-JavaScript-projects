let searchinput = document.getElementById('searchin')
let searchBox = document.querySelector('.searchBox')
let logo =document.querySelector('.logo')

searchBox.addEventListener('click' , (e) => {
    e.preventDef
    ault()
    searchinput.classList.add('display')
    logo.classList.add('hide')
    
})