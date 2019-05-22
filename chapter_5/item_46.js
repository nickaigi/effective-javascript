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

report([{name: "Nick", points: 16 },
        {name: "Son",points: 32 },
        {name: "Kaigi", points: 64}]);
