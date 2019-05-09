// use 'bind' to 'curry' functions
// The technique of binding a function to a subset of its arguments is known as
// 'currying' named after logician Haskell Curry


function simpleURL(protocol, domain, path) {
    return protocol + "://" + domain + "/" + path;
}

var siteDomain = "mport.nz";

var paths = ["login", "account", "forgot-password", "reset-password", "delete"];

var urls = paths.map(function(path) {
    return simpleURL("http", siteDomain, path);
});
