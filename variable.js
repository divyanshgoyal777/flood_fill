const r = require("raylib")

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 700;
const WINDOW_FPS = 60;
const WINDOW_TITLE = "FLOOD FILL | Color Puzzle"

const ROWS = 10;
const COLS = 10;
const CELL_SIZE = 50;
const CELL_GAP = 2;

const BOARD_HEIGHT = ROWS * CELL_SIZE;

const START_X = (WINDOW_WIDTH - CELL_SIZE * ROWS) / 2;
const START_Y = 70;

const RESTART_X = WINDOW_WIDTH - 160;
const RESTART_Y = 15;
const RESTART_WIDTH = 120;
const RESTART_HEIGHT = 30;

const WIN_WIDTH = 260;
const WIN_HEIGHT = 55;
const FONT_SIZE = 35;
const WIN_X = (WINDOW_WIDTH - WIN_WIDTH) / 2;
const WIN_Y = (WINDOW_HEIGHT - WIN_HEIGHT) / 2;
const TEXT = "YOU WIN!";
const TEXT_WIDTH = r.MeasureText(TEXT, FONT_SIZE);

const BUTTON_WIDTH = 70;
const BUTTON_HEIGHT = 54;
const BUTTON_GAP = 30;

const TOTAL_BUTTONS_WIDTH =
    3 * BUTTON_WIDTH + 2 * BUTTON_GAP;

const BUTTON_START_X =
    (WINDOW_WIDTH - TOTAL_BUTTONS_WIDTH) / 2;

const BUTTON_Y = START_Y + BOARD_HEIGHT + 60;

const COLOR_BUTTONS = [
    {
        x: BUTTON_START_X,
        y: BUTTON_Y,
        w: BUTTON_WIDTH,
        h: BUTTON_HEIGHT
    },
    {
        x: BUTTON_START_X + BUTTON_WIDTH + BUTTON_GAP,
        y: BUTTON_Y,
        w: BUTTON_WIDTH,
        h: BUTTON_HEIGHT
    },
    {
        x: BUTTON_START_X + 2 * (BUTTON_WIDTH + BUTTON_GAP),
        y: BUTTON_Y,
        w: BUTTON_WIDTH,
        h: BUTTON_HEIGHT
    }
];

const COLORS = [r.GOLD, r.SKYBLUE, r.ColorAlpha(r.RED, 0.7)];

let board = [];
let active = [];
let selectedColor = 0;
let moves = 0;

module.exports = {
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    WINDOW_FPS,
    WINDOW_TITLE,
    ROWS,
    COLS,
    CELL_SIZE,
    CELL_GAP,
    BOARD_HEIGHT,
    START_X,
    START_Y,
    RESTART_X,
    RESTART_Y,
    RESTART_WIDTH,
    RESTART_HEIGHT,
    WIN_WIDTH,
    WIN_HEIGHT,
    FONT_SIZE,
    WIN_X,
    WIN_Y,
    TEXT,
    TEXT_WIDTH,
    BUTTON_WIDTH,
    BUTTON_HEIGHT,
    BUTTON_GAP,
    TOTAL_BUTTONS_WIDTH,
    BUTTON_START_X,
    BUTTON_Y,
    COLOR_BUTTONS,
    COLORS,
    board,
    active,
    selectedColor,
    moves,
}