let openBtn = document.querySelector('.modal-btn')
let closeBtn = document.querySelector('.cancel')
let toggleContent = document.querySelector('.model')

openBtn.addEventListener('click' , () =>{
    toggleContent.classList.add('toggle')
})
closeBtn.addEventListener('click' , () =>{
    toggleContent.classList.remove('toggle')
})