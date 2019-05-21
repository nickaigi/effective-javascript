// use 'null' prototypes to prevent prototype pollution
// why not just make it impossible to begin with
function C() {}

C.prototype = null;

// instantiating this constructor still results in instances of 'Object'
var o = new C();
Object.getPrototypeOf(o) === null;              // false
Object.getPrototypeOf(o) === Object.prototype;  // false

// ES5 offers a standard way to create an object with no prototype
var x = Object.create(null);
Object.getPrototypeOf(x) === null;  // true
