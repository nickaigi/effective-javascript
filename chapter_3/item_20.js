// use 'call' to call methods with a custom receiver
// f(arg1, arg2, arg3)
// is similar to calling
// f.call(obj, arg1, arg2, arg3);
// where obj is the receiver object

var table = {
    entries: [],
    addEntry: function(key, value) {
        this.entries.push({key: key, value: value });
    },
    forEach: function(f, thisArg) {
        var entries = this.entries;
        for (var i = 0, n = entries.length; i < n; i++) {
            var entry = entries[i];
            f.call(thisArg, entry.key, entry.value, i);
        }
    }
};
