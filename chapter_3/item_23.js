// never modify 'arguments' object
// Js arrays have a 'shift' method which removes the first element of an array
// and shifts all the subsequent elements over by one.
//
// 'arguments' is not an instance of the standard Array type.

var names = ["Nick", "Son", "Mr", "Kaigi"];

names.shift();

names;  //  ["Son", "Mr", "Kaigi"]
