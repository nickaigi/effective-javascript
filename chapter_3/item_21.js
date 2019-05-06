// use 'apply' to call functions with different numbers of arguments
//
// variadic or variable-arity function
// -----------------------------------
// A function that takes any number of arguments is known as a 'variadic function'
// 'arity' of a function is the number of arguments it expects
//
// average(1, 2, 3);                    // 2
// average(1);                          // 1
// average(3, 1, 4, 1, 5, 9, 2, 6, 5);  // 4
// average(2, 7, 1, 8, 2, 8, 1, 8);     // 4.625
//
//
// fixed arity version of 'average'
// -------------------------------
// would probably take a single argument containing an array of values
//
// averageOfArray([1, 2, 3]);                    // 2
// averageOfArray([1]);                          // 1
// averageOfArray([3, 1, 4, 1, 5, 9, 2, 6, 5]);  // 4
// averageOfArray([2, 7, 1, 8, 2, 8, 1, 8]);     // 4.625
//
//
// 'apply'
// ------
// takes an array of args and calls the function as if each element of the
// array were an individual arg of the call
//
// 'apply' takes a first arg that specifies the binding of this for the function
// being called
function Student(name, score){
    this.name = name;
    this.score = score;
}


var students = [new Student("Nick", 20), new Student("Anne", 21), new Student("Nate", 30)];

function getAllScores() {
    var result = [];
    for(var i = 0, n = students.length; i < n; i ++) {
        result[i] = students[i].score;
    }
    return result;
}

function average() {
    var result = 0, len = arguments.length;
    for (var i = 0; i < len; i++) {
        result += arguments[i];
    }
    return result / len;
}

var scores = getAllScores()

average.apply(null, scores);               // 23.666666666666668

// equivalent to: if scores had 3 items
average(scores[0], scores[1], scores[2]);  // 23.666666666666668
