/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Snake and Ladder using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : SnakeAndLadder.js
*   @version   : v15.6.0
***************************************************************************/
console.log('code for Snake and Ladder');
var startPosition  = 0;
var number = 0;
var currentPosition;


var rollDice = () => {
    number = Math.floor(Math.random() * 6) + 1;
    console.log('dice rolled and value returned ',number)
    return number;
}

var ladder = (diceResult) => {
    let positon = startPosition  + diceResult;
    return positon;
};


var snake = (diceResult) => {
    let positon = startPosition  - diceResult;
    return positon;
};

checkPlayerOption = (option) => {
    switch (option) {
        case 0:
            currentPosition = playerPosition;
            console.log("no play");
            console.log("updated player positon - " + currentPosition);
            break;
        case 1:
            currentPosition = ladder(rollDice());
            console.log("woww ladder");
            console.log("updated player positon - " + currentPosition);
            break;
        case 2:
            currentPosition = snake(rollDice());
            console.log("oops snake ");
            console.log("updated player positon - " + currentPosition);
            break;

    }
}

let option = Math.floor(Math.random() * 3);
checkPlayerOption(option);