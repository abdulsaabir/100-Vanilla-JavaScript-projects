let question = [
    {
        question: 'The Best club in the history?',
        choice1: 'Real Madrid',
        choice2: 'Chelsea',
        choice3: 'Bayern Munich',
        choice4: 'Manchester-United',
        answer: 1
    },
    {
        question: 'The Best club in the world Right-now?',
        choice1: 'Real Madrid',
        choice2: 'Manchester City',
        choice3: 'Atlanta',
        choice4: 'Bayern Munich',
        answer: 1
    },
    {
        question: 'Champions of Eurobe 2021?',
        choice1: 'Bayern Munich ',
        choice2: 'liverpool',
        choice3: 'Chelsea ',
        choice4: 'Real Madrid',
        answer: 3
    },
    {
        question: 'Club of the decade?',
        choice1: 'Chelsea',
        choice2: 'Real Madrid',
        choice3: 'Bayern Munich',
        choice4: 'Athletico Madrid',
        answer:  2
    },
    {
        question: 'The GOAT of Football',
        choice1: 'Messi',
        choice2: 'Pele',
        choice3: 'Maradona',
        choice4: 'Cristaino Ronaldo',
        answer:  4
    }
]
let cover = document.querySelector('.cover')
let btns = document.querySelectorAll('.btns')

btns.forEach(btn => {
    btn.addEventListener('click' , (e)=> {
        cover.classList.add('display')
      
    })
})


let QuestionTitle = document.querySelector('.question')
let AvailibleQuestion = {}
let choices = Array.from( document.getElementsByClassName('Choice-text'))
startGame = () => {
    AvailibleQuestion= [...question]
    getQuestion()
}

getQuestion = () => {
    let questionNumber = Math.floor(Math.random() * AvailibleQuestion.length)
    let currentQuestion = AvailibleQuestion[questionNumber]
    QuestionTitle.innerText = currentQuestion.question
    choices.forEach(choiceNow => {
        choiceNow.addEventListener('click', (e) => {
            let choosedAnswer = e.target
            let parent = e.currentTarget.parentElement
            let dataID = choosedAnswer.dataset['id']
            console.log(parent)

            choiceNow.innerText = currentQuestion['choice' + questionNumber]
        })
    })

}

startGame()

