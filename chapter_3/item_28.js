// Avoid relying on 'toString' method of functions
//
// JavaScript functions can reproduce their source code as a string!!!
// Mind === Blown;  // true
var myF =(function(x) {
    return x + 1;
}).toString();  // "function(x) {\n    return x + 1;\n}"

console.log(myF);

// but this has limitations
// especially with functions produced by built-in libraries of the host
// environment

var hiddenF = (function(x) {
    return x + 1;
}).bind(16).toString();  // "function () { [native code] }"

console.log(hiddenF);
