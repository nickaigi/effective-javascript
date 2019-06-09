// Use nested or named callbacks for asynchronous sequencing

downloadAsync("file.txt", function(file) {
    console.log("finished");
});

console.log("starting");

// what if we need to lookup a URL in an asynchronous db and then download the
// contents of that URL... its impossible to initiate both requests back-to-back

db.lookupAsync("url", function(url) {
    // ?
});

downloadAsync(url, function(text) { // error: url is not bound
    console.log("contents of " + url + ": " + text);
});

/* can't work because the URL resulting from the database lookup is needed as
 * the argument to 'downloadAsync' but it's not in scope
 *
 * Soln. use nesting, thanks to the power of closures
 */

db.lookupAsync("url", function(url) {
    downloadAsync(url, function(text) {
        console.log("contentes of " + url + ": " + text);
    });
});

/* nesting asynchronous operations is easy, but quickly gets out of hand
 * when scalling up to longer sequences
 */
db.lookupAsync("url", function(url) {
    downloadAsync(url, function(text) {
        downloadAsync("a.txt", function(a) {
            downloadAsync("b.txt", function(b) {
                downloadAsync("c.txt", function(c) {
                    // ...
                });
            });
        });
    });
});


/* one way to mitigate excessive nesting is to lift nested callbacks back out as
 * named functions and pass them any additional data they need as extra args
 * The two-step example L12-L18 can be:
 */

db.lookupAsync("url", downloadURL);

function downloadURL(url) {
    downloadAsync(url, function(text) { // still nested
        showContents(url, text);
    });
}

function showContents(url, text) {
    console.log("contents of " + url ": " + text);
}
