let btns = document.querySelectorAll('.tab-btn')
let about = document.querySelector('.about')
let articles = document.querySelectorAll('.content')

// add event listener to the parrent of both articles and btns 
about.addEventListener('click' , (e) => {
    //get the dateset id of the clicked item 
    // store the date set id of that btn in btn clicked
   let datasetOfbtnClicked =  e.target.dataset.id
   if(datasetOfbtnClicked)
   {
    btns.forEach(btn => {
        btn.classList.remove('active')
        e.target.classList.add('active')
    })
     
       
    articles.forEach(article => {
    // notice every article has an id 
    // if the article id matches the datasetOfbtnClicked
    if(article.id === datasetOfbtnClicked)
    {
    
        article.classList.add('active')
    }
    else{
        article.classList.remove('active')
    }
        
    })
   }
})

   
