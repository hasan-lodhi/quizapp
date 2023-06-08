var questions = [
    {
      question: "HTML Stands for ______________",
      options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "CSS Stands for ______________",
      options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
      correctAnswer: "Cascading Style Sheet",
    },
    {
      question: "JS Stands for ______________",
      options: ["JS", "JS", "JavaScript", "JS"],
      correctAnswer: "JavaScript",
    },
    {
      question: "RAM Stands for ______________",
      options: ["RAM", "RAM", "Random Access Memory", "RAM"],
      correctAnswer: "Random Access Memory",
    },
    {
      question: "SQL Stands for ______________",
      options: ["SQL", "SQL", "Structured Query Language", "SQL"],
      correctAnswer: "Structured Query Language",
    },
    {
      question: "is HTML is Programming Language?",
      options: ["YES", "NO"],
      correctAnswer: "NO",
    },
  ];
  
  var displayQuestion = document.getElementById("displayQuestion");
  var currentQuestionNumber = document.getElementById("currentQuestionNumber");
  var totalQuestionNumber = document.getElementById("totalQuestionNumber");
  var optionParent = document.getElementById("optionParent");
  
  var indexVal = 0;
  var marks = 0;
  
  function renderQuestion() {
    var que = questions[indexVal];
    displayQuestion.innerHTML = que.question;
    totalQuestionNumber.innerHTML = questions.length;
    currentQuestionNumber.innerHTML = indexVal + 1;
  
    optionParent.innerHTML = "";
  
    for (let i = 0; i < que.options.length; i++) {
      optionParent.innerHTML += ` <div class="col-md-6">
      <button onclick="checkAnswer('${que.correctAnswer}', '${que.options[i]}')" class="fw-bold p-3 m-3 w-100 btn-primary text-dark">
        ${que.options[i]}
      </button>
    </div>`;
    }
  }
  
  function nextQuestion() {
    indexVal++;
    renderQuestion();
  }
  
  function checkAnswer(a, b) {
    nextQuestion();
    console.log(a, b);
    if (a === b) {
      marks = marks + 1;
    }
    console.log(marks);
  }
  
  renderQuestion();