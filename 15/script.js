const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Kolkata", "Delhi", "Banglore"],
        answer: "Delhi"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Main lead actor of the series'Money Heist'?",
        options: ["Berlin", "The Professor", "Raquel Murillo", "Luis Tamayo"],
        answer: "The Professor"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = "none";
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
    resultElement.innerHTML = `Quiz Over! Your Score: <strong>${score}/${questions.length}</strong>`;
}

loadQuestion();