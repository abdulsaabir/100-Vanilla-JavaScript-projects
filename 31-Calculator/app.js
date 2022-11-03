class CalculatorClass {
    constructor(previousoperand , currentoperand)
    {
        this.previousoperand = previousoperand;
        this.currentoperand = currentoperand;
        this.clear()
    }

    clear(){
        this.operand=""
        this.operation = ""
        this.currentoperand.textContent=""
        this.previousoperand.textContent=""
    }
    calOperation(symbol){
        if(!currentoperand.textContent) return
        if(previousoperand.textContent)
        {
           
            this.calCulate()
            this.operation = symbol.toString()
            return
        }
        this.operation = symbol.toString()
      this.previousoperand.textContent = this.currentoperand.textContent
      this.currentoperand.textContent = ""
      this.operand=""
    }
    displayoperand(operand){
        this.operand = this.operand.toString() + operand.toString()
        this.updateCalc()
    }
    updateCalc(){
        this.currentoperand.textContent = this.operand
    }
    calCulate(){
        console.log(this.operation)
        this.completion  ;
     switch (this.operation) {
        case "+":
           this.completion= parseFloat(previousoperand.textContent) + parseFloat(currentoperand.textContent)
        break;
        case "-":
           this.completion= parseFloat(previousoperand.textContent) - parseFloat(currentoperand.textContent)
            break;
        case "*":
           this.completion= parseFloat(previousoperand.textContent) * parseFloat(currentoperand.textContent)
            break;
        case "÷":
           this.completion= parseFloat(previousoperand.textContent) / parseFloat(currentoperand.textContent)
            break;
     
        default:
            break;
     }
     this.operand=""
     this.previousoperand.textContent=this.completion
    //  console.log(this.completion)
     this.currentoperand.textContent=""
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

