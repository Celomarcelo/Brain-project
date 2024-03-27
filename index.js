let questions = [
    {
        question: 'The 1998 world football championship was hosted in France, in which Brazil reached the final, winning 3-0',
        answer: "false",
        correct: 'The correct answer is: France won 3-0',
    },
    {
        question: 'The Battle of Waterloo was a military confrontation that took place on 18 June 1815 near Waterloo, in present-day Belgium',
        answer: "true",
        correct: 'The sentence is correct.',
    },
    {
        question: 'Ayrton Senna, Brazilian Formula 1 driver, champion of the category in 1988, 1990 and 1991, died in a tragic accident on May 1, 1994 in Imola, Italy.',
        answer: "true",
        correct: 'The sentence is correct.',
    },
    {
        question: 'U2 is an English rock band formed in 1976. The group is composed of Bono (vocals and guitar), The Edge (guitar, keyboards and backing vocals), Adam Clayton (bass) and Larry Mullen Jr. (drums and percussion )',
        answer: "false",
        correct: 'The correct answer is: U2 is an Irish rock band',
    },
    {
        question: 'In June 1997, boxer Mike Tyson bit the ear of his opponent, Evander Holyfield. For his conduct, Tyson was fined, sentenced to community service and suspended from the sport for 1 year.',
        answer: "true",
        correct: 'The sentence is correct.',
    },
    {
        question: 'The Chernobyl accident happened on April 26, 1986, when reactor 3 at the Chernobyl nuclear power plant exploded and released radioactive material into the atmosphere.',
        answer: "false",
        correct: 'The correct answer is: The number 4 reactor exploded.',
    },
    {
        question: 'Michael Jackson in 1986 released Thriller, the best-selling album in the history of music, considered a masterpiece. With the album, the future king of pop became the main black singer in the world and in the 1980s.',
        answer: "false",
        correct: 'The correct answer is: In 1982, Michael Jackson released Thriller',
    },
    {
        question: 'The film "Avatar" is currently considered the highest-grossing film in the world.',
        answer: "true",
        correct: 'The sentence is correct.',
    },
];
let username;
let currentQuestion;
let pastQuestions = [];
let score = 0;
let userAnswer;
const correctAnswer = document.getElementById('answer-place');
const trueOptions = document.getElementsByClassName("true-option");
const falseOptions = document.getElementsByClassName("false-option");
const divStart = document.getElementById('first-div');
let trueOptionsArray;
let falseOptionsArray;
//function generates random number
function randomNumber() {
    return Math.floor(Math.random() * questions.length);
}
// start game function
function startGame() {
    username = document.getElementById("username").value;
    if (!username) {
        alert('Please, fill in the field with your user name.');
        return;
    }
    currentQuestion ='';
    pastQuestions = [];
    score = 0;
    username = document.getElementById("username").value;
    if (username === '') {
        username = '"Unknown"';
    }
    const reveal = document.querySelector('.hide');
    divStart.classList.add('hide');
    reveal.classList.remove('hide');
    currentQuestion = randomNumber();
    pastQuestions.push(currentQuestion);
    showQuestion();
}
// show question funtion
function showQuestion() {
    document.getElementById('submit').classList.remove('hide');
    document.getElementById('next-question').classList.add('hide');
    correctAnswer.classList.add('hide');
    const questionElement = document.getElementById("display-question");
    correctAnswer.innerHTML = '';
    questionElement.innerHTML = questions[currentQuestion].question;
}
//check which option is selected and delete the other
function userChoice() {
    trueOptionsArray = Array.from(trueOptions);
    falseOptionsArray = Array.from(falseOptions);
    trueOptionsArray.forEach(function (hideFalse) {
        if (hideFalse.checked) {
            userAnswer = 'true';
            falseOptionsArray.forEach(function (falseOption) {
                falseOption.classList.add('hide');
            });
        }
    });
    falseOptionsArray.forEach(function (hideTrue) {
        if (hideTrue.checked) {
            userAnswer = "false";
            trueOptionsArray.forEach(function (trueOption) {
                trueOption.classList.add('hide');
            });
        }
    });
}
// submit and check questions funtion
function check() {
    if (!userAnswer) {
        alert('Please, choose an answer');
        return;
    }
    submitAnswer();
}
function submitAnswer() {
    if (userAnswer) {
        if (userAnswer === questions[currentQuestion].answer) {
            correctAnswer.classList.remove('hide');
            correctAnswer.innerHTML = '<strong>Correct!</strong>';
            correctAnswer.style.color = "green";
            score++;
        } else {
            correctAnswer.classList.remove('hide');
            correctAnswer.style.color = "red";
            correctAnswer.innerHTML = "<strong>Incorrect!</strong>" + "<br>" + questions[currentQuestion].correct;
        }
    }
    if (pastQuestions.length < questions.length) {
        document.getElementById('submit').classList.add('hide');
        document.getElementById('next-question').classList.remove('hide');
        currentQuestion = '';
        do {
            currentQuestion = randomNumber();
        } while (pastQuestions.includes(currentQuestion));
        pastQuestions.push(currentQuestion);

    } else {
        document.getElementById('next-question').classList.add('hide');
        document.getElementById('submit').classList.add('hide');
        document.getElementById('finish').classList.remove('hide');
    }

}
// function checks the user answer
function showOptions() {
    trueOptionsArray.forEach(function (showTrue) {
        showTrue.classList.remove('hide');
        showTrue.checked = false;
    });
    falseOptionsArray.forEach(function (showFalse) {
        showFalse.classList.remove('hide');
        showFalse.checked = false;
    });
    userAnswer = '';
}
//result and restart
function showResult() {
    correctAnswer.classList.add('hide');
    document.getElementById('second-div').classList.add('hide');
    document.getElementById('finish').classList.add('hide');
    document.getElementById('result').classList.remove('hide');
    const showScore = document.getElementById('result');
    showScore.innerHTML = `${username}, you got ${score} of ${questions.length} questions.`;
    document.getElementById('restart').classList.remove('hide');
}
// restart the game 
function restartGame() {
    document.getElementById('result').classList.add('hide');
    document.getElementById('restart').classList.add('hide');
    divStart.classList.remove('hide');
}
document.getElementById('start').addEventListener('click', function() {
    startGame();
    showOptions();
});
document.getElementById('submit').addEventListener('click', check);
document.getElementById('next-question').addEventListener('click', function() {
    showQuestion();
    showOptions();
});
document.getElementById('finish').addEventListener('click', showResult);
document.getElementById('restart-game').addEventListener('click', function() {
    restartGame();
});
document.getElementById('true').addEventListener('click', userChoice);
document.getElementById('false').addEventListener('click', userChoice);