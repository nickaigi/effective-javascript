// use structural typing for flexible interfaces

/* imagine a library for creating 'wikis' using a markup language
 *
 * This sentence contains a *bold pharse* within it.
 *
 * This sentence contains an _underlined pharse_ within it.
 *
 * This sentence contains an /italicized pharse/ within it.
 *
 */

// you can refer to https://www.mediawiki.org/wiki/Help:Formatting
var app = new Wiki(Wiki.formats.MEDIAWIKI);

function Wiki(format) {
    this.format = format;
}

Wiki.prototype.displayPage = function(source) {
    var page = this.format(source);
    var title = page.getTitle();
    var author = page.getAuthor();
    var output = page.toHTML();
    // ...
};


function MWPage(source) {
    Page.call(this, source);  // call the super-constructor
    // ...
}

// MWPage extends Page
MWPage.prototype = Object.create(Page.prototype);

MWPage.prototype.getTitle = /* ... */;
MWPage.prototype.getAuthor = /* ... */;
MWPage.prototype.toHTML = /* ... */;

Wiki.formats.MEDIAWIKI = function(source) {
    return new MWPage(source);
};

// while many o-o languages encourage structuring your programs around classes
// and inheritance, JavaScript tends not to stand on ceremony ;-)
// perfectly legal in JavaScript to implement an interface like the MediaWiki
// page format with a simple object literal

Wiki.formats.MEDIAWIKI = function(source) {
    // extract contents from source
    // ...
    return {
        getTitle: function() { /* ...*/ },
        getAuthor: function() { /* ...*/ },
        toHTML: function() { /* ...*/ }
    };
};
