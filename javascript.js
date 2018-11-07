const roll = Math.floor(Math.random() * 6);
console.log(roll);

document.addEventListener('DOMContentLoaded', function() {
    var diceContainer = document.getElementById('dice');
    var displayDice = document.createElement('img');
    diceContainer.appendChild(displayDice);
    if (roll > 0) {
        displayDice.id = "diceOne";
    }
});