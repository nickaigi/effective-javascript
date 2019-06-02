// Avoid unnescessary state
/* APIs are either 'stateful' or 'stateless'
 * - Stateless: provides functions or methods whose behavior depends only on
 *   their inputs, not on the changing state of the program
 * - "foo".toUpperCase() will always produce "FOO" --- STATELESS
 * - methods of a 'Date' object by contrast are stateful
 * - A famous stateful API is the web's 'Canvas' library
 *   A program can draw text onto a canvas using the 'fillText' method
 * - See declaration of 'canvas' element in index.html
 */
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

c.fillStyle = 'green';
c.fillRect(10, 10, 150, 100);
