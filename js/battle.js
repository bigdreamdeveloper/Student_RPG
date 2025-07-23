// battle.js
const player = loadPlayerData();
const stage = parseInt(localStorage.getItem("currentStage")) || 1;
document.getElementById("stageNum").textContent = stage;

let currentQuestionIndex = 0;
let questions = getQuestionsByStage(stage);
let timer;
let timeLimit = 10 + player.stats.intel; // tambah 1s per Intel point

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    finishBattle();
    return;
  }

  const q = questions[currentQuestionIndex];
  document.getElementById("questionBox").textContent = q.question;

  const choicesBox = document.getElementById("choicesBox");
  choicesBox.innerHTML = "";

  q.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(choice, q.answer);
    choicesBox.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("nextBtn").style.display = "none";
  startTimer();
}

function checkAnswer(selected, correct) {
  clearInterval(timer);
  const feedback = document.getElementById("feedback");
  if (selected === correct) {
    feedback.textContent = "✅ Betul!";
  } else {
    feedback.textContent = `❌ Salah. Jawapan sebenar: ${correct}`;
  }
  document.getElementById("nextBtn").style.display = "inline";
}

function startTimer() {
  let timeLeft = timeLimit;
  document.getElementById("timeLeft").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timeLeft").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer("", questions[currentQuestionIndex].answer);
    }
  }, 1000);
}

document.getElementById("nextBtn").onclick = () => {
  currentQuestionIndex++;
  showQuestion();
};

function finishBattle() {
  // Tambah EXP, unlock stage baru jika berjaya
  player.exp += 10;
  player.unlockedMap = Math.max(player.unlockedMap, stage + 1);
  savePlayerData(player);
  window.location.href = "result.html";
}

// Start
showQuestion();
