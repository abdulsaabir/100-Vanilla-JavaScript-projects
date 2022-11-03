const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
let currentoperand = document.querySelector('.current-operand')
let previousoperand = document.querySelector('.previous-operand')
let  dataquals = document.querySelector('[ data-equals]')
let dataallclear = document.querySelector('[data-all-clear]')
let datadelete = document.querySelector('[data-delete]')


class Calculator {
    constructor(previousoperand , currentoperand)
    {
        this.previousoperand = previousoperand;
        this.currentoperand = currentoperand
    }
}