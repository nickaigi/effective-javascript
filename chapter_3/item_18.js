// understand the difference between:
//  1. Function
//  2. Method
//  3. Constructor calls


// function call
function hello(username) {
    return "hello, " + username;
}
hello("Polynikes");  // "hello, Polynikes"


// methods in JavaScript are object peroperties that happen to be functions
var obj = {
    hello: function() {
        return "hello, " + this.username;
    },
    username: "Kalistos",
};

obj.hello(); // "hello, Kalistos"
