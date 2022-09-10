let articles = [
    {
     category: 'history',
     Text : 'HISTORY lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptate est. Quod corporis maxime facilis asperiores nesciunt veritatis odit quas consectetur quis suscipit, veniam odio, necessitatibus aliquid numquam iusto.'
    },
    {
    category: 'Vision',
    Text : 'VISON lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptate est. VISON lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptate est. VISON lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptate est. Quod corporis maxime facilis asperiores nesciunt veritatis odit quas consectetur quis suscipit, veniam odio, necessitatibus aliquid numquam iusto.'
    },
    {
    category: 'Goals',
    Text : 'GOALS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptate est. Quod corporis maxime facilis asperiores nesciunt veritatis odit '
    }
]

let paragraph= document.querySelector('.pragraph')

window.addEventListener('DOMContentLoaded' , () => {
    paragraph.textContent = articles[0].Text
})

let btns = document.querySelectorAll('button')
btns.forEach(btn=> {
    btn.addEventListener('click', (e) => {
        let clickedbtn = e.currentTarget.dataset.id
        articles.forEach(item =>{
            if(item.category === clickedbtn )
            {
                paragraph.textContent = item.Text
            } 
        })
    })
})
