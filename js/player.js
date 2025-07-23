document.getElementById("startForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("playerName").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const player = {
    name,
    gender,
    level: 1,
    xp: 0,
    stats: {
      strength: 5,
      intel: 5,
      health: 100,
      luck: 3,
      agility: 4
    }
  };

  localStorage.setItem("player", JSON.stringify(player));
  window.location.href = "map.html";
});
