// Accept Options Objects for keyword arguments
// Try making sense of the following constructor call

var alert = new Alert(100, 75, 300, 200,
                      "Error", message,
                      "blue", "white", "black",
                      "error", true);

/* 'argument creep': where a function starts out simple, but over time, as the
 * library expands in functionality, the signature acquires more and more args
 * Soln: use the 'options object'
 */

var alert = new Alert({
    x: 100, y: 75,
    width: 300, height: 200,
    title: "Error", message: message,
    titleColor: "blue", bgColor: "white", textColor: "black",
    icon: "error", modal: true
});

// verbose but easier to read
// if there are one or two required arguments, its better to keep them separate
// from the options object
var alert = new Alert(app, message, {
    width: 300, height: 200,
    title: "Error", message: message,
    titleColor: "blue", bgColor: "white", textColor: "black",
    icon: "error", modal: true
});

// takes a bit of work to implement this
function Alert(parent, message, opts) {
    opts = opts || {};  // default to an empty
    this.width = opts.width === undefined ? 320: opts.width;
    this.height = opts.height === undefined ? 240: opts.height;
    this.x = opts.x === undefined ? (parent.width / 2) - ( this.width / 2) : opts.x;
    this.y = opts.y === undefined ? (parent.height / 2) - ( this.height / 2) : opts.y;
    this.title = opts.title || "Alert";
    this.titleColor = opts.titleColor || "gray";
    this.bgColor = opts.bgColor || "white";
    this.textColor = opts.textColor || "black";
    this.icon = opts.icon || "info";
    this.modal = !!opts.modal;
    this.message = message;
}
