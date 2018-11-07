const roll = Math.floor(Math.random() * 6);
console.log(roll);

document.addEventListener('DOMContentLoaded', function() {
    var diceContainer = document.getElementById('dice');
    var displayDice = document.createElement('div');
    diceContainer.appendChild(displayDice);
    if (roll == 0) {
        displayDice.id = "diceOne";
    } else if (roll == 1) {
        displayDice.id = "diceTwo";
    } else if (roll == 2) {
        displayDice.id = "diceThree";
    } else if (roll == 3) {
        displayDice.id = "diceFour";
    } else if (roll == 4) {
        displayDice.id = "diceFive";
    } else if (roll == 5) {
        displayDice.id = "diceSix";
    }
});