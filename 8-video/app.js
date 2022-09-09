// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

let btn = document.querySelector('.switch-btn')
let video = document.querySelector('.video-container')
let preloader=  document.querySelector('.preloader')
// hiding the preloader when it's complete the load of the page
window.addEventListener('load' ,(e) =>{
    preloader.classList.add('hide-preloader')
})


btn.addEventListener('click' , ()=> {
    // if the btn does'nt have slide class 
    if (!btn.classList.contains('slide'))
    {
        // add to it and then pause the video
        btn.classList.add('slide')
        video.pause()
    }
    else{
        btn.classList.remove('slide')
        video.play()
    }
    
})