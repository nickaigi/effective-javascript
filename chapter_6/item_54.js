// Treat 'undefined' as "No Value"

/* If JavaScript has no specific value to provide, it produces 'undefined'
 * it is paradoxical to have a value that means "no value"
 */

var x;
x;  // undefined

var obj = {};
obj.x;  // undefined

function f() {
    return;
}

function g() { }

f(); // undefined
g(); // undefined

function f(x) {
    return x;
}

f();  // undefined

/* example: a library of user interface elements might support a 'highlight'
 * method for changing the background color of an element
 */
function Element() {
    this.color = "black";
}

Element.prototype.highlight = function(color) {
    this.color = color;
};

element.highlight();          // use the default color
element.highlight("yellow");  // use a custom color

/* what if we wanted to provide a way to request a random color?
 * we could use 'undefined' as a special value for that
 */
element.highlight(undefined);  // use a random color

// this goes against 'undefined's usual meaning
var preferences = '{"highlightColor":"yellow"}';

var config = JSON.parse(preferences);
// ...
element.highlight(config.highlightColor); // may be random

// a better API might use a special color name for the random case
element.highlight("random");
// if you can not use a special string, you can use 'null' or 'true'
element.highlight(null);
/* tends not to lead to very readable code, is the intention to remove the
 * highlight?
 *
 * a more explicit and descriptive option is to represent the random case
 * as an object with a random property
 */
element.highlight({ random: true });

// watch out for 'undefined' in the implentation of optional arguments
// testing for 'undefined' leads to more robust APIs

/* My implementation below
 */
function Server(port, host) {
    if (host === undefined) {
        host = "localhost"
    } 
    host = String(host);
    // ...
}

var s1 = new Server(80, "example.com");
var s2 = new Server(80);  // defaults to "localhost"

// book implementation, testing arguments.length

function Server(port, hostname) {
    if (arguments.length < 2) {
        hostname = "localhost";
    }
    hostname = String(hostname);
    // ...
}
// has similar problem to the 'element.highlight' method
// when provided an explicit argument by requesting a value from another source
// such as a configuration object, it might produce 'undefined'
var s3 = new Server(80, config.hostname);
