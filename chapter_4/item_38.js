// Call SuperClass contructors form Subclass constructors
// 
// Scene Graph: is a collection of objects describing a scene in a visual
// program such as a game or graphical simulation.
//
// A simple scene contains a collection of all of the objects in the scene,
// known as 'Actors', a table of preloaded image data for the actors and a
// reference to the underlying graphics display, often known as the 'context'

function Scene(context, width, height, images) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.images = images;
    this.actors = [];
}

Scene.prototype.register = function(actor) {
    this.actors.push(actor);
};

Scene.prototype.unregister = function(actor) {
    var i = this.actors.indexOf(actor);
    if (i >= 0) {
        this.actors.splice(i, 1);
    }
};

Scene.prototype.draw = function() {
    this.context.clearRect(0, 0, this.width, this.height);
    for (var a = this.actors, i = 0, n = a.length;
        i < n;
        i++) {
        a[i].draw();
    }
};
