// make your constructors 'new'-Agnostic
// consider the User constructo
function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}

// if a caller forgets the 'new' keyword, then the funciton's receiver
// becomes the global object:

var u = User("nickaigi", "XYZ");
u;                  // undefined
this.name;          // "nickaigi"
this.passwordHash;  // "XYZ"

// if the 'User' function is defined as ES5 strict code, then the receiver
// defaults to 'undefined'
function User(name, passwordHash) {
    "use strict";
    this.name = name;
    this.passwordHash = passwordHash;
}

var u = User("nickaigi", "XYZ"); // TypeError: can not set property name of undefined

// check that the receiver value is an instance of 'User'
function User(name, passwordHash) {
    if (!(this instanceof User)) {
        return new User(name, passwordHash);
    }
    this.name = name;
    this.passwordHash = passwordHash;
}
