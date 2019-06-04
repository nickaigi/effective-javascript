// Distinguish between Array and Array-Like
// consider two different class APIs
// bit vectors: ordered collection of bits

var bits = new BitVector();

bits.enable(4);
bits.enable([1, 3, 8, 17]);

bits.bitAt(4);  // 1
bits.bitAt(8);  // 1
bits.bitAt(9);  // 0


var set = new StringSet();

set.add("Hamlet");
set.add(["Rosencrantz", "Guildenstern"]);
set.add({ "Ophelia": 1, "Polonius": 1, "Horatio": 1 });

set.contains("Polonius");      // true
set.contains("Guildenstern");  // true
set.contains("Falstaff");      // false

BitVector.prototype.enable = function(x) {
    if (typeof x === "number") {
        this.enableBit(x);
    } else { // assume x array-like
        for (var i = 0, n = x.length; i < n; i++) {
            this.enableBit(x[i]);
        }
    }
};

/* how do we distinguish between arrays and objects?
 * JavaScript 'array's are objects
 * What we want really want to do is separate out array objects from
 * nonarray objects
 */

dimensions.add({
    "length": 1, // implies array-like??
    "height": 1,
    "width": 1
});

StringSet.prototype.add = function(x) {
    if (typeof x === "string") {
        this.addString(x);
    } else if (x instanceof Array) { // too restrictive
        x.forEach(function(s) {
            this.addString(s);
        }, this);
    } else {
        for (var key in x) {
            this.addString(key);
        }
    }
};

// soln. ES5 has 'Array.isArray'
StringSet.protototype.add = function(x) {
    if (typeof x === "string") {
        this.addString(x);
    } else if (Array.isArray(x)) {  // tests for true arrays
        x.forEach(function(s) {
            this.addString(s);
        }, this);
    } else {
        for (var key in x) {
            this.addString(key);
        }
    }
};

// if your env doesn't support ES5, you can use the standard
// 'Object.prototype.toString' method to test whether an object is an array

var toString = Object.prototype.toString;

function.isArray(x) {
    return toString.call(x) === "[object Array]";
}

function MyClass() {
    this.keys = new StringSet();
    // ...
}

MyClass.prototype.update = function() {
    this.keys.add([].slice.call(arguments));
};

/* MDN recommends you use this pollyfil if you find that your env doesn't have
 * Array.isArray
 *
 * Same as what is recommended by the book
 */
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
