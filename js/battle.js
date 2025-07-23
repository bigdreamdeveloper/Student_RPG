
const player = JSON.parse(localStorage.getItem("player"));
let qIndex = 0;
let score = 0;
let timeLeft = 10 + player.stats.intel;
let timerInterval;

function loadQuestion() {
  const q = questions[qIndex];
  document.getElementById("questionBox").innerText = q.soalan;

  const choicesBox = document.getElementById("choicesBox");
  choicesBox.innerHTML = "";

  q.pilihan.forEach(pilihan => {
    const btn = document.createElement("button");
    btn.textContent = pilihan;
    btn.onclick = () => checkAnswer(pilihan);
    choicesBox.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  document.getElementById("timeLeft").textContent = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timeLeft").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      checkAnswer(""); // auto salah
    }
  }, 1000);
}

function checkAnswer(jawapan) {
  clearInterval(timerInterval);
  const betul = questions[qIndex].jawapan;

  if (jawapan === betul) {
    score++;
    document.getElementById("status").innerText = "✅ Betul!";
  } else {
    document.getElementById("status").innerText = "❌ Salah! Jawapan: " + betul;
  }

  qIndex++;
  if (qIndex < questions.length) {
    setTimeout(() => {
      timeLeft = 10 + player.stats.intel;
      document.getElementById("status").innerText = "";
      loadQuestion();
    }, 1000);
  } else {
    setTimeout(() => {
      alert(`Pertempuran tamat! Skor: ${score}/${questions.length}`);
      if (score >= 2) {
        gainXP(10);
        getRandomLoot();
      }
      window.location.href = "map.html";
    }, 1500);
  }
}

loadQuestion();
