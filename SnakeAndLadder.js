/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Snake and Ladder using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : SnakeAndLadder.js
*   @version   : v15.6.0
***************************************************************************/
const START_POSITION = 0;
const END_POSITION = 100;
const PLAYER_ONE = 1;
const PLAYER_TWO = 2;
var player1_Position = 0, player2_position = 0;
var diceRollCount = 0;
var diceValue;
playerChange = true;
var position = START_POSITION;

class SnakeAndLadder {
    rollDice = () => {
        diceValue = Math.floor(Math.random() * 6) + 1;
        diceRollCount++;
        return diceValue;
    }
    /** 
     *  @param {checkPlayerOption} check playing option
     *  @param '0' for no play
     *  @param '1' for ladder
     *  @param '2' for snake
     */
    checkPlayerOption = () => {
        let rollDiceValue = this.rollDice();
        let optionsCheckValue = Math.floor(Math.random() * 3);
        if (optionsCheckValue == 0) {
            position = position + 0;
        }
        if (optionsCheckValue == 1) {
            position = position - rollDiceValue;
        }
        if (optionsCheckValue == 2) {
            position = position + rollDiceValue;
        }
        return position;
    }
    /**
     * @param {twoPlayerPlay} switch player as per turn 
     */
    twoPlayerPlay = () => {
        if (playerChange == true) {
            player1_Position = this.playRule();
            position = player2_position;
            playerChange = false;
            console.log("Player 1 Position:-  " + player1_Position);

        }
        if (!playerChange) {
            player2_position = this.playRule();
            position = player1_Position;
            playerChange = true;
            console.log("Player 2 Position:-  " + player2_position);
        }
    }
    /**
     * @param {playRule} playing rule defined 
     */
    playRule = () => {
        this.checkPlayerOption()
        if (position < START_POSITION) {
            position = START_POSITION;
        }
        if (position > END_POSITION) {
            position = position - diceValue;
        }
        return position;
    }

    /**
     * @param {startGame} main function where playing start
     */
    startGame = () => {
        while (position < END_POSITION) {
            this.twoPlayerPlay();
        }
        if (player1_Position == END_POSITION) {
            console.log("Player One Wins  " + player1_Position);
        }
        else if (player2_position == END_POSITION) {
            console.log("Player Two Wins  " + player2_position);
        }
        console.log('for winnig dice rolled ' + diceRollCount + ' times');
    }
}
let snakeandladder = new SnakeAndLadder();
snakeandladder.startGame();

