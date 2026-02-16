let moods = document.getElementsByTagName("button");

let happy = [
  "Keep shining — the world needs your light.",
  "Good days look good on you.",
  "Happiness grows when you share it.",
  "Enjoy this moment — you earned it.",
  "Smile, you’re doing better than you think."
];

let tired = [
  "Rest is productive too.",
  "You don’t have to rush everything.",
  "Slow down — you’re human, not a machine.",
  "Even strong people need breaks.",
  "Breathe. Pause. Reset."
];

let stressed = [
  "One step at a time is enough.",
  "You survived 100% of your bad days.",
  "This moment will pass.",
  "You are stronger than this stress.",
  "Focus on what you can control."
];

let focused = [
  "Small progress is still progress.",
  "Discipline beats motivation.",
  "Stay locked in — you’re building your future.",
  "Consistency creates results.",
  "You’re closer than you think."
];

function randomNum() {
  return Math.floor(Math.random() * 5);
}

let message = document.createElement("h1");
document.body.appendChild(message);

for (let i = 0; i < moods.length; i++) {
 
  moods[i].addEventListener("click", () => {
    switch (i) {
      case 0:
        document.body.style.backgroundColor = "green";
        message.textContent = happy[randomNum()];
        break;

      case 1:
        document.body.style.backgroundColor = "blue";
        message.textContent = tired[randomNum()];
        break;

      case 2:
        document.body.style.backgroundColor = "orange";
        message.textContent = stressed[randomNum()];
        break;

      case 3:
        document.body.style.backgroundColor = "red";
        message.textContent = focused[randomNum()];
        break;
    }
  });
}
