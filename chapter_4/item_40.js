// avoid inheriting form standard classes


// a library for operating on file systems might wish to create an abstraction
// of directories that inherits all the behaviour of arrays
function Dir(path, entries) {
    this.path = path;
    for (var i = 0, n = entries.length; i < n; i++) {
        this[i] = entries[i];
    }
}

Dir.prototype = Object.create(Array.prototype);
// wrong to extend Array

// this approach breaks the expected behavior of the length property of arrays:

var dir = new Dir("/tmp/mysite", ["index.html", "script.js", "style.css"]);

dir.length;   // 0

// fails because 'length' property operates specifically on objects that are
// marked internally as 'true' arrays
