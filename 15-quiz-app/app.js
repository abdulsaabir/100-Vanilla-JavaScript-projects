let cover = document.querySelector('.cover')

let btns = document.querySelectorAll('.btns')

btns.forEach(btn => {
    btn.addEventListener('click' , (e)=> {
        cover.classList.add('display')
    })
})