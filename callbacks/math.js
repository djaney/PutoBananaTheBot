'use strict';
module.exports = [{
    pattern: "^what is ([0-9+*/\\(\\)\\s]+)\\?{0,1}",
    callback: function(req, match){
        var val = eval(match[1]);
        if(!isNaN(val)){
            return "It's " + val;
        }else{
            return "I don't know :(";
        }

    }
}];
