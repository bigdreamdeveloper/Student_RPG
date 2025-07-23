
function gainXP(amount) {
  let player = JSON.parse(localStorage.getItem("player"));
  player.xp += amount;

  const xpToLevel = 10 + (player.level * 5);
  if (player.xp >= xpToLevel) {
    player.xp -= xpToLevel;
    player.level++;
    localStorage.setItem("player", JSON.stringify(player));
    alert("Tahniah! Anda naik ke Tahap " + player.level);
    showLevelUpMenu();
  } else {
    localStorage.setItem("player", JSON.stringify(player));
  }
}

function showLevelUpMenu() {
  const menu = document.createElement("div");
  menu.id = "levelUpMenu";
  menu.innerHTML = `
    <h3>Pilih Stat untuk Dinaikkan</h3>
    <button onclick="upgradeStat('strength')">💪 Strength</button>
    <button onclick="upgradeStat('intel')">🧠 Intel</button>
    <button onclick="upgradeStat('health')">❤️ Health</button>
    <button onclick="upgradeStat('luck')">🍀 Luck</button>
    <button onclick="upgradeStat('agility')">⚡ Agility</button>
  `;
  document.body.appendChild(menu);
}

function upgradeStat(stat) {
  const player = JSON.parse(localStorage.getItem("player"));
  player.stats[stat]++;
  localStorage.setItem("player", JSON.stringify(player));
  alert("Stat " + stat + " telah dinaikkan!");
  document.getElementById("levelUpMenu").remove();
}
