/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Snake and Ladder using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : SnakeAndLadder.js
*   @version   : v15.6.0
***************************************************************************/
console.log('code for Snake and Ladder');
var playerPosition = 0;
var number = 0;

rollDice = () => {
    number = Math.floor(Math.random() * 6) + 1;
    return number;
}

var s = rollDice();
console.log(s);