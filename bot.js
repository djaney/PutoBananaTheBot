'use strict';
const botBuilder = require('claudia-bot-builder');
const Brain = require('./brain');

const thoughts = new Brain(require('./conversations'),[
    "What?",
    "I'm not sure if I understand that. You can teach me here https://github.com/djaney/PutoBananaTheBot",
    "Knock knock..."
]);

module.exports = botBuilder(function (request) {
    return thoughts.talk(request);
});
