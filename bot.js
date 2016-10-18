'use strict';
const botBuilder = require('claudia-bot-builder');
const Brain = require('./brain');
var convo = [];
convo = convo.concat(require('./conversations'));
convo = convo.concat(require('./callbacks'));
const thoughts = new Brain(convo,[
    "I'm not sure if I understand that. You can teach me here https://github.com/djaney/PutoBananaTheBot",
    "Knock knock..."
]);

module.exports = botBuilder(function (request) {
    return thoughts.talk(request);
});
