// Reuse generic array methods on array-like objects

/* A good example is a function's 'arguments' object. 'arguments' does not
 * inherit from 'Array.prototype' so we can not simply call 'arguments.forEach'
 * to iterate over each argument. We have to extract a reference to the
 * 'forEach' method object and use its 'call' method
 */

function highlight() {
    [].forEach.call(arguments, function(widget) {
        widget.setBackground("yellow");
    });
}
