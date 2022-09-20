let question = [
    { 
        question: ' Whose death sparked World War I?',
        choice1: 'Kaiser Wilhelm',
        choice2: ' Archbishop Ussher',
        choice3: 'Queen Victoria',
        choice4: 'Archduke Franz Ferdinand',
        answer: 4
    },
    {
        question: 'The Best club in the History of Football?',
        choice1: 'Real Madrid',
        choice2: 'Bayern Munich',
        choice3: 'Barcelone',
        choice4: 'Ac Milan',
        answer: 1
    },
    {
        question: 'Which of these nations was neutral in World War I?',
        choice1: 'Germany ',
        choice2: ' Norway',
        choice3: 'Italy ',
        choice4: 'England',
        answer: 2
    },
    {
        question: ' Which weapon was first used at the Battle of the Somme in World War I?',
        choice1: 'Submarine',
        choice2: 'Tank',
        choice3: 'Jet fighter',
        choice4: 'Chariot',
        answer:  2
    },
    {
        question: 'The GOAT of Football',
        choice1: 'Messi',
        choice2: 'Pele',
        choice3: 'Maradona',
        choice4: 'Cristaino Ronaldo',
        answer:  4
    },
    {
        question: 'World War I ended in:',
        choice1: '1925',
        choice2: '1918',
        choice3: '1920',
        choice4: ' 1915',
        answer:  2
    },
    {
        question: 'Which of these battles did not involve Roman soldiers?',
        choice1: 'Arretium',
        choice2: 'Chalons',
        choice3: 'Cannae',
        choice4: 'Thermopylae ',
        answer:  4
    },
    {
        question: 'Where were the Aegean Bronze Age civilizations located?',
        choice1: 'Algeria',
        choice2: 'India',
        choice3: 'Greece',
        choice4: 'Somalia',
        answer:  3
    },
    {
        question: 'Who was the first U.S. president to appear on television?',
        choice1: 'Richard Nixon',
        choice2: 'Ronald Reagan',
        choice3: 'Abraham Lincoln',
        choice4: 'Franklin Delano Roosevelt',
        answer:  4
    },
    {
        question: 'In which city would you find the Statue of Liberty?',
        choice1: 'San Francisco',
        choice2: 'New York City',
        choice3: 'Deyniile',
        choice4: 'Philadelphia',
        answer:  2
    }
]

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
let showscores = document.getElementById('high-score')
showscores.addEventListener('click' , () => {
    cover.classList.add('display')
    scoresContainer.classList.remove('display')
})
let scoresList = document.querySelector('.scoresList')
let totalScores = JSON.parse(localStorage.getItem('highScore'))
totalScores.forEach(item => {
    scoresList.innerHTML+= ` <li class="NaME">${item.Name} - <span class="hisScore">${item.Score}</span></li>`
})


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






