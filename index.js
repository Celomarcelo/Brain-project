var questions = [
    {
        question : 'The 1998 world football championship was hosted in France, in which Brazil reached the final, winning 3-0' ,
        answer : "false" ,
        correct : 'The correct answer is: France won 3-0',
    },
     {
        question : 'The Battle of Waterloo was a military confrontation that took place on 18 June 1815 near Waterloo, in present-day Belgium' ,
        answer :  "true" ,
        correct : 'The sentence is correct.',
    },
     {
        question : 'Ayrton Senna, Brazilian Formula 1 driver, champion of the category in 1988, 1990 and 1991, died in a tragic accident on May 1, 1994 in Imola, Italy.' ,
        answer : "true" ,
        correct : 'The sentence is correct.',
    },
     {
        question : 'U2 is an English rock band formed in 1976. The group is composed of Bono (vocals and guitar), The Edge (guitar, keyboards and backing vocals), Adam Clayton (bass) and Larry Mullen Jr. (drums and percussion )' ,
        answer : "false" ,
        correct : 'The correct answer is: U2 is an Irish rock band' ,
    },
     {
        question : 'In June 1997, boxer Mike Tyson bit the ear of his opponent, Evander Holyfield. For his conduct, Tyson was fined, sentenced to community service and suspended from the sport for 1 year.' ,
        answer : "true" ,
        correct : 'The sentence is correct.',
    },
     {
        question : 'The Chernobyl accident happened on April 26, 1986, when reactor 3 at the Chernobyl nuclear power plant exploded and released radioactive material into the atmosphere.' ,
        answer :  "false" ,
        correct : 'The correct answer is: The number 4 reactor exploded.',
    },
     {
        question : 'Michael Jackson in 1986 released Thriller, the best-selling album in the history of music, considered a masterpiece. With the album, the future king of pop became the main black singer in the world and in the 1980s.' ,
        answer : "false",
        correct : 'The correct answer is: In 1982, Michael Jackson released Thriller',
    },
     {
        question : 'The film "Avatar" is currently considered the highest-grossing film in the world.' ,
        answer : "true" ,
        correct : 'The sentence is correct.',
    },
];
var username;
var currentQuestion = 0;
var score = 0;
var correctAnswer = document.getElementById('answer-place');
function startGame() {
    document.getElementById("result").classList.add('hide');
    document.getElementById('restart').classList.add('hide');
    username = document.getElementById("username").value;
    if (username === ''){
        username = '"Unknown"'
    }
    let reveal = document.querySelector('.hide');
    let divStart = document.getElementById('first-div');
    divStart.classList.add('hide');
    reveal.classList.remove('hide');
    showQuestion(); 
}
function showQuestion() {
    var questionElement = document.getElementById("display-question");
    questionElement.innerHTML = questions[currentQuestion].question;
}
function submitAnswer() {
    var userAnswer = document.querySelector('input[name="options"]:checked');
    
    if (userAnswer) {
        if (userAnswer.value === questions[currentQuestion].answer) {
            score++;
        } else {
            correctAnswer.classList.remove('hide');
            correctAnswer.innerHTML =  questions[currentQuestion].correct;
        }
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            showQuestion();
    } 
}
}