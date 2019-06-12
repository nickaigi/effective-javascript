// Never call Asynchronous callbacks Synchronously
/* Picture a variation of 'downloadAsync' that keeps a cache(implemented as a
 * 'Dict' - Item45) to avoid downloading the same file multiple times
 */

var cache = new Dict();

function downloadCachingAsync(url, onsuccess, onerror) {
    if (cache.has(url)) {
        onsuccess(cache.get(url));  // synchronous call
        return;
    }
    return downloadAsync(url, function(file) {
        cache.set(url, file);
        onsuccess(file);
    }, onerror);
}

downloadAsync("file.txt", function(file) {
    console.log("finished");
});

console.log("starting");

downloadCachingAsync("file.txt", function(file) {
    console.log("finished"); // might happen first
});
console.log("starting");

// an application might keep a queue of files remaining to download and
// display a message to the user

downloadCachingAsync(remaining[0], function(file) {
    remaining.shift();
    // ...
});

status.display("Downloading " + remaining[0] + "...");

var cache = new Dict();

function downloadCachingAsync(url, onsuccess, onerror) {
    if (cache.has(url)) {
        var cached = cache.get(url);
        setTimout(onsuccess.bind(null, cached), 0);
        return;
    }
    return downloadAsync(url, function(file) {
        cache.set(url, file);
        onsuccess(file);
    }, onerror);
}
