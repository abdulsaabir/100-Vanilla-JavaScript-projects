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
let quiz = document.querySelector('.quiz')
let btns = document.querySelectorAll('.btns')

btns.forEach(btn => {
    btn.addEventListener('click' , (e)=> {
        cover.classList.add('display')
        quiz.classList.remove('display')
        availibleQuestion = [...question]
    })
})

let questiontext = document.querySelector('.question')
let choices =  Array.from(document.querySelectorAll('.Choice-text'))


let questioncounter= 0;
let availibleQuestion= []
let counter =0
let allowedAnswer = false


startQuiz = () =>{
    questioncounter= 0
    availibleQuestion = [...question]
    allowedAnswer= false
    getQuestion()
}

getQuestion = () => {
    if(availibleQuestion.length === 0)
    {
        cover.classList.remove('display')
        quiz.classList.add('display')
    }
    else {
    let QuestionNumber = Math.floor(Math.random() * availibleQuestion.length)
    let CurrentQuestion = availibleQuestion[QuestionNumber]
    questiontext.innerText = CurrentQuestion.question
    choices.forEach(choice => {
        let dateId = choice.dataset['id']
        choice.innerText = CurrentQuestion["choice" + dateId]
    })
    availibleQuestion.splice(QuestionNumber , 1)
    allowedAnswer = true
}
}
startQuiz()

choices.forEach(choice => {
    choice.addEventListener('click' , (e) => {
        getQuestion()
    })
    
})