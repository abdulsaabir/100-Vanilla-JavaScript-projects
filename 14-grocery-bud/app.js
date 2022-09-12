let submitbtn = document.querySelector('.submit-btn')
let form = document.getElementById('grocery')
let groceryContainer = document.querySelector('.grocery-container')
let groceryListContianer= document.querySelector('.grocery-list')
let clearbtn= document.querySelector('.clear-btn')




let idsearch;
let id;
let switcher = false

submitbtn.addEventListener('click' , (e) => {
    e.preventDefault()
    id = new Date().getTime().toString()
    let input= form.value
    if(input && !switcher)
    {
        // console.log(input)
        form.value=''
        groceryContainer.classList.add('show-container')
        groceryListContianer.innerHTML += `<article data-id="${id}" class="grocery-item"><p class="title">${input}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </article>`;



    // editbtn.addEventListener('click' , ()=> {
    //   console.log('save')
    // })
    // deletebtn.forEach(item => {
    //     btn.addEventListener('click' , () => {
    //       // let deletedarticle = e.currentTarget.parentElement.parentElement
    //       console.log('deletedarticle')
    //   })
    // })
}

let editbtn= document.querySelectorAll('.edit-btn')
let deletebtn = document.querySelectorAll('.delete-btn')
    deletebtn.forEach(btn => {
    btn.addEventListener('click' , (e) => {
    let deletedarticle = e.currentTarget.parentElement.parentElement
    deletedarticle.remove()
    if (groceryListContianer.childNodes.length === 0)
    {
        groceryContainer.classList.remove('show-container')
    }

  })
})


// edit btn
editbtn.forEach(btn => {
    btn.addEventListener('click' ,(e) => {
        switcher = true;
        let article = e.currentTarget.parentElement.parentElement
        let paragraph = article.querySelector('.title')
        submitbtn.textContent= "Edit"
        let editpara= paragraph.textContent
        form.value= editpara
        
    })
})

})



// clearbtn
clearbtn.addEventListener('click', () => {
    groceryListContianer.innerHTML= ''
    groceryContainer.classList.remove('show-container')
})



// delete btn
