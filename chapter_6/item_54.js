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

element.highlight();          // use the default color
element.highlight("yellow");  // use a custom color

/* what if we wanted to provide a way to request a random color?
