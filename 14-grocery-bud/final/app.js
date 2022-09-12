let input = document.getElementById('grocery')

let sumbitbtn = document.querySelector('.submit-btn')









// add event listener to submit btn
sumbitbtn.addEventListener('click' , (e) => {
    e.preventDefault()
    let inputLast =input.value
    console.log(inputLast)
})