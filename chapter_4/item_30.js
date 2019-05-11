// understand the difference between 'prototype', 'getPrototypeOf' and __proto__
// JavaScript's inheritance mechanism is based on 'prototypes' rather than
// classes.
//
// Js is the first object-oriented language that Nickson has encountered
// without clasess
//
//
// Prototypes involve thre separate but related accessors:
//      - 'C.prototype': is used to establish the prototype of objects created
//        by 'new C()'
//      
//      - 'Object.getPrototypeOf(obj)' is the standard ES5 mechanism for
//        retrieving 'obj's prototype object
//
//      - 'obj.__proto__' is a nonstandard mechanism for retrieving 'obj's
//        prototype object


// make use of Ceasar cipher to hash our password https://en.wikipedia.org/wiki/Caesar_cipher
// will use a Object (dictionary) lookup for the plain and cipher alphabet
var ceasar = {
    plain: {
        "A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6,  "H": 7,  "I": 8,
        "J": 0, "K": 1, "L": 2, "M": 3, "N": 4, "O": 5, "P": 6,  "Q": 7,  "R": 8,
        "S": 0, "T": 1, "U": 2, "V": 3, "W": 4, "X": 5, "Y": 6,  "Z": 7,
    }
function hash(password) {
    // using Ceasar cipher - Don't use in production
    var plainStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var cipherStr = "XYZABCDEFGHIJKLMNOPQRSTUVW".split("");
    var result = [], arrPass = password.split("");
}
function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}


User.prototype.toString = function() {
    return "[User " + this.name + "]";
};


User.prototype.checkPassword = function(password) {
    return hash(password) === this.passwordHash;
};

var u = new User("nkaigi",
    "0ef33ae791068ec64b502d6cb0191387");

Object.getPrototypeOf(u) === User.prototype; // true

// if your env doesn't support ES5
u.__proto__ === User.prototype
