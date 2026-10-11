function isMouseInside(mouse, x, y, width, height) {
    return (
        mouse.x >= x &&
        mouse.x <= x + width &&
        mouse.y >= y &&
        mouse.y <= y + height
    );
}

module.exports = {
    isMouseInside,
}