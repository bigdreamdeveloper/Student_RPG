
function getRandomLoot() {
  const lootList = [
    { name: "Potion Nyawa", type: "heal", effect: 20 },
    { name: "Kitab Intel", type: "intel", effect: 1 },
    { name: "Azimat Luck", type: "luck", effect: 1 }
  ];
  const drop = lootList[Math.floor(Math.random() * lootList.length)];
  addLootToInventory(drop);
  alert("Anda dapat loot: " + drop.name);
}

function addLootToInventory(item) {
  let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
  inventory.push(item);
  localStorage.setItem("inventory", JSON.stringify(inventory));
}
