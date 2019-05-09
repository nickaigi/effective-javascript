// prefer closures to strings for encapsulating code
// do we write a string, then pass to 'eval' to perform a function
// OR
// write a proper function?
// When in doubt, use a function
var count = 0;

function f(){
    console.log(++count);
}

function repeat(n, action) {
    for (var i = 0; i < n; i++) {
        eval(action);
    }
}

var start = [], end = [], timings = [];
repeat(1000,
    "start.push(Date.now()); f(); end.push(Date.now())");
for (var i = 0, n = start.length; i < n; i++) {
    timings[i] = end[i] - start[i];
}
