//using selectors inside the element
// traversing the dom


let theParent = document.querySelectorAll(".parent")

theParent.forEach(parentElement => {
    let clickedbtn = parentElement.querySelector('.question-btn')
    clickedbtn.addEventListener('click' , () =>{
        parentElement.classList.toggle('showAll')
    })
})
theParent.forEach(parentElement => {
    let clickedbtn = parentElement.querySelector('.question-btn')
    clickedbtn.addEventListener('click' , () =>{
        parentElement.classList.toggle('showAll')
    })
})

