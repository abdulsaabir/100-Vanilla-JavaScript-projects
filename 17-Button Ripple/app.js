let btn = document.querySelector('.btn')
btn.addEventListener('mouseover' , (e) => {
    
   let left = e.pageX - btn.offsetLeft
   let top = e.pageY - btn.offsetTop
 
   btn.style.setProperty('--xPos', top + "px");
   btn.style.setProperty('--yPos', left + "px");

   
})