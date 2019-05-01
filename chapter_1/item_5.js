// avoid using == with Mixed Types
// == is the non-strict equality
// === is strict

"1.0e0" == { valueOf: function() { return true; } };   // true
// implicit coercion:
// the string "1.0e0" parses as the number 1
// the object is converted to a number by calling 'valueOf' and converting the
// result(true) to a number which produces 1

var today = new Date();

console.log(today.getMonth() + 1);  // remember: January is month 0

console.log(today.getDate());
