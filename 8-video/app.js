// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

let btn = document.querySelector('.switch-btn')
let switchbtn = document.querySelector('.switch')
let video = document.querySelector('.video-container')
// btns.classList.add('slide')

btn.addEventListener('click' , (e)=> {
    switchbtn.classList.toggle('slide')
    if (switchbtn.classList.contains('slide'))
    {
        video.pause()
    }
    else{
        video.play()
    }
    
})