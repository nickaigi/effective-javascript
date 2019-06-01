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
    this.modal = !!opts.modal; // force opts.modal to a boolean with double negation pattern !!
    this.message = message;
}

/* double NOT(!!)
 * https://stackoverflow.com/q/784929/1010338
 *     Bang, bang you're a boolean :-)
 *
 * https://stackoverflow.com/a/784946/1010338
 *     Coerces to boolean. if it was falsey (0, null, undefined) it will 'false' otherwise 'true'
 */

// lets use an object 'extension' or a 'merging' function

function Alert(parent, message, opts) {
    opts = extend({
        width: 320,
        height: 240
    });
    opts = extend({
        x: (parent.width / 2) - (opts.width / 2),
        y: (parent.height / 2) - (opts.height / 2),
        title: "Alert",
        titleColor: "gray",
        bgColor: "white",
        textColor: "black",
        icon: "info",
        modal: false
    }, opts);
    this.width  = opts.width;
    this.height = opts.height;
    this.x = opts.x;
    this.y = opts.y;
    this.title = opts.title;
    this.titleColor = opts.titleColor;
    this.bgColor = opts.bgColor;
    this.textColor = opts.textColor;
    this.icon = opts.icon;
    this.modal = opts.modal;
}

// notice: use two calls to 'extend' since the default values for 'x' and 'y' depend
// on first computing the values of 'width' and 'height'

function Alert(parent, message, opts) {
    opts = extend({
        width: 320,
        height: 240
    });
    opts = extend({
        x: (parent.width / 2) - (opts.width / 2),
        y: (parent.height / 2) - (opts.height / 2),
        title: "Alert",
        titleColor: "gray",
        bgColor: "white",
        textColor: "black",
        icon: "info",
        modal: false
    }, opts);
    extend(this, opts);
}

// typical implementation of 'extend' works by enumerating the properties of
// the source object and copying them into the target whenever they are not
// 'undefined'
function extend(target, source) {
    if (source) {
        for (var key in source) {
            var val = source[key];
            if (typeof val !== "undefined") {
                target[key] = val;
            }
        }
    }
    return target;
}
