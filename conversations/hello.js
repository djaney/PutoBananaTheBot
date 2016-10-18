'use strict';
module.exports = [{
    pattern: /^hello|^hi/i,
    ans: function(request){
        return 'Hi! How are you?';
    }
},{
    pattern: /how are you/i,
    ans: function(request){
        return 'I\' fine.';
    }
},{
    pattern: /you .* idiot/i,
    ans: function(request){
        return 'No, I am a robot, you are the idiot. Idiot';
    }
},{
    pattern: /(stupid|fuck|shit|asshole|idiot|moron)/i,
    ans: function(request, match){
        var censored = match[1];
        return 'I really don\'t like the word ' + censored + '.';
    }
},{
    pattern: /who are you|what is your name|do you have a name/i,
    ans: function(request){
        return 'I am Puto Banana, human cyborg relations :)';
    }
},{
    pattern: /.*/i,
    ans: function(request){
        return 'I\'m not sure if I understand that. You can teach me here https://github.com/djaney/PutoBananaTheBot';
    }
}];
