document.getElementById('answerInput').focus();

let questionOutput = document.getElementById('questionOutput');
let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');
let answerInput = document.getElementById('answerInput');

alert("Welcome to my Quiz!\n You will be presented with 5 questions.\n The answers are multiple choice.\n Please answer with the appropriate letter using LOWERCASE ONLY!!!\n Otherwise you will not get the point.");
alert("Ready to begin?");

class Quiz {
    constructor(progress, score, questions){
        this.progress = 0;
        this.score = 0;

        this.questions = 
        
        [
            {
                question : "What is Deadpool's favorite snack?",
                options: ['A. Chicken Wings', 'B. Shepards Pie', 'C. Chimichangas', 'D. Chicago Pizza', 'E. Ramen Noodles'],
                answer : 'c'
            },
            {
                question : "What was Queen Victoria's first name?",
                options: ['A. Elsa', 'B. Alexandrina', 'C. Victoria', 'D. Susan', 'E. Mila'],
                answer : 'b'
            },
            {
                question : "'Mach One' refers to the speed of what?",
                options: ['A. Sound', 'B. Gamma Rays', 'C. Light', 'D. Ultraviolet Rays', 'E. Horses'],
                answer : 'a'
            },
            {
                question : "What NFL player is known as 'Beast-Mode'?",
                options: ['A. Bo Jackson', 'B. Reggie Bush', 'C. Rob Gronkowski', 'D. Marshawn Lynch', 'E. O.J. Simpson'],
                answer : 'd'
            },
            {
                question : "What is a resident of Manchester called?",
                options: ['A. Duke', 'B. Chesterfield', 'C. Mancunian', 'D. Angeleno', 'E. Okie'],
                answer : 'c'
            }
        ];
    }    
}

let quiz = new Quiz();
userAnswer = [];


function startQuiz() {
    questionOutput.innerHTML = quiz.questions[quiz.progress].question;
    q1.innerHTML = quiz.questions[quiz.progress].options[0];
    q2.innerHTML = quiz.questions[quiz.progress].options[1];
    q3.innerHTML = quiz.questions[quiz.progress].options[2];
    q4.innerHTML = quiz.questions[quiz.progress].options[3];
    q5.innerHTML = quiz.questions[quiz.progress].options[4];
}

function nextQuestion() {
    if(quiz.progress < (quiz.questions.length - 1)) {
        quiz.progress += 1;
        questionOutput.innerHTML = quiz.questions[quiz.progress].question;
        q1.innerHTML = quiz.questions[quiz.progress].options[0];
        q2.innerHTML = quiz.questions[quiz.progress].options[1];
        q3.innerHTML = quiz.questions[quiz.progress].options[2];
        q4.innerHTML = quiz.questions[quiz.progress].options[3];
        q5.innerHTML = quiz.questions[quiz.progress].options[4];
        userAnswer.push(answerInput.value);
        
    } else {
        userAnswer.push(answerInput.value);
        score();
    }
}


function score() {
    for(let i = 0; i < quiz.questions.length; i++){
        if(userAnswer[i] == quiz.questions[i].answer){
            document.getElementById("results").innerHTML = quiz.score+=1;
        }
    }
    alert(`Your score is ${quiz.score}/${quiz.questions.length}`);
}


