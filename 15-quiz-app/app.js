let question = []
  

// window.addEventListener('DOMContentLoaded' , ()=> {
//     if( localStorage.getItem('highScore') === null)
//     {
//     showscores.disabled = true
//     showscores.style.boxShadow= 'none'
//     }
// })

let cover = document.querySelector('.cover')
let btns = document.querySelectorAll('.btns')

btns.forEach(btnbtn => {
    btnbtn.addEventListener('click' , (e)=> {
        cover.classList.add('display')
        startGame()
        AvailibleQuestion= [...question]
    })
})


let QuestionTitle = document.querySelector('.question')
let AvailibleQuestion = {}
let currentQuestion 
let counter = 1
let Score = 0
let increaseProgress = 100/question.length
let progressCounter = 0
let progress =document.querySelector('.progressgo')
let scoreCounter = document.querySelector('.score')
let home = document.querySelector('.Home')
let QuestionCounter = document.querySelector('.questionNumber')
let quiz = document.querySelector('.quiz')
let choices = Array.from( document.getElementsByClassName('Choice-text'))
let scoreReslt = document.querySelector('.recentScore')
let containerResult = document.querySelector('.containerResult')
let questionNumber
startGame = () => {
    AvailibleQuestion= [...question]
    questionNumber = -1
    getQuestion()
    Score= 0
    quiz.classList.remove('display')
    QuestionCounter.textContent= counter
    scoreCounter.innerText = Score
    progress.style.width= `${progressCounter}%`
    counter= 1
    progressCounter= 0
   
}

getQuestion = () => {
    if(questionNumber == AvailibleQuestion.length-1)
    {
        containerResult.classList.remove('display')
        localStorage.setItem('mostRecentScore' , Score);
        quiz.classList.add('display')
        scoreReslt.innerText = Score
    }
    else
    {
    QuestionCounter.innerText= counter
    scoreCounter.innerText= Score
    progress.style.width= `${progressCounter}%`
    // let questionNumber = Math.floor(Math.random() * AvailibleQuestion.length)
    questionNumber += 1
    currentQuestion= AvailibleQuestion[questionNumber]
    QuestionTitle.innerText = currentQuestion.question
    choices.forEach(choiceNow => {
        let dataID = choiceNow.dataset['id']
        choiceNow.innerText = currentQuestion['choice' + dataID]
    
    })
    //  AvailibleQuestion.splice(questionNumber , 1)
    
    }
}


choices.forEach(item => {
item.addEventListener('click', (e) => {
    let choosedAnswer = e.target
    let parent = e.currentTarget.parentElement
    let dataID = choosedAnswer.dataset['id']
    counter++
    progressCounter += increaseProgress
    if(dataID == currentQuestion.answer)
   
    {
        parent.classList.add('correct')
        Score += 10
        
        setTimeout(() => {
            parent.classList.remove('correct')
        }, 1000);
    }
    else{
        parent.classList.add('incorrect')
        
        setTimeout(() => {
            parent.classList.remove('incorrect')
        }, 1000);
    }
    setTimeout(() => {
        getQuestion()
    }, 1000);
 
})
})


let inputValue = document.getElementById('inputvalue')
let btnsave = document.querySelector('.save')
let btnplayAgain = document.querySelector('.Play')

inputValue.addEventListener('keyup' , (e)=>{
    btnsave.disabled = !inputValue.value
} )

btnplayAgain.addEventListener('click' ,() => {
    cover.classList.remove('display')
    containerResult.classList.add('display')
})
 
// create local storage
Score = 100
let highScores = JSON.parse(localStorage.getItem('highScore')) || []
btnsave.addEventListener('click' , (e) => {
    
    e.preventDefault()
    let NewScore = {
        Name: inputValue.value,
        Score:  Score
    }
    
    highScores.push(NewScore)
    highScores.sort((a,b) => b.Score - a.Score)
    highScores.splice(5)
    localStorage.setItem('highScore' , JSON.stringify(highScores))
    inputValue.disabled = true
    btnsave.disabled = true
    inputValue.value = ''

    let savedAlert= document.querySelector('.savedAlert')
    savedAlert.classList.remove('display') 
    setTimeout(() => {
        savedAlert.classList.add('display') 
    }, 1000);
  

})


// show high scores
let scoresList = document.querySelector('.scoresList')
let showscores = document.getElementById('high-score')
showscores.addEventListener('click' , () => {
    cover.classList.add('display')
    scoresContainer.classList.remove('display')
})
if( localStorage.getItem('highScore') === null)
{
showscores.disabled = true
showscores.style.boxShadow= 'none'
}else
{
let totalScores = JSON.parse(localStorage.getItem('highScore'))
totalScores.forEach(item => {
    scoresList.innerHTML+= ` <li class="NaME">${item.Name} - <span class="hisScore">${item.Score}</span></li>`
})
}

let Backbtn = document.querySelector('.Backbtn')
let Reset = document.querySelector('.reset')
let scoresContainer = document.querySelector('.scoresContainer')

Backbtn.addEventListener('click' , () => {
    scoresContainer.classList.add('display')
    cover.classList.remove('display')
}) 

Reset.addEventListener('click' , () => {
    localStorage.removeItem('highScore')
    scoresList.innerHTML= ''
})





