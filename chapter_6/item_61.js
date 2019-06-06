// Don't block the event queue on I/O

var text = downloadSync("http://example.com/file.txt");
console.log(text);

/* functions like 'downloadSync' are known as 'synchronous' or 'blocking'
 *   - the program stops doing any work while it waits for its inputs
 *     in this case, the result of downloading a file.
 *
 * - threads: subcomputations that are executed concurrently, allowing one
 *   portion of the program to stop and wait for ("block on") a slow input
 *   while another portion of the program can carry on doing the things :-)
 */

/* most JavaScript I/O operations are provided thro' 'asynchronous' or
 * 'nonblocking' APIs
 *
 * - instead of blocking a thread, the programmer provides a callback for the
 *   system to invoke once the input arrives
 */

downloadSync("http://example.com/file.txt", function(text) {
    console.log(text);
});
