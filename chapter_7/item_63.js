// Be aware of dropped errors

try {
    f();
    g();
    h();
} catch (e) {
    // handle any error that ocurred...
}


downloadAsync("http://example.com/file.txt", function(text) {
    console.log("File contents: " + text);
}, function(error) {
    console.log("Error: " + error);
});

// nesting the callbacks as explained in item_62

downloadAsync("a.txt", function(a) {
    downloadAsync("b.txt", function(b) {
        downloadAsync("c.txt", function(c) {
            console.log("Contents: " + a + b + c);
        }, function(error) {
            console.log("Error" + error);
        });
    }, function(error) {  // repeated error-handling logic
        console.log("Error" + error);
    });
}, function(error) {  // repeated error-handling logic
    console.log("Error" + error);
});
