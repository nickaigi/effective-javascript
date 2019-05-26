// prefer iteration methods to loops

for (var i = 0; i <= n; i++) { console.log(); }     // extra end iteration

for (var i = 1; i < n; i++) { console.log(); }      // missing first iteration

for (var i = n; i => 0; i--) { console.log(); }     // extra start iteration

for (var i = n - 1; i > 0; i--) { console.log(); }  // missing last iteration

/* many ways to F* it up. Use 'Array.protototype.forEach' instead
 * instead of writing
 */

for (var i = 0, n = players.length; i < n; i++) {
    players[i].score++;
}

// write

players.forEach(function(p) {
    p.score++;
});

/* concise, readable, eliminates the termination condition and any mention of
 * array indices.
 */

/* its common to build a new array for doing something to each element of
 * another array. Do this with a loop:
 */

var trimmed = [];
for (var i = 0, n = input.length; i < n; i++) {
    trimmed.push(input[i].trim());
}

// using forEach
var trimmed = [];
input.forEach(function(s) {
    trimmed.push(s.trim());
});

/* this is so common that ES5 introduced 'Array.prototype.map'
 */

var trimmed = input.map(function(s) {
    return s.trim();
});

/* its also common to compute a new array containing only some of the elements
 * of an existing array. 'Array.prototype.filter' takes a 'predicate'
 * (a function that produces a truthy value if the element should be kept in
 * in the new array, and a falsy value if the element should be droppped)
 */

listings.filter(function(listing) {
    return listing.price >= min && listing.price <= max;
});

// we could define our own

function takeWhile(a, pred) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        if (!pred(a[i], i)) {
            break;
        }
        result[i] = a[i];
    }
    return result;
}

var prefix = takeWhile([1, 2, 3, 4, 8, 16, 32], function(n) {
    return n < 10;
});  // [1, 2, 3, 4, 8]
