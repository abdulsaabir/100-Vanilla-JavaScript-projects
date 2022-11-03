class CalculatorClass {
    constructor(previousoperand , currentoperand)
    {
        this.previousoperand = previousoperand;
        this.currentoperand = currentoperand.textContent;
        this.clear()
    }

    clear(){
        this.operand=""
        this.operation = ""
        this.currentoperand="4"
        this.previousoperand.textContent=""
    }
    calOperation(symbol){
      this.operation = symbol
      this.previousoperand.textContent = this.currentoperand
      this.currentoperand = ""
      this.operand=""
    }
    displayoperand(operand){
        this.operand = this.operand.toString() + operand.toString()
        this.updateCalc()
    }
    updateCalc(){
        this.currentoperand = this.operand
    }
    calCulate(){
     
    }
    delete(){

    }
    equal(){

    }
}



const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
let currentoperand = document.querySelector('.current-operand')
let previousoperand = document.querySelector('.previous-operand')
let  dataquals = document.querySelector('[ data-equals]')
let dataallclear = document.querySelector('[data-all-clear]')
let datadelete = document.querySelector('[data-delete]')

let Calculator = new CalculatorClass(previousoperand , currentoperand)


numberBtn.forEach(btn =>{
    btn.addEventListener('click' , e => {
        Calculator.displayoperand(e.target.innerText);
        Calculator.clear()
    })
})


dataallclear.addEventListener('click' , () => {
    Calculator.clear()
})

operationBtn.forEach(btn => {
    btn.addEventListener('click' , e => {
        Calculator.calOperation(e.currentTarget.textContent)
    })
})

