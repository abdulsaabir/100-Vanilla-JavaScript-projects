class CalculatorClass {
    constructor(previousoperand , currentoperand)
    {
        this.previousoperand = previousoperand;
        this.currentoperand = currentoperand
        this.clear()
    }

    clear(){
        this.currentoperand = ""
        this.previousoperand=""
        this.operand=""
        this.operation = ""
    }
    displayoperand(operand){
        this.operand = operand
    }
    updateCalc(){
        this.currentoperand.text = this.operand
    }
    calCulate(){
        console.log(this.currentoperand)
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

let Calculator = new CalculatorClass()


numberBtn.forEach(btn =>{
    btn.addEventListener('click' , e => {
        Calculator.displayoperand(e.target.innerText)
        Calculator.calCulate()
    })
})


