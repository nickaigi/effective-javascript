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

// can't work

db.lookupAsync("url", function(url) {
    downloadAsync(url, function(text) {
        console.log("contentes of " + url + ": " + text);
    });
});
