// avoid reckless monkey-patching
// new word:
// - inveigh: speak or write about (something) with great hostility

// the appeal of moneky-patching lies in its power. Are arrays missing a
// useful method? Just add it yourself:

Array.prototype.split = function(i) {  // alternative 1
    return [this.slice(0, i), this.slice(i)];
};

// The slice() method returns a shallow copy of a portion of an array into a
// new array object selected from 'begin' to 'end' (end not included).
// The original array will not be modified.

var myArr = [1,2,3,4,5,6,7,8]
myArr.split(4);  // [[1, 2, 3, 4], [5, 6, 7, 8]]


// problems scenario:
// multiple libraries monkey-patch the smae prototypes in incompatible ways.
// Another library might monkey-patch Array.prototype with a method of the same
// name
Array.prototype.split = function() { // alternative 2
    var i = Math.floor(this.length / 2);
    return [this.slice(0, i), this.slice(i)];
};

// RECOMENDED: any library that modifies shared protoypes such as
// 'Array.prototype' should clearly document that it does so.
