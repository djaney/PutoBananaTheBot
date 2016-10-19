'use strict';
const botBuilder = require('claudia-bot-builder');
const Brain = require('./brain');
var convo = [];
convo = convo.concat(require('./conversations'));
convo = convo.concat(require('./callbacks'));
const thoughts = new Brain(convo,[
    "Knock knock...",
    "Type in help to know more"
]);

module.exports = botBuilder(function (request) {
    return thoughts.talk(request);
});
