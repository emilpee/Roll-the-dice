// Roll a random number between 1 and 6
let diceContainer = document.getElementById('dice');
let displayDice = document.createElement('div');
let submit = document.getElementsByTagName('input');
diceContainer.appendChild(displayDice);

var msgHolder = document.getElementsByTagName('aside');
var displayMsg = document.createElement('p');
msgHolder[0].appendChild(displayMsg);

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
    <strong>You rolled ${roll}</strong>
    <br> 
    Please click the button to roll again.
    `;
    displayMsg.innerHTML = message;
  };

  var printMessage = setTimeout(createMessage, 500);

});
