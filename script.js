// script.js - Last updated: 2024-12-22 20:33:10

// Complete unified file with all MCQs and functionality
const questions = [
    {
        question: "In Linux, all programs are executed as...",
        options: ["process", "data", "information", "all of these"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "Each process when started has a unique number associated with it known as...",
        options: ["memory id", "process id (PID)", "hard disk id", "all of these"],
        correctAnswer: 1,
        difficulty: "easy"
    },
    {
        question: "Which command is used to see the processes associated with the current shell without any parameters?",
        options: ["ps", "ls", "id", "sp"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Which command is used to view the process of all the users?",
        options: ["ps -ef", "ps -If", "ps -er", "ps -er"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Which column name shows name or number of the user who owns the process?",
        options: ["UID", "PID", "PPID", "STIME"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Which column name identifies the parent process id, the process that created the current process?",
        options: ["UID", "PID", "PPID", "STIME"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Which column name identifies the terminal that controls the current process?",
        options: ["TTY", "TIME", "CMD", "STIME"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Which column name identifies command used to invoke the process?",
        options: ["TTY", "TIME", "CMD", "STIME"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "To remove the process from memory we use the...command.",
        options: ["kill", "remove", "delete", "all of these"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "In Linux, arguments from $1 to $9 are known as...",
        options: ["command line command", "command line variable", "command line parameter", "command line arguments"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Which construct in shell scripts allows to perform decision making?",
        options: ["loop", "if-then-fi", "while", "for"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "What indicates whether the command was successfully executed or not?",
        options: ["Exit status", "Entry status", "Both (a) and (b)", "None"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The exit status of command is...if it has been executed successfully.",
        options: ["1", "0", "3", "4"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "In if statement, which bracket is used for opening and closing statement?",
        options: ["* *", "[ ]", "( )", "{}"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which decision making instructions does Linux offers?",
        options: ["if-then-fi", "if-then-else-fi", "if-then-elif-else-fi & case-esac", "All of these"],
        correctAnswer: 3,
        difficulty: "hard"
    },
    {
        question: "Which command will be used to compare two files passed to it as argument?",
        options: ["com", "cmp", "cam", "comp"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Linux provides which command that can be used in place of square brackets?",
        options: ["if", "test", "then", "else"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which operator can be used for numerical test for greater than?",
        options: ["-gt", "-lt", "-ge", "-le"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Which operator can be used for numerical test 'less than or equal to'?",
        options: ["-la", "-lq", "-el", "-le"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Which operator can be used for numerical test 'equal to'?",
        options: ["-e", "-eq", "-ea", "-et"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "How many relational operators are used to compare two numeric operands?",
        options: ["4", "6", "3", "5"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "To combine conditions, we make use of which operators?",
        options: ["relational", "file", "logical", "all of these"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Shell script allows usage of how many logical operators while testing a condition?",
        options: ["two", "three", "four", "five"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which logical operator allows in shell script for testing a condition?",
        options: ["-a (AND)", "-o (OR)", "! (NOT)", "All of these"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Which operator allows two or more conditions to be combined in a test?",
        options: ["-a", "-o", "Both (a) and (b)", "none of these"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        question: "Which logical operator is used to convert true result to false and vice versa?",
        options: ["AND", "NOT", "OR", "None of these"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which operator is used to check the status of a file?",
        options: ["relational", "file", "logical", "all of these"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which condition returns True if a file with the specified name exists and is not a directory?",
        options: ["-s name", "-f name", "-d name", "-r name"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which condition returns True if a file with the specified name exists and the user has write permission on it?",
        options: ["-w name", "-x name", "-d name", "-r name"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The alternate option for checking if-then-elif-then-else-fi conditions is to use which statements?",
        options: ["for", "case", "while", "None"],
        correctAnswer: 1,
        difficulty: "medium"
    },
    {
        question: "Which keyword is used to specify the end of case statement?",
        options: ["esac", "easc", "case", "None"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "Cleaning of disk space is a normal operation that the...needs to perform.",
        options: ["user", "group", "administrator", "All"],
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        question: "Which of the following are used to perform repetitive action?",
        options: ["for statements", "while statements", "until statements", "All of these"],
        correctAnswer: 3,
        difficulty: "medium"
    },
    {
        question: "Which of the following allows us to specify a list of values in its statement?",
        options: ["for loop", "while loop", "until loop", "do while loop"],
        correctAnswer: 0,
        difficulty: "medium"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 1800; // 30 minutes
let timer;
let answeredQuestions = new Array(questions.length).fill(false);

// Initialize Quiz
function initializeQuiz() {
    loadQuestion();
    startTimer();
    createQuestionGrid();
    updateProgress();
    
    // Mobile menu toggle
    document.getElementById('menuToggle')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.toggle('active');
    });

    // Remove welcome animation after delay
    setTimeout(() => {
        const welcomeAnimation = document.querySelector('.welcome-animation');
        if (welcomeAnimation) {
            welcomeAnimation.style.display = 'none';
        }
    }, 4000);
}

// Load Question
function loadQuestion() {
    const question = questions[currentQuestion];
    const questionText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');
    const currentQuestionNum = document.getElementById('currentQuestionNum');
    const difficultyBadge = document.getElementById('difficultyBadge');

    if (questionText && optionsGrid && currentQuestionNum && difficultyBadge) {
        questionText.textContent = question.question;
        currentQuestionNum.textContent = currentQuestion + 1;
        difficultyBadge.textContent = question.difficulty;

        optionsGrid.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.onclick = () => checkAnswer(index);
            button.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            optionsGrid.appendChild(button);
        });
    }

    updateNavigationButtons();
}

// Check Answer
function checkAnswer(selectedIndex) {
    if (answeredQuestions[currentQuestion]) return;

    const question = questions[currentQuestion];
    const options = document.getElementsByClassName('option');

    if (selectedIndex === question.correctAnswer) {
        options[selectedIndex].classList.add('correct');
        score++;
        showFeedback(true);
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.correctAnswer].classList.add('correct');
        showFeedback(false);
    }

    answeredQuestions[currentQuestion] = true;
    updateScore();
    updateProgress();
    updateQuestionGrid();
    
    // Check if all questions are answered
    checkQuizCompletion();
}

// Check Quiz Completion
function checkQuizCompletion() {
    if (answeredQuestions.filter(Boolean).length === questions.length) {
        showResults();
    }
}

// Navigation Functions
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgress();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateProgress();
    }
}

// Timer Functions
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeLeftElement = document.getElementById('timeLeft');
    if (timeLeftElement) {
        timeLeftElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// UI Update Functions
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestion + 1}/${questions.length}`;
    }
}

function updateScore() {
    const scoreElements = document.querySelectorAll('#score');
    scoreElements.forEach(element => {
        element.textContent = score;
    });
}

function showFeedback(isCorrect, message = null) {
    const feedbackModal = document.createElement('div');
    feedbackModal.className = `feedback-modal ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackModal.textContent = message || (isCorrect ? 'Correct!' : 'Incorrect!');
    
    document.body.appendChild(feedbackModal);
    
    setTimeout(() => {
        feedbackModal.remove();
    }, 2000);
}

function createQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    if (grid) {
        grid.innerHTML = '';
        questions.forEach((_, index) => {
            const button = document.createElement('button');
            button.className = 'question-dot';
            button.onclick = () => jumpToQuestion(index);
            grid.appendChild(button);
        });
        updateQuestionGrid();
    }
}

function updateQuestionGrid() {
    const dots = document.getElementsByClassName('question-dot');
    Array.from(dots).forEach((dot, index) => {
        dot.className = 'question-dot';
        if (index === currentQuestion) dot.classList.add('current');
        if (answeredQuestions[index]) dot.classList.add('answered');
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion();
    updateProgress();
    updateQuestionGrid();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.disabled = currentQuestion === questions.length - 1;
    }
}

function showResults() {
    clearInterval(timer);
    
    const resultsModal = document.getElementById('resultsModal');
    const finalScore = document.getElementById('finalScore');
    const accuracy = document.getElementById('accuracy');
    const timeTaken = document.getElementById('timeTaken');
    
    if (resultsModal && finalScore && accuracy && timeTaken) {
        const accuracyValue = ((score / questions.length) * 100).toFixed(1);
        const timeSpent = 1800 - timeLeft;
        
        finalScore.textContent = `${score}/${questions.length}`;
        accuracy.textContent = `${accuracyValue}%`;
        timeTaken.textContent = 
            `${Math.floor(timeSpent / 60)}:${(timeSpent % 60).toString().padStart(2, '0')}`;
        
        resultsModal.classList.add('show');
        
        // Add restart button if not already present
        const restartBtn = document.querySelector('.restart-btn');
        if (!restartBtn) {
            const btn = document.createElement('button');
            btn.className = 'restart-btn';
            btn.innerHTML = '<i class="fas fa-redo"></i> Restart Quiz';
            btn.onclick = restartQuiz;
            resultsModal.appendChild(btn);
        }
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 1800;
    answeredQuestions = new Array(questions.length).fill(false);
    
    const resultsModal = document.getElementById('resultsModal');
    if (resultsModal) {
        resultsModal.classList.remove('show');
    }
    
    // Reset all states
    updateQuestionGrid();
    updateProgress();
    updateScore();
    
    // Reset timer
    clearInterval(timer);
    startTimer();
    
    // Load first question
    loadQuestion();
    
    // Show welcome message for restart
    showFeedback(true, 'Quiz Restarted! Good Luck!');
}

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextQuestion();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        previousQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        // Convert key press 1-4 to 0-3 index
        checkAnswer(parseInt(e.key) - 1);
    }
});

// Initialize when page loads
window.onload = initializeQuiz;
