//using selectors inside the element
// traversing the dom


let btns = document.querySelectorAll(".question-btn")
let parent = document.querySelectorAll('.parent')

btns.forEach(btn =>{
    btn.addEventListener('click' , (e)=>{
        let parentOfbtn  = e.currentTarget.parentElement.parentElement
        let currenbtn = e.currentTarget
        parentOfbtn.classList.toggle("showAll")
        parent.forEach(close => {
            let currenparent = close.classList
           if(currenparent.contains("showAll"))
           {
            console.log(currenparent)
           }
           else{
            currenparent.remove("showAll")
           }
        })

    })
})