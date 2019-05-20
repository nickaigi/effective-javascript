// avoid reckless monkey-patching
// new word:
// - inveigh: speak or write about (something) with great hostility

// the appeal of moneky-patching lies in its power. Are arrays missing a
// useful method? Just add it yourself:

Array.prototype.split = function(i) {  // alternative 1
    return [this.slice(0, i), this.slice(i)];
};
