let prevBtn = document.querySelector('.prevBtn')
let nextBtn = document.querySelector('.nextBtn')
let slides = document.querySelectorAll('.slide')

slides.forEach((item , index) => {
  item.style.left =   `${index * 100}%`
})
prevBtn.style.display = 'none'
let counter = 0
prevBtn.addEventListener('click', () => {
counter--;0
counterlimit(counter)
slidingFunction(counter)
negativeLimit(counter)
})
nextBtn.addEventListener('click', () => {
counter++
counterlimit(counter)
slidingFunction(counter)

})

function slidingFunction(counter) {
  slides.forEach(slide => {
    slide.style.transform =`translateX(-${counter * 100}%)`
  })
}

function counterlimit(counter){
  if (counter>0)
  {
    prevBtn.style.display = 'block'
  }
  else
  {
    prevBtn.style.display = 'none'
  }
  if (counter === slides.length -1 )
  {
    nextBtn.style.display = 'none'
  }
  else 
  {
    nextBtn.style.display= 'block'

  }

}