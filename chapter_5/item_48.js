// Avoid modifying an object during enumeration
function Member(name) {
    this.name = name;
    this.friends = [];
}

var a = new Member("Nick"),
    b = new Member("Son"),
    c = new Member("Kaigi"),
    d = new Member("Newt"),
    e = new Member("On"),
    f = new Member("Kahones");

a.friends.push(b);
b.friends.push(c);
c.friends.push(e);
d.friends.push(b);
e.friends.push(d, f);

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
