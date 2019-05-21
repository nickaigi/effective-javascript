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
//
// A similar mistake is to use the 'Array' type to represent dictionaries
// example below
// this code is vulnerable to 'prototype pollution'
// where properties on a prototype object can cause unexpected properties to
// appear when enumerating dictionary entries

var dict = new Array();

dict.nick = 16;
dict.son = 32;
dict.kaigi = 64;

dict.nick; // 16

// Eg another library in the application may decide to add some convenience
// methods to 'Array.prototype'

Array.prototype.first = function() {
    return this[0];
};

Array.prototype.last = function() {
    return this[this.length - 1];
};

// now try to enumerate elements of the array

var names = [];

for (var name in dict) {
    names.push(name);
}

names;  // ["nick", "son", "kaigi", "first", "last"]

// Cardinal Rule: only use direct instances of 'Object' as dictionaries

var dict = {};

dict.nick = 16;
dict.son = 32;
dict.kaigi = 64;

var names = [];

for (var name in dict) {
    names.push(name);
}

names;  // ["nick", "son", "kaigi"]

// While this implentatin is not safe from pollution,
// but by using 'Object' we localize the risk to 'Object.prototype' alone
//
// see item_47: NEVER add properties to 'Object.prototype' that could pollute
// a 'for...in' loop
