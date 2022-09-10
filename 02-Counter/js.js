let counter = 0;

let output = document.querySelector(".Output")
let btn = document.querySelectorAll("button")

btn.forEach((btns => {
    btns.addEventListener('click' , function(clicked){
        const  changer =clicked.currentTarget.classList;
        if (changer.contains('plus'))
        {
            counter++
        }
        else if(changer.contains('minus')){
             counter--
        }
         else{
            counter=0;
         }
         output.textContent= counter
         chekingdigits()
        }
    )
}))


function chekingdigits(){
    counter > 0 ? output.style.color = "red" : counter < 0 ? output.style.color = "green" : output.style.color = "white"
}



















// let output= document.querySelector('.Output')


// let plus = document.getElementById("plus")

// plus.addEventListener('click', function(){
    
//     counter++
//     output.textContent= counter
//     chekingdigit()
// })

// let reset = document.querySelector("#clear")

// reset.addEventListener('click' , function() {
//     counter == 0 ? alert("it's zero") :
//     counter= 0
//     output.textContent = 0
//     chekingdigit()
// })

// let minus = document.getElementById("minus")

// minus.addEventListener('click' , function(){
//     counter--
//     output.textContent= counter;
//     chekingdigit()
   
// })

// function chekingdigit(){
//     counter>0 ? output.style.color= "red" : counter<0 ? output.style.color = "green" : output.style.color= "white"
// }