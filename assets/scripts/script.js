//constants
const startBtn = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-box')


function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')
}

function nextQuestion() {

}

function selectAnswer() {

}

/* questions */
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
