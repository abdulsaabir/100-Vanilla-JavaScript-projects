let input = document.getElementById('grocery')
let sumbitbtn = document.querySelector('.submit-btn')
let clearbtn = document.querySelector('.clear-btn')
let container = document.querySelector('.grocery-container')
let groceryList = document.querySelector('.grocery-list')
let alerttType = document.querySelector('.alert')
let id= 0;
let idsearch;
// add event listener in the submit form
sumbitbtn.addEventListener('click' , (e) => {
    e.preventDefault()
    if (sumbitbtn.textContent=='submit')
    {
    //  take the user input
    let userinputvalue =input.value


    // check if the user input is empty
    if(!userinputvalue)
    {
      alertuser('input something please' , 'danger')
        return 1;
    }
    id= new Date().getTime().toString() 
    let groceryListContainer =   `<article class="grocery-item">
    <p class="title" data-id= "${id}">${userinputvalue}</p>
    <div class="container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </article>`
  container.classList.add('show-container')
  groceryList.innerHTML += groceryListContainer
  input.value= ''
  alertuser('you have seccesufully registred' ,'success')


    

//   delete one item btn and edit btn
let editbtn = document.querySelectorAll('.edit-btn')
let trashbtn = document.querySelectorAll('.delete-btn')

// delete btn
trashbtn.forEach(trash => {
    trash.addEventListener('click' ,(e)=> {
    let deletedarticle = e.currentTarget.parentElement.parentElement
    deletedarticle.remove()
    alertuser('you have seccesufully deleted' ,'danger')
    if(groceryList.childNodes.length === 0)
    {
        container.classList.remove('show-container')
    }
    })

})

// edit btn
editbtn.forEach(edit => {
    edit.addEventListener('click' , (e) => {
    let editparagraph = e.currentTarget.parentElement.parentElement
    let userinputTitle = editparagraph.querySelector('.title')
    let newuser = userinputTitle.textContent
  
   idsearch = userinputTitle.getAttribute('data-id')
    console.log(idsearch)
    input.value= newuser
    sumbitbtn.textContent = 'Edit'
    })
})
    }
    if(sumbitbtn.textContent == "Edit")
    {
      let paragraph = document.querySelectorAll('p')
      paragraph.forEach(item => {
        if(item.dataset.id === idsearch)
        {
          item.textContent= input.value
        }
      })
      // let user = document.querySelector("[data-id='']");
      sumbitbtn.textContent = 'submit'
      input.value=''
    }
})




// clear all btn
clearbtn.addEventListener('click' , () => {
    container.classList.remove('show-container')
    groceryList.innerHTML= ''
    alertuser('you are cleared all your groccery' ,'success')
})

// alert fuction
function alertuser(message , action) 
{
    alerttType.textContent= message
    alerttType.classList.add= action

    setTimeout(() => {
    alerttType.textContent= ""
    alerttType.classList.remove= action
    }, 1000);
}