const v = require("../variable");

function newGame() {
    v.board = [];
    v.active = [];
    v.moves = 0;

    for (let row = 0; row < v.ROWS; row++) {
        v.board[row] = [];
        v.active[row] = [];

        for (let col = 0; col < v.COLS; col++) {
            v.board[row][col] = Math.floor(Math.random() * v.COLORS.length);
            v.active[row][col] = false;
        }
    }

    v.active[0][0] = true;
    v.selectedColor = v.board[0][0];
}

module.exports = {
    newGame,
}