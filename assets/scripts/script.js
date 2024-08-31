//constants
const startBtn = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-box')


const Correct_Point = 5;
const Max_Question = 5;


/* questions */
let questions = [
    {
        question: "whats effective against water?",
        choice1: "grass",
        choice2: "fire",
        choice3: "steel",
        choice4: "bug",
        answer: 1,
    },
    {
        question: "?",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: 1,
    },
    {
        question: "?",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: 1,
    },
];

/* starts game function
- hide start btn
- intiates quiz with array question */
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    nextQuestion();
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')
}

function nextQuestion() {

}

function selectAnswer() {

}
