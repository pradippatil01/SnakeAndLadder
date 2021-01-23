/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Snake and Ladder using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : SnakeAndLadder.js
*   @version   : v15.6.0
***************************************************************************/
console.log('code for Snake and Ladder');
const START_POSITION = 0;
var number = 0;
var currentPosition;
const END_POSITION = 100;
var position = START_POSITION;

var rollDice = () => {
    number = Math.floor(Math.random() * 6) + 1;
    return number;
}

var ladder = (diceResult) => {
    position = position + diceResult;
    return position;
}


var snake = (diceResult) => {
    position = position - diceResult;
    return position;
}

checkPlayerOption = () => {
    let option = Math.floor(Math.random() * 3);
    switch (option) {
        case 0:
            position = position + 0;
            console.log("no play");
            break;
        case 1:
            currentPosition = ladder(rollDice());
            console.log("woww ladder");
            break;
        case 2:
            currentPosition = snake(rollDice());
            console.log("oops snake ");
            break;

    }
}

while (position < END_POSITION) {
    checkPlayerOption();
    if (position < START_POSITION) {
        position = START_POSITION;
    }
    console.log('player position ', position);
}
