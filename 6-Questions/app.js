//using selectors inside the element
// traversing the dom


let theParent = document.querySelectorAll(".parent")

theParent.forEach(parentElement => {
    let clickedbtn = parentElement.querySelector('.question-btn')
    clickedbtn.addEventListener('click' , () =>{
        parentElement.classList.toggle('showAll')
    })
})

// let btns = document.querySelectorAll(".question-btn")
// let theParent = document.querySelector(".parent")

// btns.forEach(btn =>{
//     btn.addEventListener('click' , (s)=>{
//     let parent = s.currentTarget.parentElement.parentElement
//     parent.classList.toggle('showAll')
//     })
// })