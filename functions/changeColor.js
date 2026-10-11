const v = require("../variable");
const { isWon } = require("./isWon");

function changeColor(color) {
    if (color === v.selectedColor || isWon()) return;

    v.selectedColor = color;
    v.moves++;

    for (let row = 0; row < v.ROWS; row++) {
        for (let col = 0; col < v.COLS; col++) {
            if (v.active[row][col]) {
                v.board[row][col] = color;
            }
        }
    }

    let changed = true;

    while (changed) {
        changed = false;

        for (let row = 0; row < v.ROWS; row++) {
            for (let col = 0; col < v.COLS; col++) {
                if (v.active[row][col] === false) {
                    continue;
                }

                for (let direction = 0; direction < 4; direction++) {
                    let nr = row;
                    let nc = col;

                    if (direction === 0) nr--;
                    if (direction === 1) nr++;
                    if (direction === 2) nc--;
                    if (direction === 3) nc++;

                    if (
                        nr >= 0 && nr < v.ROWS &&
                        nc >= 0 && nc < v.COLS
                    ) {
                        if (
                            v.active[nr][nc] === false &&
                            v.board[nr][nc] === color
                        ) {
                            v.active[nr][nc] = true;
                            changed = true;
                        }
                    }
                }
            }
        }
    }
}

module.exports = {
    changeColor,
}