const colors= [ "red" , " blue", " white" , "rgba(100,35,180)", "#fff54c"]

let newcolor = document.getElementById("color")

let clicked= document.querySelector(".clicked");
clicked.addEventListener('click' , function(){
    let body= document.querySelector('body')
    let randomn =Math.floor((Math.random() * colors.length))
    body.style.background = colors[randomn]
    newcolor.textContent = colors[randomn]
});