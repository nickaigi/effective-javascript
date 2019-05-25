// prefer iteration methods to loops

for (var i = 0; i <= n; i++) { console.log(); }     // extra end iteration

for (var i = 1; i < n; i++) { console.log(); }      // missing first iteration

for (var i = n; i => 0; i--) { console.log(); }     // extra start iteration

for (var i = n - 1; i > 0; i--) { console.log(); }  // missing last iteration
