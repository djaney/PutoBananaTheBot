'use strict';
function Brain(conversations){
    this.conversations = conversations;
}

Brain.prototype.talk = function(req){
    for (var i = 0; i < this.conversations.length; i++) {
        var conv = this.conversations[i];
        var regex = new RegExp(conv.pattern,'i');
        var rand = Math.floor((Math.random() * conv.text.length));
        var reply = conv.text[rand];
        if(regex.test(req.text)){
            var match = regex.exec(req.text);
            for (var j = 0; j < match.length; j++) {
                reply = reply.replace('{'+j+'}',match[j]);
            }
            return reply;
        }
    }
};
module.exports = Brain;
