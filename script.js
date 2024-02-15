const questions = [
  {
    question: "What is the primary function of a CPU?",
    options: [
      "Store data",
      "Process information",
      "Display output",
      "Input devices",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which component is responsible for storing data permanently?",
    options: ["RAM", "Hard Drive", "CPU", "Motherboard"],
    correctAnswer: 1,
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correctAnswer) {
    alert("Correct!");
  } else {
    alert("Incorrect. Try again.");
    return; // Optionally, allow the user to try again before moving to the next question
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("Congratulations! You have completed the workbook.");
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("You have completed the workbook. There are no more questions.");
  }
});

// Initial load
loadQuestion();
