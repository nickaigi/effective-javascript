// Don't block the event queue on computation
// it is easy to stall an application without even a single function call

while(true) { }

/* what to do if your applicatin needs to perform expensive computations?
 * A simple solution is to use the web client platform's
 * 'Worker API'
 * E.g. a game with AI that may need to search through a large space of
 * possible moves. The game might start up by spawning a dedicated worker
 * for computing moves
 */

var ai = Worker("ai.js");

/* spawns a new concurrent thread of execution with its won separate event
 * queue, using the source file 'ai.js' as the worker's script
 * The worker runs in a completely isolated state: with no direct access to any
 * of the objects of the application.
 *
 * The worker and the application can communicate with each other by sending
 * 'messages' to each other in the form of strings
 */

var userMove = /* ... */;

ai.postMessage(JSON.stringify({
    userMove: userMove
}));

// to process responses from the worker, the game registers an event handler

ai.onmessage = function(event) {
    executeMove(JSON.parse(event.data).computerMove);
};

// 'ai.js' instructs the worker to listen to messages and perform the work
// required to compute next moves

self.onmessage = function(event) {
    // parse the user move
    var userMove = JSON.parse(event.data).userMove;

    // generate the next computer move
    var computerMove = computeNextMove(userMove);

    // format the computer move
    var message = JSON.stringify({
        computerMove: computerMove
    });

    self.postMessage(message);
};

function computeNextMove(userMove) {
    // ...
}

/* not all JavaScript platforms provide an API like 'Worker' and sometimes the
 * overhead of passing messages can become too costly
 *
 * Here is another alternative: consider the work-list algo from item48
 */

Member.prototype.inNetwork = function(other) {
    var visited = {};
    var worklist = [this];
    while (worklist.length > 0) {
        var member = worklist.pop();
        // ...
        if (member === other) { // found?
            return true;
        }
        // ...
    }
    return false;
};

/* what if the 'while' loop is too expensive?
 * we can convert 'inNetwork' to an asynchronous function by adding a callback
 * parameter and as in item 64, replacing the while loop with an asynchronous,
 * recursive function
 */

Member.prototype.inNetwork = function(other, callback) {
    var visited = {};
    var worklist = [this];
    function next() {
        if (worklist.length === 0) {
            callback(false);
            return;
        }
        var member = worklist.pop();
        // ...
        if (member === other) { // found?
            callback(true);
            return;
        }
        // ...
        setTimeout(next, 0); // schedule the next iteration
    }
    setTimeout(next, 0); // schedule the first iteration
};

/* in place of 'while', we've written a local function 'next' which performs a
 * single iteration of the loop and then schedules the next iteration to run
 * asynchronously in the application event queue
 *
 * 'setTimout' API is available in multiple JavaScript envs for registering
 * next to run after a minimal amount of elapsed time (0 ms)
 *
 * in browsers, 'setTimeout' is throttled to a min of timeout of 4 ms and there
 * are alternatives using 'postMessage' that enqueue an event immediately
 */


// lets fine tune the algorithm
Member.prototype.inNetwork = function(other, callback) {
    // ...
    function next() {
        for (var i = 0; i < 10; i++) {
            // ...
        }
        setTimeout(next, 0);
    }
    setTimeout(next, 0);
};
