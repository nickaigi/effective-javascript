// Support Method Chaining
/* Stateless APIs offer flexibility to build compound operations out of
 * smaller ones. Example: the 'replace' method of strings
 */

function escapeBasicHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&apos;")
}
