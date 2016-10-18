'use strict';
function Brain(conversations, fallback){
    this.conversations = conversations;
    this.fallback = fallback;
}

Brain.prototype.talk = function(req){
    for (var i = 0; i < this.conversations.length; i++) {
        var conv = this.conversations[i];
        var regex = new RegExp(conv.pattern,'i');

        var isReply = conv.isReply || false;

        var reply;
        if(conv.hasOwnProperty('text') && typeof conv.text == 'object'){
            var rand = Math.floor((Math.random() * conv.text.length));
            reply = conv.text[rand];
        }else if(conv.hasOwnProperty('callback') && typeof conv.callback == 'function'){
            reply = conv.callback;
        }else{
            throw JSON.stringify(conv)+" - must have text or callback";
        }


        if(isReply && !req.postback){
            continue;
        }

        var match = regex.exec(req.text);
        if(typeof reply == 'string' && regex.test(req.text)){
            for (var j = 0; j < match.length; j++) {
                reply = reply.replace('{'+j+'}',match[j]);
            }
            return reply;
        }else if(typeof reply == 'function' && regex.test(req.text)){

            return reply(req, match);
        }
    }

    var rand2 = Math.floor((Math.random() * this.fallback.length));
    return this.fallback[rand2];
};
module.exports = Brain;
