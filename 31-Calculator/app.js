const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
let currentoperand = document.querySelector('.current-operand')
let previousoperand = document.querySelector('.previous-operand')
let operand;
let numbernow = "";
let  dataquals = document.querySelector('[ data-equals]')
let dataallclear = document.querySelector('[data-all-clear]')
numberBtn.forEach(number => {
   number.addEventListener('click' , e => {
   numbernow=  numbernow.concat(e.target.textContent)
   currentoperand.textContent = numbernow

   })
})

operationBtn.forEach(oper => {
    oper.addEventListener('click' , e=>{
        if(currentoperand.textContent === "")
        {
            operand = e.target.textContent
            return
        }
       
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

dataquals.addEventListener('click' ,() => {
    if(!operand) return
    if(operand === "÷") operand = "/"
    currentoperand.textContent= (eval(`${previousoperand.textContent} ${operand} ${currentoperand.textContent}`))
    previousoperand.textContent=""
})


dataallclear.addEventListener('click', () => {
    previousoperand.textContent = ""
    currentoperand.textContent=""
    operand=""
    numbernow=""
})