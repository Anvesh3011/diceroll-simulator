// const faces = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
// console.log(faces[0]);

const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
let historyLists = [];
const rollHistoryEl = document.getElementById("roll-history");

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyLists.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < historyLists.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyLists[i]
    )}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856";
      break;
    case 2:
      return "&#9857";
      break;
    case 3:
      return "&#9858";
      break;
    case 4:
      return "&#9859";
      break;
    case 5:
      return "&#9860";
      break;
    case 6:
      return "&#9861";
      break;
    default:
      return "Error";
      break;
  }
}
buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
