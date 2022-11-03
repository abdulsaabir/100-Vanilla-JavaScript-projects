class CalculatorClass {
    constructor(previousoperand , currentoperand)
    {
        this.options = ['+' , '-' , '*']
        this.previousoperand = previousoperand;
        this.currentoperand = currentoperand;
        this.clear()
    }
    th

    clear(){
        this.operand=""
        this.operation = ""
        currentoperand.textContent=""
        previousoperand.textContent=""
    }
    calOperation(symbol){
        if(!currentoperand.textContent) 
        {
            
            this.operation = symbol.toString()
            return
        }
        if(previousoperand.textContent)
        {
           
            this.calCulate()
            this.operand=""
            this.previousoperand.textContent =` ${this.completion} ${this.operation}`
            this.currentoperand.textContent=""
            this.operation = symbol.toString()
            return
        }
        this.operation = symbol.toString()
      this.previousoperand.textContent =` ${this.currentoperand.textContent} ${this.operation}`
      this.currentoperand.textContent = ""
      this.operand=""
    }
    displayoperand(operand){
        if(operand === "." && currentoperand.textContent.includes('.')) return
        this.operand = this.operand.toString() + operand.toString()
        this.updateCalc()
    }
    updateCalc(){
        this.currentoperand.textContent = this.operand
    }
    calCulate(){
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
    }

    deleteopreand(){
        this.operand = this.operand.slice(0,-1)
        this.updateCalc()
    }
    equal(){
        if(!previousoperand.textContent || !currentoperand.textContent) return
        else{
            
            this.calCulate()
            this.operand=""
            this.currentoperand.textContent=this.completion
            this.previousoperand.textContent=""
        }
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

dataquals.addEventListener('click' , () =>{
    Calculator.equal()
})
datadelete.addEventListener('click' ,() => {
    Calculator.deleteopreand()
})