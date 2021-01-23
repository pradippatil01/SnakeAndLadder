/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Snake and Ladder using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : SnakeAndLadder.js
*   @version   : v15.6.0
***************************************************************************/

const START_POSITION = 0;
const PLAYER_ONE = 0;
const END_POSITION = 100;
var position = START_POSITION;

var rollDice = () => {
    let DiceValue = Math.floor(Math.random() * 6) + 1;
    console.log('dice rolled and value returned ', DiceValue)
    return DiceValue;
}

var checkOptions = () => {
    let rollDiceValue = rollDice();
    optionsCheckValue = Math.floor(Math.random() * 3);
    if (optionsCheckValue == 0) {
        position = position + 0;
    }
    if (optionsCheckValue == 1) {
        position = position - rollDiceValue;
        if (position < 0) {
            position = position + rollDiceValue
        }
        console.log("oops snake ");
        console.log("updated player positon :- " + position);

    }
    if (optionsCheckValue == 2) {
        position = position + rollDiceValue;
        console.log("woww ladder");
        console.log("updated player positon :- " + position);
    }

}
while (position < END_POSITION) {
    checkOptions();
    console.log('player position ', position);
}