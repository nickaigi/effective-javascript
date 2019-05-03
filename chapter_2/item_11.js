// get comfortable with closures
// Notes: undersstanding closures requires learning three essential facts
//  1. JavaScript allows you to refer to variables that were defined outside of
//     the current function.
//  2. Functions can refer to variables defined in outer functions even after
//     those outer functions have returned.
//     -- Note: functions are first class objects
function makeSandwich() {
    var magicIngredient = "peanut butter";
    function make(filling) {
        return magicIngredient + " and " + filling;
    }
    return make("jelly");
}
makeSandwich(); // "peanut butter and jelly

function sandwichMaker() {
    var magicIngredient = "peanut butter";
    function make(filling) {
       return magicIngredient + " and " + filling;
    }
    return make;
}

var f = sandwichMaker();
f("jelly");  // "peanut butter and jelly"

// even though sandwichMaker already returned, 'make' remembers the value of
// magicIngredient
//
// JavaScript functions internallly store any variable they may refer to that
// are defined in their enclosing scopes.
//
// Functions that keep track of variables from their containing scopes are
// known as 'closures'

//using an anonymous function
function bestSandwichMaker(magicIngredient) {
    return function(filling) {
        return magicIngredient + " and " + filling;
    };
}

var hamAnd = bestSandwichMaker("ham");
hamAnd("cheese");             // "ham and cheese"
hamAnd("mustard");            // "ham and mustard"

var turkeyAnd = bestSandwichMaker("turkey");
turkeyAnd("Swiss");           // "turkey and Swiss"
turkeyAnd("Provolone");       // "turkey and Provolone"
