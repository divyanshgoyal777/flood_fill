const { changeColor } = require("./functions/changeColor");
const { isMouseInside } = require("./functions/isMouseInside");
const { isWon } = require("./functions/isWon");
const { newGame } = require("./functions/newGame");
const { updateButtonHoverState } = require("./functions/updateButtonHoverState");

module.exports = {
    newGame,
    changeColor,
    updateButtonHoverState,
    isWon,
    isMouseInside,
}