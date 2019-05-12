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
// PLAIN "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// CIPHER "XYZABCDEFGHIJKLMNOPQRSTUVW"

var alphabet = {
    plain: {
        "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7,  "H": 8,
        "I": 9, "J": 10, "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16,
        "Q": 17,  "R": 18, "S": 19, "T": 20, "U": 21, "V": 22, "W": 23,
        "X": 24, "Y": 25,  "Z": 26
    },
    cipher: {
        "X": 1, "Y": 2,  "Z": 3, "A": 4, "B": 2, "C": 6, "D": 7, "E": 8,
        "F": 9, "G": 10,  "H": 11, "I": 12, "J": 13, "K": 14, "L": 15, "M": 16,
        "N": 17, "O": 18, "P": 19, "Q": 20,  "R": 21, "S": 22, "T": 23, "U": 24,
        "V": 25, "W": 26
    }
};

function hash(password) {
    var result = [], arrPass = password.toUpperCase().split("");
    for(var i = 0; i < arrPass.length; i++) {
        result.push(
            alphabet.cipher[
                arrPass[i]
            ]
        );
    }
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
    "strongpassword");

Object.getPrototypeOf(u) === User.prototype; // true

// if your env doesn't support ES5
u.__proto__ === User.prototype
