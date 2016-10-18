'use strict';
const botBuilder = require('claudia-bot-builder');
const Brain = require('./brain');

const thoughts = new Brain(require('./conversations'));

module.exports = botBuilder(function (request) {
    return thoughts.talk(request);
});
