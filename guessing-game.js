function guessingGame() {
    let answer = Math.floor(Math.random() * 100);
    let game = false;
    let numGuess = 0;

    return function checkGuess(userGuess) {
        if (game) return "The game is over, you already won!"
        numGuess++;

        if (userGuess === answer) {
            game = true;
            return ` You win! You found ${answer} in ${numGuess} guess(es)`;
        } else if (userGuess < answer) {
            return `${userGuess} is too low!`;
        } else {
            return `${userGuess} is too high!`;
        }
    }
}


module.exports = { guessingGame };
