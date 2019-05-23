// Never add enumerable properties to 'Object.prototype'
// E.g. 'allkeys'

Object.prototype.allKeys = function() {
    var result = [];
    for (var key in this) {
        result.push(key);
    }
    return result;
};

// this method pollutes even its own results
({a: 1, b: 2, c: 3}).allKeys();  // ["a", "b", "c", "allKeys"]
