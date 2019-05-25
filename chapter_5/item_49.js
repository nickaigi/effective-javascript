// prefer 'for' loops to 'for..in' loops for array iteration

var scores = [98, 74, 85, 77, 93, 100, 89];
var total = 0;
for (var score in scores) {
    total += score;
}

var mean = total / scores.length;
/*
 * if ,like me, you thought the value of mean is 88, don't beat yoursel up too
 * much. This program confuses keys and values.
 * A 'for...in' loop always enumerates the keys.
 *
 * (0 + 1 + 2 + 3 + 4 + 5 + 6) / 7 = 21 is also wrong
 * Remember that object property keys are always strings, even the indexed
 * properties of an array
 * So the += operation ends up performing string concatenation resulting in an
 * unintended total of "00123456"
 * End result: mean value of 17636.571428571428
 */


var scores = [98, 74, 85, 77, 93, 100, 89];
var total = 0;
for (var n = 0, i = scores.length; n < i; n++) {
    total += score[n];
}

var mean = total / scores.length;  // 88

/*
 * if the loop body does not modify the array, the loop behavior is identical
 * to simply recalculating the array length on every iteration
 *
 * for (var i = 0; i < scores.length; i++) { ... }
 *
 * you improve readerbility of your code by communicating that the loop's
 * termination condition is simple and fixed
