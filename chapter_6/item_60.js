// Support Method Chaining
/* Stateless APIs offer flexibility to build compound operations out of
 * smaller ones. Example: the 'replace' method of strings
 */
function escapeBasicHTML(str1) {
    var str2 = str1.replace(/&/g, "&amp;");
    var str3 = str2.replace(/</g, "&lt;");
    var str4 = str3.replace(/>/g, "&gt;");
    var str5 = str4.replace(/"/g, "&quot;");
    var str6 = str5.replace(/'/g, "&apos;");
    return str6;
}

function escapeBasicHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&apos;")
}

/* this style of repeated method calls is known as 'method chaining'
 * the second version of 'escapeBasicHTML' is much more concise than saving
 * each intermediate result to an intermediate variable
 * Eliminating the temporary variables makes it clearer to the readers of the
 * code that the intermediate results are only important as a step along the
 * way to the final result
 */
