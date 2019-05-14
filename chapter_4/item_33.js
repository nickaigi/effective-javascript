// make your constructors 'new'-Agnostic
// consider the User constructo
function User(name passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}

// if a caller forgets the 'new' keyword, then the funciton's receiver
// becomes the global object:

var u = User("nickaigi", "XYZ");
u;                  // undefined
this.name;          // "nickaigi"
this.passwordHash;  // "XYZ"
