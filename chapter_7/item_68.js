// Use Promises for cleaner asynchronous logic


/* Using 'promises' is an alternative way to structure asynchronous APIs
 * 'promises' or 'deferreds' or 'futures'
 *
 * so far, our Asynchronous APIs have been taking a callback as an argument
 */

downloadAsync("file.txt", function(file) {
    console.log("file: " + file);
});

/* a promise-based API does not take callbacks as arguments, instead it returns
 * a promise object which itself accepts callbacks via its 'then' method
 */

var p = downloadP("file.txt");

p.then(function(file) {
    console.log("file: " + file);
});

/* the power of promises is in their 'composability'
 * by returning a value from the callback, we can construct a new promise
 */

var fileP = downloadP("file.txt");

var lengthP = fileP.then(function(file) {
    return file.length;
});

lengthP.then(function(length) {
    console.log("length: " + length);
});

/* think of a promise as an object that represents an eventual value:
 * it wraps a concurrent operation that may not have completed yet, but will
 * eventually produce a result value
 */

// we can construct a utility for "joining" the results of multiple promises

var filesP = join(downloadP("file1.txt"),
                  downloadP("file2.txt"),
                  downloadP("file3.txt"));

filesP.then(function(files) {
    console.log("file0: " + files[0]);
    console.log("file1: " + files[1]);
    console.log("file2: " + files[2]);
});

/* promise libraries also often provide a utility function called 'when'
 * which can be used similarly:
 */

var fileP1 = downloadP("file1.txt"),
    fileP2 = downloadP("file2.txt"),
    fileP3 = downloadP("file3.txt");

when([fileP1, fileP2, fileP3], function(files) {
    console.log("file1: " + files[0]);
    console.log("file2: " + files[1]);
    console.log("file3: " + files[2]);
});

/* promises are an excellent level of abstraction because they communicate
 * their results by returning values from their 'then' methods or by composing
 * promises via utilities such as 'join' rather than by writing to shared data
 * structures via concurrent callbacks
 */

/* even the most conscientious programmer can make simple mistakes when saving
 * the results of async operations in shared variables or data structures
 * have a look at the example below
 */

var file1, file2;

downloadAsync("file1.txt", function(file) {
    file1 = file;
});

downloadAsync("file2.txt", function(file) {
    file1 = file;  // wrong variable;
});

/* promises avoid this kind of bug because the style of concisely composing
 * promises avoids modifying shared data.
 */
