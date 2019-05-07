// never modify 'arguments' object
// Js arrays have a 'shift' method which removes the first element of an array
// and shifts all the subsequent elements over by one.
//
// 'arguments' is not an instance of the standard Array type.

var names = ["Nick", "Son", "Mr", "Kaigi"];

names.shift();

names;  //  ["Son", "Mr", "Kaigi"]

function callMethod(obj, method) {
    var shift = [].shift;
    shift.call(arguments);
    shift.call(arguments);
    return obj[method].apply(obj, arguments);
}

var obj = {
    add: function(x, y) { return x + y; }
};

callMethod(obj, "add", 17, 25);
// Uncaught TypeError: Cannot read property 'apply' of undefined
//
// fails because 'arguments' object is not a copy of the function's arguments
// all named arguments are 'aliases' to their corresponding indices in the
// arguments object.
// So 
// 'obj' alias for arguments[0]
// 'method' alias for arguments[1]
// even after we remove elements from the 'arguments' object via 'shift'

// L15, L16 we called shift twice, to shift the arguments array until we
// arrive at [17, 25]
// just feels like a hack!

// function parameters in 'strict' mode do not alias their 'arguments' object
function strict(x) {
    "use strict";
    arguments[0] = "modified";
    console.log(arguments);
    return x === arguments[0];
}

function nostrict(x) {
    arguments[0] = "modified";
    console.log(arguments);
    return x === arguments[0];
}

strict("unmodified");    // false
// why does this happen?
// x = "unmodified" and arguments[0] = "unmodified"
nostrict("unmodified");  // true
