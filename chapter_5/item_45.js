// use 'hasOwnProperty' to protect against prototype pollution

// remember:
// "nick" in dict; // membership test
// dict.nick;      // retrieval
// dict.son = 32;  // update


// Even empty objects inherit properties from 'Object.prototype'

var dict = {};

"nick" in dict;     // false
"son" in dict;      //false
"kaigi" in dict;    // false
"toString" in dict; // true
"valueOf" in dict;  // true


// a better test for dictionary entries to avoid prototype pollution
dict.hasOwnProperty("nick");      // false
dict.hasOwnProperty("toString");  // false
dict.hasOwnProperty("valueOf");   // false

// we can also guard the lookup with a test
dict.hasOwnProperty("nick") ? dict.nick : undefined;
dict.hasOwnProperty(x) ? dict[x] : undefined;

// what if we store an entry in the dictionary with the name "hasOwnProperty"
// then the prototype's method is no longer accessible

dict.hasOwnProperty = 10;
dict.hasOwnProperty("alice");
// error: dict.hasOwnProperty is not a function


// make no assumptions about 'hasOwnProperty'
var hasOwn = Object.prototype.hasOwnProperty;

// OR
var hasOwn = {}.hasOwnProperty;

hasOwn.call(dict, "nick");

// works even if the receiver has overridden its 'hasOwnProperty' method
var dict = {};

dict.nick = 16;
hasOwn.call(dict, "hasOwnProperty");  // false
hasOwn.call(dict, "nick");            // true

dict.hasOwnProperty = 10;
hasOwn.call(dict, "hasOwnProperty");  // true
hasOwn.call(dict, "nick");           // true

// avoid this boilerplate, abstract out this pattern

function Dict(elements) {
    // allow an optional initial table
    this.elements = elements || {};  // simple object
}

Dict.prototype.has = function(key) {
    // own property only
    return {}.hasOwnProperty.call(this.elements, key);
};

Dict.prototype.get = function(key) {
    // own property only
    return this.has(key) ? this.elements[key] : undefined;
};

Dict.prototype.set = function(key, val) {
    this.elements[key] = val;
};

Dict.prototype.remove = function(key) {
    delete this.elements[key];
};
