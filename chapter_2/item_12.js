// understand variable hoisting
//
// Remember: 
// - JavaScript supports 'lexical scoping'. A referece to a variable 'foo' is
//   bound to the nearest scope in which 'foo' was declared.
//
// - JavaScript does not support 'block scoping': variable definations are not
//   scoped to their nearest enclosing statement/block, but rather to their
//   containing function.

// my own version of player object and others
// using a function constructor
function Player(name) {
    this.score = 0;
    this.name = name;
    this.setScore = function(score) {
        this.score = score;
    };
};

var nick = new Player("nick");
nick.setScore(25);

var tom = new Player("tom");
tom.setScore(35);

var newt = new Player("newt");
newt.setScore(15);

var players = [nick, tom, newt];

var nate = new Player("nate");
nate.setScore(5);

function isWinner(player, others) {
    var highest = 0;
    for (var i = 0, n = others.length; i < n; i++) {
        var player = others[i];
        if (player.score > highest) {
            highest = player.score;
        }
    }
    return player.score > highest;
}
