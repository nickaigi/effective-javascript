// Avoid excessive coercion
/* refer to item 3
 * coercions can be convenient, but can cause trouble, hiding errors and
 * leading to erratic and hard to diagnose behaviour
 */


function square(x) {
    return x * x;
}

square("3");  // 9

/* coercions are especially confusing when working with overloaded function
 * signatures.. recall the bit vector class of Item 58
 */

BitVector.prototype.enable = function(x) {
    x = Number(x);
    if (typeof x === "number") { // always true
        this.enableBit(x);
    } else {
        for (var i = 0, n = x.length; i < n; i++) {
            this.enableBit(x[i]);
        }
    }
};

/* as a general rule, it's wise to avoid coercing arguments whose tyype is used
 * to determine an overloaded function's behavior.
 */

bits.enable("100");  // number or array-like? ambiguous

// we could enforce tht only numbers and objects are accepted

BitVector.prototype.enable = function(x) {
    if (typeof x === "number") {
        this.enableBit(x);
    } else if (typeof x === "object" && x) {
        for (var i = 0, n = x.length; i < n; i++) {
            this.enableBit(x[i]);
        }
    } else {
        throw new TypeError("expected number or array-like");
    }
}; // book omits this semi-colon 4th June 2019

/* that last version of enable makes use of 'defensive programming'
 * which attempts to defend against potential errors with additional check
 */

// example of 'BitVector' constructor that has a single upfront check
function BitVector(x) {
    uint32.or(arraylike).guard(x);
    // ...
}

// lets build a utility library of guard objects with the help of a shared
// prototype object that implements the 'guard' method

var guard = {
    guard: function(x) {
        if (!this.test(x)) {
            throw new TypeError("expected "+ this);
        }
    }
};

// each guard object then implements its own 'test' method and string
// description for error messages

var uint32 = Object.create(guard);

/*
 * Zero-fill right shift https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#%3E%3E%3E_(Zero-fill_right_shift)
 *
 * The 'unsigned right shift operator' converts its argument to an unsigned
 * 32-bit integer before performing a bitwise shift.
 * shifting by zero bits then has not effect on the integer value
 */
uint32.test = function(x) {
    return typeof x === "number" && x === (x >>> 0);
};

uint32.toString = function() {
    return "uint32";
};


// implement the 'arrayLike' guard object
var arrayLike = Object.create(guard);

arrayLike.test = function(x) {
    return typeof x === "object" && x && uint32.test(x.length);
};

arrayLike.toString = function() {
    return "array-like object";
};

// we can implement "chaining" methods (item 60) such as 'or' as prototype
// methods
guard.or = function(other) {
    var result = Object.create(guard);
    var self = this;
    result.test = function(x) {
        return self.test(x) || other.test(x);
    };

    var description = this + " or " + other;
    result.toString = function() {
        return description;
    };

    return result;
};

/* Take Away: while we have to write more code, that will potentially slow down
 * code execution, the trade-off is that we can be safe in the thought that we
 * will spend less time dealing with bugs in future
 */
