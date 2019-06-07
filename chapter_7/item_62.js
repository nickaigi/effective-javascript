// Use nested or named callbacks for asynchronous sequencing

downloadAsyncI("file.txt", function(file) {
    console.log("finished");
});

console.log("starting");
