// use 'bind' to extract methods with a fixed receiver

var buffer = {
    entries: [],
    add: function(s) {
        this.entries.push(s);
    },
    concat: function() {
        return this.entries.join("");
    }
};

var source = ["867", "-", "5309"];
// source.forEach(buffer.add); // error
// fails because 'forEach' uses the global object as the receiver.
// fix
source.forEach(buffer.add, buffer);
