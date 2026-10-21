const r = require("raylib");

function howToPlay() {
    r.DrawText("Objective", 100, 100, 28, r.RED);
    r.DrawText(
        "Change the colors of the board until every tile becomes\nthe same color.",
        100, 135, 20, r.BLACK
    );

    r.DrawText("Rules", 100, 210, 28, r.BLUE);

    r.DrawText("1. Start at the top-left corner.", 100, 245, 20, r.BLACK);
    r.DrawText("2. Choose a color using the buttons below.", 100, 270, 20, r.BLACK);
    r.DrawText("3. Matching neighboring tiles join your area.", 100, 295, 20, r.BLACK);
    r.DrawText("4. Each valid color change counts as one move.", 100, 320, 20, r.BLACK);
    r.DrawText("5. Fill the board with one connected color to win.", 100, 345, 20, r.BLACK);

    r.DrawText("Tips", 100, 390, 28, r.ORANGE);
    r.DrawText("Look for colors that capture large groups.", 100, 425, 20, r.BLACK);
    r.DrawText("Plan ahead to win in fewer moves.", 100, 450, 20, r.BLACK);
    r.DrawText("Click New Game to start a fresh puzzle.", 100, 475, 20, r.BLACK);

    r.DrawText("Click anywhere to start the game :)", 160, 550, 28, r.BLACK);

}

module.exports = {
    howToPlay,
};