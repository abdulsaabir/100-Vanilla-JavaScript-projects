let openModel = document.querySelector('.modal-btn')
let closeModel = document.querySelector('.cancel')
let modal = document.querySelector('.two')
let body = document.querySelector('body')




openModel.addEventListener('click' , function(){
    modal.classList.add('toggle')
    body.classList.add('changeBackgroud')

})
closeModel.addEventListener('click', ()=>{
    modal.classList.remove('toggle')
    body.classList.remove('changeBackgroud')
})