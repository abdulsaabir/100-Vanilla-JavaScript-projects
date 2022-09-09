// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let date = document.getElementById("date")
date.textContent = new Date().getDay() + '-' + new Date().getMonth() + '-' + new Date().getFullYear()

// ********** close links ************
let linksContainer = document.querySelector(".links-container") 
let navToggle = document.querySelector('.nav-toggle')
let links = document.querySelector('.links')

navToggle.addEventListener('click' , () => {
    // linksContainer.classList.toggle('show-links')
    let allLink = links.querySelectorAll('li').length
    if (linksContainer.classList.contains('show-links'))
    {
        linksContainer.classList.remove('show-links')
        linksContainer.style.height = '0'
    }
    else
    {
        linksContainer.classList.add('show-links')
        linksContainer.style.height = allLink
    }

    
    // let showlinks = document.querySelector('.show-links')
    // console.log(showlinks.style.height)
})
// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
