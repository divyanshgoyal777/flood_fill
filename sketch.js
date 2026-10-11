const r = require("raylib");
const v = require("./variable");
const game = require("./game");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(v.WINDOW_WIDTH, v.WINDOW_HEIGHT, v.WINDOW_TITLE);
    r.SetTargetFPS(v.WINDOW_FPS);

    game.newGame();
}

function update() {
    if (r.IsMouseButtonPressed(r.MOUSE_BUTTON_LEFT)) {
        const mouse = r.GetMousePosition();

        if (game.isMouseInside(mouse, v.RESTART_X - 5, v.RESTART_Y, v.RESTART_WIDTH, v.RESTART_HEIGHT)) {
            game.newGame();
            return;
        }

        for (let i = 0; i < v.COLOR_BUTTONS.length; i++) {
            const button = v.COLOR_BUTTONS[i];

            if (game.isMouseInside(mouse, button.x, button.y, button.w, button.h)) {
                game.changeColor(i);
                break;
            }
        }
    }
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.LIGHTGRAY);

    const TITLE = "KAMI GAME";
    const TITLE_FONT_SIZE = 25;
    const TITLE_X = (v.WINDOW_WIDTH - r.MeasureText(TITLE, TITLE_FONT_SIZE)) / 2;

    r.DrawText(TITLE, TITLE_X, 20, TITLE_FONT_SIZE, r.BLACK);

    const MOVES_TEXT = "Moves: " + v.moves;

    r.DrawText(MOVES_TEXT, 20, 20, 20, r.BLACK);

    const RESTART_TEXT = "New Game";
    const RESTART_FONT_SIZE = 20;
    const NEW_RESTART_X = v.RESTART_X + (v.RESTART_WIDTH - r.MeasureText(RESTART_TEXT, RESTART_FONT_SIZE)) / 2;
    const NEW_RESTART_Y = v.RESTART_Y + (v.RESTART_HEIGHT - RESTART_FONT_SIZE) / 2;

    r.DrawText(RESTART_TEXT, NEW_RESTART_X, NEW_RESTART_Y, RESTART_FONT_SIZE, game.updateButtonHoverState());
    r.DrawRectangleLines(v.RESTART_X - 5, v.RESTART_Y, v.RESTART_WIDTH, v.RESTART_HEIGHT, game.updateButtonHoverState());

    for (let row = 0; row < v.ROWS; row++) {
        for (let col = 0; col < v.COLS; col++) {
            let x = v.START_X + col * v.CELL_SIZE;
            let y = v.START_Y + row * v.CELL_SIZE;

            r.DrawRectangle(x, y, v.CELL_SIZE - v.CELL_GAP, v.CELL_SIZE - v.CELL_GAP, v.COLORS[v.board[row][col]]);
        }
    }

    const COLOR_TEXT = "Choose a color:";
    const COLOR_TEXT_FONT_SIZE = 20;

    r.DrawText(COLOR_TEXT, 20, v.BUTTON_Y - 30, COLOR_TEXT_FONT_SIZE, r.BLACK);

    for (let i = 0; i < v.COLOR_BUTTONS.length; i++) {
        const button = v.COLOR_BUTTONS[i];

        r.DrawRectangle(button.x, button.y, button.w, button.h, v.COLORS[i]);

        if (v.selectedColor === i) {
            r.DrawRectangleLines(button.x, button.y, button.w, button.h, r.BLACK);
        }
    }

    if (game.isWon()) {
        const NEW_WIN_X = v.WIN_X + (v.WIN_WIDTH - v.TEXT_WIDTH) / 2 - 70;
        const NEW_WIN_Y = v.WIN_Y + (v.WIN_HEIGHT - v.FONT_SIZE) / 2;

        r.DrawRectangle(v.WIN_X, v.WIN_Y, v.WIN_WIDTH, v.WIN_HEIGHT, r.WHITE);
        r.DrawText(v.TEXT, NEW_WIN_X, NEW_WIN_Y, v.FONT_SIZE, r.GREEN);
    }

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};