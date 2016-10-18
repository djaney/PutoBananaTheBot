'use strict';
function Brain(conversations){
    this.conversations = conversations;
}

Brain.prototype.talk = function(req){
    for (var i = 0; i < this.conversations.length; i++) {
        var conv = this.conversations[i];
        if(conv.pattern.test(req.text)){
            var match = conv.pattern.exec(req.text);
            return conv.ans(req, match);
        }
    }
};
module.exports = Brain;
