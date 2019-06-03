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
