// Prefer Array literals to the Array constructor

// using a literal
var a = [1, 2, 3, 4, 5];

// using the constructor
var a = new Array(1, 2, 3, 4, 5);

// some genius might rebound the 'Array' variable
function f(Array) {
    return new Array(1, 2, 3, 4, 5);
}

f(String);  // String {"1"}

// you have to be sure that no one has modified the global 'Array" variable
Array = String;

new Array(1, 2, 3, 4, 5);  // String {"1"}

// watchout for this special condition

var x = ["hello"];

var y = new Array("Hello");

// statement 23 and 25 behave the same

var x = [17];
var y = new Array(17);
/* if you call the 'Array' constructor with a single numerica argument,
 * it attempts to create an 'Array' with no elements but whose 'length'
 * property is the given argument
 */
