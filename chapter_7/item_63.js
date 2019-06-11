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

// using the same error-handling logic
// DRY: don't repeat yourself
function onError(error) {
    console.log("Error: " + error);
}

downloadAsync("a.txt", function(a) {
    downloadAsync("b.txt", function(b) {
        downloadAsync("c.txt", function(c) {
            console.log("Contents: " + a + b + c);
        }, onError);
    }, onError);
}, onError);

// we can apply what we learnt in item 62 and item 66

downloadAsync(["a.txt", "b.txt", "c.txt"], function(abc) {
    console.log("Contents: " + abc[0] + abc[1] + abc[2]);
}, function(error) {
    console.log("Error: " + error);
});

/* Node.js popularized a style of error-handling API
 * takes only a single callback whose first argument is either an error,
 * if one occurred, or a falsy value such as 'null' otherwise.
 */

function onError(error) {
    console.log("Error: " + error);
}

downloadAsync("a.txt", function(error, a) {
    if (error) {
        onError(error);
        return;
    }
    downloadAsync("b.txt", function(error, b) {
        // duplicated error-checking logic
        if (error) {
            onError(error);
            return;
        }
        downloadAsync(url3, function(error, c) {
            // another error-checking logic
            if (error) {
                onError(error);
                return;
            }
            console.log("Contents: " + a + b + c);
        });
    });
});

// we can abandon conventions associated with 'if' statements

function onError(error) {
    console.log("Error: " + error);
}

downloadAsync("a.txt", function(error, a) {
    if (error) return onError(error);

    downloadAsync("b.txt", function(error, b) {
        if (error) return onError(error);

        downloadAsync(url3, function(error, b) {
            if (error) return onError(error);

            console.log("Contents: " + a + b + c);
        });
    });
});

