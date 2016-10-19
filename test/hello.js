'use strict';
/*global describe, it */
const Brain = require('../brain');
var convo = [];
convo = convo.concat(require('../conversations'));
convo = convo.concat(require('../callbacks'));
const thoughts = new Brain(convo,['fallback']);
var cases = [
    'help',
];

for (var i = 0; i < cases.length; i++) {
    var c = cases[i];
    console.log(c, ' -- ', thoughts.talk({
        text: c,
        type: 'facebook'
    }));
}
