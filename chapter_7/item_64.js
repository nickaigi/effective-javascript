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
