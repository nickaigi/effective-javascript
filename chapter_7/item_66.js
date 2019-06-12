// Use a counter to perform concurrent operations

/* concurrent logic is subtle and easy to get wrong. The following
 * implementation has a devious little flaw
 */

function downloadAllAsync(urls, onsuccess, onerror) {
    var result = [], length = urls.length;

    if (length === 0) {
        setTimeout(onsuccess.bind(null, result), 0);
        return;
    }

    urls.forEach(function(url) {
        downloadAsync(url, function(text) {
            if (result) {
                // race condition
                result.push(text);
                if (result.length === urls.length) {
                    onsuccess(result);
                }
            }
        }, function(error) {
            if (result) {
                result = null;
                onerror(error);
            }
        });
    });
}

// to see what goes wrong, consider this usecase

var filenames = [
    "huge.txt", // huge file
    "tiny.txt", // tiny file
    "medium.txt" // medium-sized file
];

downloadAllAsync(filenames, function(files) {
    console.log("Huge file: " + files[0].length);  // tiny
    console.log("Tiny file: " + files[1].length);  // medium
    console.log("Medium file: " + files[2].length);  // huge
}, function(error) {
    console.log("Error: " + error);
});

/* since the files are downloaded concurrently, the events can occur in
 * arbitrary order.
 *
 * if tiny.txt completes first, followed by medium.txt and then huge.txt, the
 * callbacks in 'downloadAllAsync' will be called in a different order than the
 * they were created in
 *
 * But the implementation of 'downloadAllAsync' pushes each intermediate result
 * onto the end of the result array as soon as it arrives.
 *
 * So 'downloadAllAsync' produces an array containing downloaded files stored in
 * an unknown order
 */
