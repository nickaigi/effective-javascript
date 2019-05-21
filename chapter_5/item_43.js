// Build lightweight Dictionaries from direct instances of 'object'


var dict = { nick: 16, son: 32, kaigi: 64};
var people = [];

// JavaScript provieds 'for...in' loop to enumerate the property names of an
// object
for (var name in dict) {
    people.push(name + ": " + dict[name]);
}

people; // ["nick: 16", "son: 32", "kaigi: 64"]
