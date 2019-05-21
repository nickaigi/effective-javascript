// Build lightweight Dictionaries from direct instances of 'object'


var dict = { nick: 16, son: 32, kaigi: 64};
var people = [];

// JavaScript provieds 'for...in' loop to enumerate the property names of an
// object
for (var name in dict) {
    people.push(name + ": " + dict[name]);
}

people; // ["nick: 16", "son: 32", "kaigi: 64"]

// 'for...in' loop enumerates an object's inherited properties as well as its
// "own" properties

function NaiveDict() {}

NaiveDict.prototype.count = function() {
    var i = 0;
    for (var name in this) { // counts every property
        i++;
    }
    return i;
};

NaiveDict.prototype.toString = function() {
    return "[object NaiveDict]";
};

var dict = new NaiveDict();

dict.nick = 16;
dict.son = 32;
dict.kaigi = 64;

dict.count(); // 5

// problem is that we are using the same object to store both the fixed
// properties (count, toString) and the variable entries (nick, son, kaigi)
