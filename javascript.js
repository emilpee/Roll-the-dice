// Append dice to the container
let diceContainer = document.getElementById('dice');
let displayDice = document.createElement('div');
diceContainer.appendChild(displayDice);

// Create a container for the message
var msgHolder = document.getElementsByTagName('aside');
var displayMsg = document.createElement('p');
msgHolder[0].appendChild(displayMsg);
var printMessage;

// Get the button and add click event
let submit = document.getElementsByTagName('input');

submit[0].addEventListener('click', function() {
  const roll = Math.ceil(Math.random() * 6);
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

  function createMessage() {
    let message = `
    You rolled: <strong>${roll}</strong>
    <br> 
    Please click the button to roll again.
    `;
    displayMsg.innerHTML = message;
  };

  // Print the message after 0.5 seconds
  printMessage = setTimeout(createMessage, 500);

});