// DEPENDENCIES
var questionsEl = document.querySelector("#questions");
var questionEl = document.querySelector("#question");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var timeEl = document.querySelector("#time");
var buttonsEl = document.querySelector("#buttons")
var initialsEl = document.querySelector("#initials");
var submit = document.querySelector("#submit-button");

// DATA
var questionIndex = 0;
var score = 0;
var secondsLeft = 75;
var questions = [
    {
        question: 'Commonly used data types do NOT include',
        answers: [
            '1. Strings',
            '2. Booleans',
            '3. Alerts',
            '4. Numbers',
        ],
        correctAnswer: '3. Alerts'
    },
    {
        question: 'The condition in an if / else statement is enclose with ________.',
        answers: [
            '1. Quotes',
            '2. Curly Brackets',
            '3. Parenthesis',
            '4. Square Brackets',
        ],
        correctAnswer: '2. Curly Brackets'
    },
    {
        question: 'Arrays in JavaScript can be used to store ________.',
        answers: [
            '1. Numbers and strings',
            '2. Other arrays',
            '3. Booleans',
            '4. All of the above',
        ],
        correctAnswer: '4. All of the above'
    },
    {
        question: 'String values must be enclose within ________ when being assigned to variables.',
        answers: [
            '1. Commas',
            '2. Only brackets',
            '3. Quotes',
            '4. Parenthesis',
        ],
        correctAnswer: '3. Quotes'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            '1. JavaScript',
            '2. Terminal/Bash',
            '3. For loops',
            '4. console.log',
        ],
        correctAnswer: '4. console.log'
    },
]

// FUNCTIONS
// Start button function (added if statement to remove error)
if (start) {
start.addEventListener("click", startQuiz);
}

function startQuiz(){
    start.setAttribute("style", "display: none")
    questionsEl.setAttribute("style", "display: block")

    setTime();
    showQuestion();
}
// Timer function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            questionsEl.setAttribute("style", "display: none")
            window.location.replace("highScore.html");
        }
    }, 1000);
}
// Quiz function
function showQuestion() {

    // Display Question
    var currentQuestion = questions[questionIndex];
    questionEl.textContent = currentQuestion.question;

    // Create Buttons
    for (var i = 0; i < currentQuestion.answers.length; i++) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = currentQuestion.answers[i];
    buttonsEl.appendChild(buttonEl)
    buttonEl.setAttribute("style", "display: block")
    buttonEl.addEventListener("click", checkAnswer)
    }
}

// Check Answer
function checkAnswer() {
    // Check if there are questions left
    if (questions[questionIndex] === questions[4]) {
        endQuiz();
    // Check if question is correct
    } else if (this.textContent === questions[questionIndex].correctAnswer) {
        buttonsEl.innerHTML = "";
        questionIndex++;
        showQuestion();
    } else {
        alert("Wrong Answer")
        secondsLeft -= 15;
    }
}

// End Quiz
function endQuiz() {
    questionsEl.setAttribute("style", "display: none");
    end.setAttribute("style", "display: block")

    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = secondsLeft;
}

// High Scores
function highScore(event) {
    event.preventDefault();
    var initials = initialsEl.value.toUpperCase();
    var newScore = {
        score: secondsLeft,
        initials: initials
    };
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

  highScores.push(newScore);
  window.localStorage.setItem("highScores", JSON.stringify(highScores));

  window.location.replace("highScore.html");
}

if (submit) {
submit.onclick = highScore;
}