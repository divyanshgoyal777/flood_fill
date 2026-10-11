const v = require("../variable");

function isWon() {
    for (let row = 0; row < v.ROWS; row++) {
        for (let col = 0; col < v.COLS; col++) {
            if (v.active[row][col] === false) {
                return false;
            }
        }
    }

    return true;
}

module.exports = {
    isWon,
}