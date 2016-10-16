'use strict';
/*global describe, it */
const Brain = require('./brain');

const thoughts = new Brain(require('./conversations'));


var conversations = [
    {q: 'Hello',a: 'Hi! How are you?'},
    {q: 'Are you stupid?',a: 'I really don\'t like the word stupid.'},
    {q: 'What the fuck?',a: 'I really don\'t like the word fuck.'},
    {q: 'What a piece of shit',a: 'I really don\'t like the word shit.'},
    {q: 'Kiss my asshole',a: 'I really don\'t like the word asshole.'},
    {q: 'Idiot',a: 'I really don\'t like the word Idiot.'},
    {q: 'What a moron',a: 'I really don\'t like the word moron.'},
    {q: 'You are a stupid idiot',a: 'No, I am a robot, you are the idiot. Idiot'},
];

var assert = require('assert');
describe('Brain', function() {
    describe('#talk()', function() {
        it('Hello', function() {
            for (var i = 0; i < conversations.length; i++) {
                var c = conversations[i];
                assert.equal(c.a, thoughts.talk({
                    text: c.q
                }));
            }

        });
    });
});
