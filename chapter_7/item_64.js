// Use recursion for asynchronous loops
// consider this function

function downloadOneSync(urls) {
    for (var i = 0, n = urls.length; i < n; i++) {
        try {
            return downloadOneSync(urls[i]);
        } catch (e) { }
    }
    throw new Error("all downloads failed");
}

// this won't work because we can't suspend a loop and resume it in a
// callback

function downloadOneAsync(urls, onsuccess, onerror) {
    for (var i = 0, n = url.length; i < n; i++) {
        downloadOneAsync(urls[i], onsuccess, function(error) {
            // ?
        });
        // loop continues
    }
    throw new Error("all downloads failed");
}

/* we need to implement somethings that acts like a loop, but doesn't continue
 * executing until we explicitly say so.
 * soln.
 * implement the loop as a funciton, so we can decide when to start each
 * iteration
 */

function downloadOneAsync(urls, onsuccess, onfailure) {
    var n = urls.length;

    function tryNextURL(i) {
        if (i >= n) {
            onfailure("all downloads failed");
            return;
        }
        downloadAsync(urls[i], onsuccess, function() {
            tryNextURL(i + 1);
        });
    }

    tryNextURL(0);
}

// local tryNextURL function is 'recursive'
// to many recursive calls can max out the stack

function countdown(n) {
    if (n === 0) {
        return "done";
    } else {
        return countdown(n - 1);
    }
}

countdown(100000);  // error: max call stack size exceeded
