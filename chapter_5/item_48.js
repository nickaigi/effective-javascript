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
