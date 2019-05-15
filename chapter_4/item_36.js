// Store instance state only on instance objects

function Tree(x) {
    this.value = x;
}

Tree.prototype = {
    children: [],
    addChild: function(x) {
        this.children.push(x);
    }
};
