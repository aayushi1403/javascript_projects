const questions = [
  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["let", "var", "const", "static"],
    answer: "const"
  },
  {
    question: "Which method is used to select an element by its ID?",
    options: [
      "document.querySelector()",
      "document.getElementById()",
      "document.getElementsByClassName()",
      "document.getElementsByTagName()"
    ],
    answer: "document.getElementById()"
  },
  {
    question: "Which operator is used for strict equality comparison?",
    options: ["==", "=", "===", "!="],
    answer: "==="
  },
  {
    question: "Which function displays a message in the browser console?",
    options: ["alert()", "prompt()", "console.log()", "print()"],
    answer: "console.log()"
  },
  {
    question: "What is the output of typeof []?",
    options: ["array", "object", "list", "undefined"],
    answer: "object"
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do...while", "for...of"],
    answer: "do...while"
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "JSON.parse()"
  },
  {
    question: "Which event occurs when a button is clicked?",
    options: ["mouseover", "submit", "click", "change"],
    answer: "click"
  },
  {
    question: "Which array method adds an element to the end of an array?",
    options: ["shift()", "unshift()", "push()", "pop()"],
    answer: "push()"
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    options: ["method", "function", "func", "define"],
    answer: "function"
  }
];

const startbtn=document.querySelector("#startBtn");
const userprogress=document.querySelector(".progress-bar")
const userquestion=document.querySelector("#question")
const opA=document.querySelector(".optionA")
const opB=document.querySelector(".optionB")
const opC=document.querySelector(".optionC")
const opD=document.querySelector(".optionD")
const prev=document.querySelector("#prevBtn");
const next=document.querySelector("#nextBtn");

const restart=document.querySelector("#restartBtn");

let questionIndex=0;
let score=0;
let remainingTime=30;
let selectedAnswer=null;
let  timerInterval;
let progressWidth=10;

let userAnswers = new Array(questions.length).fill(null);


function hideStartScreen(){
   document.querySelector(".start-screen").style.display="none";
   document.querySelector(".quiz-card").style.display="block";
}
function startTimer() {
    clearInterval(timerInterval);
    remainingTime = 30;
    document.querySelector("#time").textContent = remainingTime;
    timerInterval = setInterval(() => {
        remainingTime--;
        document.querySelector("#time").textContent = remainingTime;
        if (remainingTime === 0) {
            clearInterval(timerInterval);
            //move to next question ---->
            nextStep();
        }
        

    }, 1000);
}


function loadQuestion() {
    userquestion.textContent = questions[questionIndex].question;
    opA.textContent = questions[questionIndex].options[0];
    opB.textContent = questions[questionIndex].options[1];
    opC.textContent = questions[questionIndex].options[2];
    opD.textContent = questions[questionIndex].options[3];
    document.querySelector("#currentQuestion").textContent = questionIndex + 1;
    const progress = ((questionIndex + 1) / questions.length) * 100;
    userprogress.style.width = `${progress}%`;
    options.forEach(btn => btn.classList.remove("selected"));
    if(userAnswers[questionIndex] !== null){
        options.forEach(btn=>{
            if(btn.textContent===userAnswers[questionIndex]){
                btn.classList.add("selected");
            }
        });
      selectedAnswer=userAnswers[questionIndex];
    }else{
        selectedAnswer=null;
    }
    startTimer();
}


startbtn.addEventListener("click",()=>{
  hideStartScreen();
  score=0;
  questionIndex=0;
  loadQuestion();
})

const optionsContainer = document.querySelector(".options");
const options = document.querySelectorAll(".option");

selectedAnswer = "";

optionsContainer.addEventListener("click", (e) => {

    // Ignore clicks outside buttons
    if (!e.target.classList.contains("option")) return;

    // Remove previous selection
    options.forEach((btn) => {
        btn.classList.remove("selected");
    });

    // Highlight clicked button
    e.target.classList.add("selected");

    // Store selected answer
    selectedAnswer = e.target.textContent;
    userAnswers[questionIndex] = selectedAnswer;

});


function nextStep(){
  if(selectedAnswer!==null&& selectedAnswer==questions[questionIndex].answer){
     score++;
  }
  questionIndex++;
  if (questionIndex < questions.length) {

        loadQuestion();

    }else {

        // Stop timer
        clearInterval(timerInterval);

        // Hide quiz
        document.querySelector(".quiz-card").style.display = "none";

        // Show result screen
        score=0;
        //score calculate
for(let i=0;i<questions.length;i++){

    if(userAnswers[i]===questions[i].answer){
        score++;
    }

}
        document.querySelector(".result-card").style.display = "block";
        if(score>=8 &&score<=10){
          document.querySelector("#message").textContent="Excellent! "
        }
        else if(score>=5 &&score<=7){
          document.querySelector("#message").textContent="Good Job! "
        }
        else{
          document.querySelector("#message").textContent="keep practing! "
        }


        // Display score
        document.querySelector("#score").textContent = score;
    }
}

next.addEventListener("click",()=>{
  nextStep();
})

function prevStep() {

    if (questionIndex > 0) {
        questionIndex--;
        loadQuestion();
        // Remove previous highlight
        document.querySelectorAll(".option").forEach((btn) => {
            btn.classList.remove("selected");
        });
        // Restore previously selected answer
        if (userAnswers[questionIndex] !== null) {
            document.querySelectorAll(".option").forEach((btn) => {
                if (btn.textContent === userAnswers[questionIndex]) {
                    btn.classList.add("selected");
                }
            });
            selectedAnswer = userAnswers[questionIndex];
        } else {
            selectedAnswer = "";
        }
    }
}
document.querySelector("#prevBtn").addEventListener("click",()=>{
  prevStep();
})

function restartStep(){
    clearInterval(timerInterval);
    score=0;
    questionIndex=0;
    selectedAnswer=null;
    userAnswers.fill(null);
    document.querySelector(".result-card").style.display="none";
    document.querySelector(".quiz-card").style.display="block";
    loadQuestion();
}
restart.addEventListener("click", restartStep);