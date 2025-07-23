// map.js
import { loadPlayerData } from "./storage.js";

window.onload = function () {
  const player = loadPlayerData();
  const nameBox = document.getElementById("playerName");
  const spriteBox = document.getElementById("playerSprite");
  const stageBox = document.getElementById("stageButtons");

  if (!player || !player.name || !player.sprite) {
    window.location.href = "index.html"; // kalau data tak lengkap, balik ke home
    return;
  }

  nameBox.textContent = player.name;
  spriteBox.src = player.sprite;

  const maxStage = player.level || 1; // unlock ikut level, default 1
  for (let i = 1; i <= maxStage; i++) {
    const btn = document.createElement("button");
    btn.textContent = `Stage ${i}`;
    btn.onclick = () => {
      localStorage.setItem("currentStage", i);
      window.location.href = "battle.html";
    };
    stageBox.appendChild(btn);
  }

  const resetBtn = document.getElementById("resetGame");
  resetBtn.onclick = () => {
    localStorage.clear();
    window.location.href = "index.html";
  };
};
