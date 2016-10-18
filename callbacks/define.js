'use strict';
module.exports = [{
    pattern: "^define (.*)",
    callback: function(req, match){
        return "I don't know what \""+match[1]+"\" is.";
    }
}];
