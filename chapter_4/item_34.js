// Store methods on Prototypes
// We could have easily defined the User class from 'Item 30' as follows

function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
    this.toString = function () {
        return "[User " + this.name + "]";
    };
    this.checkPassword = function(password) {
        return hash(password) === this.passwordHash;
    };
}
