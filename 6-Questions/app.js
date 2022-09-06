//using selectors inside the element
// traversing the dom

let click = document.querySelectorAll('Button')
let close = document.querySelectorAll('button')

let hiddenText1 = document.querySelector(".hiddentext1")
let hiddenText2 = document.querySelector(".hiddentext2")
let hiddenText3 = document.querySelector(".hiddentext3")

let hiddenbtn1 = document.querySelector(".clickbtn1")
let hiddenbtn2 = document.querySelector(".clickbtn2")
let hiddenbtn3 = document.querySelector(".clickbtn3")

let openbtn1 = document.querySelector(".btnhiden1")
let openbtn2 = document.querySelector(".btnhiden2")
let openbtn3 = document.querySelector(".btnhiden3")



click.forEach((btns =>{
    btns.addEventListener('click' , (clicked) =>{
        let btnclicked = clicked.currentTarget.classList
        removebtn()
        if (btnclicked.contains('clickbtn1'))
        {
            addandHidden(hiddenbtn1 ,openbtn1  ) 
                remover()
                hiddenText1.classList.add('active')
          
        }
        if(btnclicked.contains('clickbtn2'))
        {
            addandHidden(hiddenbtn2 , openbtn2) 
            remover()
            hiddenText2.classList.add('active')
        }
        if(btnclicked.contains('clickbtn3'))
        {
            remover()
            addandHidden( hiddenbtn3 , openbtn3)
            hiddenText3.classList.add('active')
        }
    })
}))

close.forEach(btn =>{
    btn.addEventListener('click', (now) =>{
        let closeBtnClicked = now.currentTarget.classList
        if(closeBtnClicked.contains('btnhiden1'))
        {
            openbtn1.classList.remove('active')
            hiddenbtn1.classList.remove('remove')
            hiddenText1.classList.remove('active')
        }
        if(closeBtnClicked.contains('btnhiden2'))
        {
            openbtn2.classList.remove('active')
            hiddenbtn2.classList.remove('remove')
            hiddenText2.classList.remove('active')
        }
        if(closeBtnClicked.contains('btnhiden3'))
        {
            openbtn3.classList.remove('active')
            hiddenbtn3.classList.remove('remove')
            hiddenText3.classList.remove('active')
        }

    })
} )



function remover(){
    hiddenText1.classList.remove('active')
    hiddenText2.classList.remove('active')
    hiddenText3.classList.remove('active')
    
}

function removebtn(){
    openbtn1.classList.remove('active')
    openbtn2.classList.remove('active')
    openbtn3.classList.remove('active')
    hiddenbtn1.classList.remove('remove')
    hiddenbtn2.classList.remove('remove')
    hiddenbtn3.classList.remove('remove')
}

function addandHidden(Open , Hiden){
    Open.classList.add('remove')
    Hiden.classList.add('active')
}
