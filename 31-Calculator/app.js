const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
let currentoperand = document.querySelector('.current-operand')
let previousoperand = document.querySelector('.previous-operand')
let operand;
let numbernow = "";
numberBtn.forEach(number => {
   number.addEventListener('click' , e => {
   numbernow=  numbernow.concat(e.target.textContent)
   currentoperand.textContent = numbernow

   })
})

operationBtn.forEach(oper => {
    oper.addEventListener('click' , e=>{
        if(currentoperand.textContent === "") return
       
        if(operand === "÷") operand = "/"
    //  console.log(operand)
    // console.log(Number(operand))
     if(previousoperand.textContent && currentoperand.textContent)
     {
      previousoperand.textContent =   (eval(`${previousoperand.textContent} ${operand} ${currentoperand.textContent}`))
      currentoperand.textContent = ""
      numbernow = ""
     operand = e.target.textContent
      return
     }
     previousoperand.textContent = currentoperand.textContent
     currentoperand.textContent = ""
     numbernow = ""
    operand = e.target.textContent
  
    })
})