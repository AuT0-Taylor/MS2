const startBtn = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-box')

startBtn.addEventListener('click', startGame)

function startGame() {
    console.log("start")
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')

}

function nextQuestion() {

}

function selectAnswer() {

}

let questions = [
    {
        question: "?",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: ,
    },
    {
        question: "?",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: ,
    },
    {
        question: "?",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: ,
    },
];

const Correct_Point = 5;
const Max_Question = 5;