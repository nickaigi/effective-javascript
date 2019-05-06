// get comfortable using higher order functions
//
// Higher-order functions used to be a shibboleth of the monks of functional
// programming, an esoteric term for what seemed like an advanced programming
// technique.
//
// author uses new words:
// shibboleth - a custom, principle, or belief distinguishing a particular
//              class or group of people, especially a long standing one
//              regarded as outmoded or no longer important.
//
// esoteric - intended for or likely to be understood by only a small number
//            of people with a specialized knowledge of interest.
//
// Simply higher order functions are functions that take other functions as
// arguments or return functions as their result.

function compareNumbers(x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}

[3, 1, 4, 1, 5, 9].sort(compareNumbers); // [1, 1, 3, 4, 5, 9]

// alternatively

[3, 1, 4, 1, 5, 9].sort(function(x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 1, 3, 4, 5, 9]

var names = ["Nick", "Anne", "Zawadi"];
var upper = [];
for (var i = 0, n = names.length; i < n; i++) {
    upper[i] = names[i].toUpperCase();
}
upper;

// can be re-written
var names = ["Nick", "Anne", "Zawadi"];
var upper = names.map(function(name) {
    return name.toUpperCase();
});
