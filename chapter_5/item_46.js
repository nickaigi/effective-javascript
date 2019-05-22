// Prefer arrays to dictionaries for ordered collections
// intuitively JavaScript objects are an unordered collection of properties

function report(highScores) {
    var result = "";
    var i = 1;
    for (var name in highScores) { //unpredictable order
        result += i + ". " + name + ": " + highScores[name] + "\n";
        i++;
    }
    return result;
}

report({Nick: 16, Son: 32, Kaigi: 64});

// "1. nick: 16\n2. Son: 32\n3. Kaigi: 64\n"

// different envs may choose to store and enumerate the properties of the object
// in different orders
// If you need to depend on the order of entries in a data structure use an array!

function report(highScores) {
    var result = "";
    for (var i = 0, n = highScores.length; i < n; i++) {
        var score = highScores[i];
        result += (i + 1) + ". " + score.name + ": " + score.points + "\n";
    }
    return result;
}

report([{name: "Nick", points: 16 },
        {name: "Son",points: 32 },
        {name: "Kaigi", points: 64}]);

// "1. Nick: 16\n2. Son: 32\n3. Kaigi: 64\n"


// another PITA is floating-point arithmetic

var ratings = {
    "The Blacklist": 0.8,
    "Warrior": 0.7,
    "Game of Thrones S8": 0.6,
    "Chernobyl": 0.9
};

// recall in item_2 rounding in floating-point arithmetic can lead to subtle
// dependencies on the order of operations. Combined with undefined order of
// enumeration, can lead to unpredictable loops

var total = 0, count = 0;
for (var key in ratings) { // unpredictable order
    total += ratings[key];
    count++;
}

total /= count;
total; // 0.75 in my env

// lets play around with the order
var total1 = (0.8 + 0.7 + 0.6 + 0.9) / 4;  // 0.75
var total2 = (0.6 + 0.8 + 0.7 + 0.9) / 4;  // 0.7499999999999999

// in this case, best use integer values because integer addition can be
// performed in any order
// The sensitive division operations are performed only at the very end
// after the loop is complete
var total3 = (8 + 7 + 6 + 9) / 4 / 10;   // 0.75
var total4 = (6 + 8 + 7 + 9) / 4 / 10;   // 0.75
