// learn the limits of Semicolon insertion


// this works thanks to 'automatic semicolon insertion'
function point(x, y) {
    this.x = x || 0
    this.y = y || 0
}

Point.prototype.isOrigin = function() {
    return this.x === 0 && this.y === 0
}
