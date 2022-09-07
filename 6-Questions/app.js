//using selectors inside the element
// traversing the dom
 
let btns = document.querySelectorAll(".question-btn")
let theParent = document.querySelector(".parent")

btns.forEach(btn =>{
    btn.addEventListener('click' , (e)=>{
    let parent = e.currentTarget.parentElement.parentElement
    parent.classList.toggle('showAll')
    })
})