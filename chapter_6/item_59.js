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
