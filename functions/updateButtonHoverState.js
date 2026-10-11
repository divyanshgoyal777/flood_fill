const r = require("raylib")
const v = require("../variable");
const { isMouseInside } = require("./isMouseInside");

function updateButtonHoverState() {
    const mouse = r.GetMousePosition();
    if (isMouseInside(mouse, v.RESTART_X - 5, v.RESTART_Y, v.RESTART_WIDTH, v.RESTART_HEIGHT)) {
        r.SetMouseCursor(r.MOUSE_CURSOR_POINTING_HAND);
        return r.RED;
    }

    for (let i = 0; i < v.COLOR_BUTTONS.length; i++) {
        const button = v.COLOR_BUTTONS[i];

        if (isMouseInside(mouse, button.x, button.y, button.w, button.h)) {
            r.SetMouseCursor(r.MOUSE_CURSOR_POINTING_HAND);
            return r.BLACK;
        }
    }

    r.SetMouseCursor(r.MOUSE_CURSOR_DEFAULT);
    return r.BLACK;
}

module.exports = {
    updateButtonHoverState,
}