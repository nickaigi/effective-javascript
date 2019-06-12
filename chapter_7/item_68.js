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
