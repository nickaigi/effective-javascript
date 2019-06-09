// Be aware of dropped errors

try {
    f();
    g();
    h();
} catch (e) {
    // handle any error that ocurred...
}


downloadAsyn("http://example.com/file.txt", function(text) {
    console.log("File contents: " + text);
}, function(error) {
    console.log("Error: " + error);
});
