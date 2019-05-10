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
