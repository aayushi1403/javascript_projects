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

const questionnum=0;
const score=0;
const remainingTime=0;
const selectedAnswer;


function question
