// Avoid nonstandard stack inspection properties
//
// many Js envs have historically provided some capabilities to inspect the
// 'call stack'
//
// in some older host envs, the 'arguments' object came with two additional
// properties:
//      arguments.callee - the function that was called with arguments
//      arguments.caller - function that called it
//
// 'arguments.callee' is still supported, but only useful to anonymous
// functions to refer to themeselves recursively
var factorial = (function(n) {
    return (n <= 1) ? 1 : (n * arguments.callee(n - 1));
});

// better just have a function refer to itself by its name
function factorial(n) {
    return (n <= 1) ? 1 : (n * factorial(n - 1));
}

// arguments.caller refers to the function that made the call with the given
// arguments object
// WARNING: Has been removed from most environments for security
// 
// Caveat Emptor: some envs have a 'caller' property which refers to the
// functions most recent caller
function revealCaller(){
    return revealCaller.caller;
}

function start() {
    return revealCaller()
}

start() === start; // true
