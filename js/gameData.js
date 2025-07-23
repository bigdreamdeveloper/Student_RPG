// gameData.js

// Contoh soalan per stage
const questionsBank = {
  1: [
    {
      question: "Apakah ibu negara Malaysia?",
      choices: ["Kuala Lumpur", "Melaka", "Johor Bahru", "Putrajaya"],
      answer: "Kuala Lumpur",
    },
    {
      question: "3 + 4 = ?",
      choices: ["5", "7", "6", "8"],
      answer: "7",
    },
    {
      question: "Verb untuk 'makan' dalam Bahasa Inggeris ialah:",
      choices: ["Eat", "Food", "Chew", "Swallow"],
      answer: "Eat",
    },
  ],
  2: [
    {
      question: "Siapakah Bapa Kemerdekaan Malaysia?",
      choices: ["Tunku Abdul Rahman", "Tun Razak", "Tun Mahathir", "Tun Hussein"],
      answer: "Tunku Abdul Rahman",
    },
    {
      question: "Berapa negeri dalam Malaysia?",
      choices: ["13", "14", "12", "11"],
      answer: "13",
    },
    {
      question: "Antonim bagi 'tinggi' ialah:",
      choices: ["Rendah", "Besar", "Halus", "Pendek"],
      answer: "Rendah",
    },
  ]
};

function getQuestionsByStage(stage) {
  return questionsBank[stage] || [];
}

// Skill Unlocks ikut Intel
const skillList = [
  { intelReq: 3, skill: "📘 +5s Masa Jawapan" },
  { intelReq: 5, skill: "🧠 Tunjuk 2 pilihan sahaja" },
  { intelReq: 7, skill: "✨ Skip Soalan Susah" },
];

function getUnlockedSkills(intel) {
  return skillList.filter(s => intel >= s.intelReq).map(s => s.skill);
}
