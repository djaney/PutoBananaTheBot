'use strict';
/*global describe, it */
const Brain = require('../brain');
var convo = [];
convo = convo.concat(require('../conversations'));
convo = convo.concat(require('../callbacks'));
const thoughts = new Brain(convo,['fallback']);
var cases = [
    'hello',
    'Ahmed who?',
    'Rico Jay who?',
    'define torotot of the philippines',
    'why are there no stars at night',
    'what is one divided by zero',
    'what is 1/0',
    'what is 1+1',
    'what is 1-1',
    'what is 1*1',
    'what is 3/8',
    'what is (3/8)+ 4',
    'what is 1/1231241',
];

for (var i = 0; i < cases.length; i++) {
    var c = cases[i];
    console.log(c, ' -- ', thoughts.talk({
        text: c
    }));
}
