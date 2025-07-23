// storage.js

function savePlayerData(player) {
  localStorage.setItem("playerData", JSON.stringify(player));
}

function loadPlayerData() {
  const data = localStorage.getItem("playerData");
  if (!data) return null;
  return JSON.parse(data);
}

function resetPlayerData() {
  localStorage.removeItem("playerData");
}

// Untuk digunakan bila player mula game baru
function initNewPlayer(name, sprite) {
  const player = {
    name: name,
    sprite: sprite,
    level: 1,
    exp: 0,
    stats: {
      strength: 1,
      intel: 1,
      health: 5,
      luck: 1,
      agility: 1
    },
    unlockedMap: 1,
    inventory: [],
  };
  savePlayerData(player);
  return player;
}
