const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
let currentoperand = document.querySelector('.current-operand')

let numbernow = "";
numberBtn.forEach(number => {
   number.addEventListener('click' , e => {
   numbernow=  numbernow.concat(e.target.textContent)
   currentoperand.textContent = numbernow


   })
})

operationBtn.forEach(oper => {
    oper.addEventListener('click' , e=>{
     console.log(e.target.textContent)   
    })
})