// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// get the date in the footer automaticly without writin in the html
let date = document.getElementById("date")
date.textContent = new Date().getDay() + '-' + new Date().getMonth() + '-' + new Date().getFullYear()

// ********** close links ************
let linksContainer = document.querySelector(".links-container") 
let navToggle = document.querySelector('.nav-toggle')
let links = document.querySelector('.links')

navToggle.addEventListener('click' , () => {
    // to get the links heigth dynamically you can use two approches 
    // approach 1 : 
   
    // get the heigth of the container 
    let containerHeight = linksContainer.getBoundingClientRect().height;
    // get the heigth of all links 
    let linksheight = links.getBoundingClientRect().height

    if (containerHeight === 0)
    {
        // if the container heigth is zero the give it the height of the links and then all links will apear
        linksContainer.style.height = `${linksheight}px`
    }
    // if it's not zero remove the all height and make it zero to diseaper all the linkd
    else {
        
        linksContainer.style.height = '0px'
    }

    // approach 2: 
    // get how many links in there by selecting all 'li' in the 'ul'
    // let allLink = links.querySelectorAll('li').length

    // if (linksContainer.classList.contains('show-links'))
    // {
        // if the container has the show links class then remove it and hide all the links
    //     linksContainer.classList.remove('show-links')
    //     linksContainer.style.height = '0px'
    // }
    // else
    // {
        // if the container does'nt have show link class then give a height based on (50px*) heigth for every link times all the all links in there
    //     linksContainer.classList.add('show-links')
    //     linksContainer.style.height = `${allLink*50}px`
    // }

})
// ********** fixed navbar ************

let fixednavbar = document.getElementById('nav')
let fixedbtn  = document.querySelector('.top-link')
window.addEventListener('scroll' , () =>{


    if ( window.pageYOffset >110 )
    {
        fixednavbar.classList.add('fixed-nav')
    }
    else {
        fixednavbar.classList.remove('fixed-nav')
    }
    if (window.pageYOffset > 666 )
    {
        fixedbtn.classList.add('show-link')
    } 
    else{
        fixedbtn.classList.remove('show-link')
    }
    // console.log(window.pageYOffset)

})

// ********** smooth scroll ************

let linksclicked = document.querySelectorAll('.scroll-link')
linksclicked.forEach(link =>{
    link.addEventListener('click', (e) =>
    {
    
    let clickedlink = document.querySelectorAll('.scroll-link')
    clickedlink.forEach(link =>{
    link.addEventListener('click' , (e) => {
        e.preventDefault()
    let id = e.currentTarget.getAttribute('href').slice(1)
    let element = document.getElementById(id)

    let navbarheigth = fixednavbar.getBoundingClientRect().height
    let linksContainerHeight  = linksContainer.getBoundingClientRect().height

    let chekingfixednavbar = fixednavbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navbarheigth

    if(!chekingfixednavbar) 
    {
        position =  position - navbarheigth
    }
    if (navbarheigth > 82) 
    {
        position = position + linksContainerHeight
    }
    
    window.scrollTo({
        top: position,
        left: 0,
    })
    })
    linksContainer.style.height = '0'
        })
})
})
