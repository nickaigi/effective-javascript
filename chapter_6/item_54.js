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
