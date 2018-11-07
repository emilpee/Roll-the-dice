// Roll a random number between 1 and 6
const roll = Math.ceil(Math.random() * 6);

document.addEventListener('DOMContentLoaded', function() {
    // Make the dice a child of the container
    let diceContainer = document.getElementById('dice');
    let displayDice = document.createElement('div');
    diceContainer.appendChild(displayDice);

    // Create a message and print it out
    let msgHolder = document.getElementsByTagName('aside');
    let displayMsg = document.createElement('p');
    msgHolder[0].appendChild(displayMsg);
    let message = `You rolled ${roll} <br> Please reload the page to roll again.`;
    displayMsg.innerHTML = message;

    // Display dice with the rolled number
    switch(roll) {
        case 1:
          displayDice.id = "diceOne";
          break;
        case 2:
          displayDice.id = "diceTwo";
          break;
        case 3:
          displayDice.id = "diceThree";
          break;
        case 4:
          displayDice.id = "diceFour";
          break;
        case 5:
          displayDice.id = "diceFive";
          break;
        default:
          displayDice.id = "diceSix";
    }
});