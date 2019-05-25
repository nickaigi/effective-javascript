// Avoid modifying an object during enumeration
function Member(name) {
    this.name = name;
    this.friends = [];
}

var a = new Member("Alice"),
    b = new Member("Bob"),
    c = new Member("Carol"),
    d = new Member("Dan"),
    e = new Member("Eli"),
    f = new Member("Fatima");

a.friends.push(b);
b.friends.push(c);
c.friends.push(e);
d.friends.push(b);
e.friends.push(d, f);

// searching the network means traversing the social network graph
// refer to book for network diagram
// Often implemented with a work set which starts with a single root node, and
// has nodes added as they are discovered and removed as they are visited.
//
// One may be tempted to implement this traversal with a single 'for...in' loop
Member.prototype.inNetwork = function(other) {
    var visited = {};
    var workset = {};

    workset[this.name] = this;

    for (var name in workset) {
        var member = workset[name];
        delete workset[name];  // modified while enumerating
        if (name in visited) {  // don't revist member
            continue;
        }
        visited[name] = member;
        if (member === other) {  // found?
            return true;
        }
        member.friends.forEach(function(friend) {
            workset[friend.name] = friend;
        });
    }
    return false;
};

// doesn't work in many JavaScript Envs
a.inNetwork(f);  // false
// turns out a 'for...in' loop is not required to keep current with
// modifications to the object being enumerated
//
// version 2
// uses Dict that we implemented in item_45

function Dict(elements) {
    this.elements = elements || {};
    this.hasSpecialProto = false;   // has "__proto__" key?
    this.specialProto = undefined;  // "__proto__" element
}

Dict.prototype.has = function(key) {
    if (key === "__proto__") {
        return this.hasSpecialProto;
    }
    return {}.hasOwnProperty.call(this.elements, key);
};

Dict.prototype.get = function(key) {
    if (key === "__proto__") {
        return this.specialProto;
    }
    return this.has(key) ? this.elements[key] : undefined;
};

Dict.prototype.set = function(key, val) {
    if (key === "__proto__") {
        this.hasSpecialProto = true;
        this.specialProto = val;
    } else {
        this.elements[key] = val;
    }
};

Dict.prototype.remove = function(key) {
    if (key === "__proto__") {
        this.hasSpecialProto = false;
        this.specialProto = undefined;
    } else {
        delete this.elements[key];
    }
};


function WorkSet() {
    this.entries = new Dict();
    this.count = 0;
}

WorkSet.prototype.isEmpty = function() {
    return this.count === 0;
};

WorkSet.prototype.add = function(key, val) {
    if (this.entries.has(key)) {
        return;
    }
    this.entries.set(key, val);
    this.count++;
};

WorkSet.prototype.get = function(key) {
    return this.entries.get(key);
}

WorkSet.prototype.remove = function(key) {
    if (!this.entries.has(key)) {
        return;
    }
    this.entries.remove(key);
    this.count--;
};

// pick an arbitrary element of the the set

Dict.prototype.pick = function() {
    for (var key in this.elements) {
        if (this.has(key)) {
            return key;
        }
    }
    throw new Error("empty dictionary");
};

WorkSet.prototype.pick = function() {
    return this.entries.pick();
};

Member.prototype.inNetwork = function(other) {
    var visited = {};
    var workset = new WorkSet();
    workset.add(this.name, this);
    while (!workset.isEmpty()) {
        var name = workset.pick();
        var member = workset.get(name);
        workset.remove(name);
        if (name in visited) {
            continue;
        }
        visited[name] = member;
        if (member === other) {
            return true;
        }
        memember.friends.forEach(function(friend) {
            workset.add(friend.name, friend);
        });
    }
    return false;
};

/*
 * the 'pick' method is 'nondeterministic'
 * - given the same input, the output will not always be the same
 * - source of nondeterminism: 'for...in' loop may choose a different order of
 *   enumeration in different JavaScript environments.
 */


/* 
 * It is worth considering a deterministic alternative to a work-set algorithm
 * Soln. use a work-list algorithm
 * Sort items into an array instead of a set
 *
 */

Member.prototype.inNetwork = function(other) {
    var visited = {};
    var worklist = [this];
    while (worklist.length > 0) {
        var member = worklist.pop();
        if (member.name in visited) {
            continue;
        }
        visited[member.name] = member;
        if (member === other) {
            return true;
        }
        member.friends.forEach(function(friend) {
            worklist.push(friend);
        });
    }
    return false;
};
