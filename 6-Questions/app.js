// the main undrestanding is in css 
//Show-text is the class doing all the job

// choose all the element parents
let parent = document.querySelectorAll('.question')

// loop through them to check the btn clicked
parent.forEach(currentParrent =>{
    // get the btn in the curren parent
    let btn = currentParrent.querySelector('.question-btn')
    // listen if the btn is clcked
    btn.addEventListener('click', ()=>{
        // turning off to get two parents open at the same time
        parent.forEach(chekingParent => {
            // comparing clicked btn and the others 
            if( chekingParent !== currentParrent)
            {
                chekingParent.classList.remove("show-text")
            }
        })
        // toggling on/off the btn clicked
        currentParrent.classList.toggle('show-text')
    })
    
})