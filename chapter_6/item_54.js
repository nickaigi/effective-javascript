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

var element = new Element();

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
// if config doesn't provide a hostname, the above implementation ends with
// hostname 'undefined'
// Book says: its better to test for 'undefined'

function Server(port, hostname) {
    if (hostname === undefined) {
        hostname = "localhost";
    }
    hostname = String(hostname);
    // ...
}

// one can test whether hostname is truthy
function Server(port, hostname) {
    hostname = String(hostname || "localhost");
    // ...
}
/* logical OR ||
 * returns the first argument if it is a truthy value and otherwise returns the
 * second argument
 *
 * BEWARE: Truthiness is not always a safe test. If a function should accept
 * the empty string as a legal value, a truthy test will override the empty
 * string and replace it with the default value.
 *
 * Similarly, function that accepts a number should not use a truthy test if it
 * allows 0 (or NaN, although it's less common) as an acceptable value.
 */

var c1 = new Element(0, 0);  // width: 0, height: 0
var c2 = new Element();      // width: 320, height: 240;

function Element(width, height) {
    this.width = width || 320;    // wrong test
    this.height = height || 240;  // wrong test
    // ...
}

var c1 = new Element(0, 0);
c1.width;   // 320
c1.height;  // 240

/* wrong values, we explicitly set our values to 0
 * Soln. use a mover verbose test for undefined
 */

function Element(width, height) {
    this.width = width === undefined ? 320: width;
    this.height = height === undefined ? 240: height;
    // ...
}

var c1 = new Element(0, 0);

c1.width;   // 0
c1.height;  // 0

var c2 = new Element();

c2.width;   // 320
c2.height;  // 240
