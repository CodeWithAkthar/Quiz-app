let questions = [
  {
    question: "What is the name of the capital of Turkey?",
    options: [
      { text: "Istanbul", correct: false },
      { text: "Izmir", correct: false },
      { text: "Bursa", correct: false },
      { text: "Ankara", correct: true },
    ],
    correct_answer: "Ankara",
  },
  {
    question: "Who painted the Sistine Chapel?",
    options: [
      { text: "Leonardo da Vinci", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Raphael", correct: false },
      { text: "Michelangelo", correct: true },
    ],
    correct_answer: "Michelangelo",
  },
  {
    question: " In what year did the Great October Socialist Revolution take place?",
    options: [
      { text: "1917", correct: true },
      { text: "1923", correct: false },
      { text: "1914", correct: false },
      { text: "1920", correct: false },
    ],
    correct_answer: "1917",
  },
];

// --------------------------------
let container = document.getElementById("container");
let questionelement = document.getElementById("ques");
let nextbtn = document.getElementById("nextbtn");
let subdiv = document.getElementById("ques-div");
let scorepage = document.getElementById("end");
let scoreboard = document.getElementById("h3");
scorepage.style.display = "none";

var QuestionIndex = 0;
var score = 0;

function quizStart() {
  QuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  subdiv.innerHTML = "";
  nextbtn.style.display = "none";
  show.style.display = "none";

  let currentQuestion = questions[QuestionIndex].question;
  let questionNo = QuestionIndex + 1;
  questionelement.innerHTML = questionNo + "." + currentQuestion;
 

  questions[QuestionIndex].options.forEach((ans) => {
    const button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("btn");
    subdiv.appendChild(button);
    button.addEventListener("click", function () {
      let option = button.innerHTML;
      checkanswer(option, button);
    });
  });
}

function checkanswer(selectedotpion, button) {
  if (selectedotpion == questions[QuestionIndex].correct_answer) {
    button.classList.add("correct");

    Array.from(subdiv.children).forEach(button => {
      if (button.innerHTML != questions[QuestionIndex].correct_answer ) {
        button.disabled ="true";
      }
     
      
    });

    button.disabled ="true";
    score++;
    console.log(score);
    button.disabled ="true";
    nextbtn.style.display = "flex";
    nextbtn.addEventListener("click", function () {
      nextQuestion();
    });
  } else {
    button.classList.add("incorrect");
    show.innerHTML = "wrong answer";

   Array.from(subdiv.children).forEach(button => {
      if (button.innerHTML == questions[QuestionIndex].correct_answer ) {
        button.classList.add("correct");
      }
      button.disabled ="true";
      
    });
    nextbtn.style.display = "flex";
    nextbtn.addEventListener("click", function () {
      nextQuestion();
    });
  }
}

function nextQuestion() {
  QuestionIndex++;
  if (QuestionIndex < questions.length) {
    showQuestion();
  } else {
    endquiz();
  }
}

function endquiz() {
  container.style.display = "none";
  scorepage.style.display = "flex";
  scoreboard.innerHTML = "Total Score:" + score + "/" + questions.length;

  document.getElementById("restartbtn").addEventListener("click", function () {
    location.reload();
  });
}

quizStart();
