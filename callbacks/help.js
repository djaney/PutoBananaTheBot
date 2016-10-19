'use strict';
module.exports = [{
    pattern: "^help$",
    callback: function(req, match){
        var list = [
            "menu",
            "food",
            "hotel",
            "bar",
            "tour",
            "beach",
            "mall",
            "weather",
            "events",
            "news",
        ];
        return "List of commands: \n" + list.join("\n");
    }
}];
