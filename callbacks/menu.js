'use strict';
const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;


module.exports = [{
    pattern: "^menu$|^MNU_",
    callback: function (req, match){
        var pat = /^MNU_(.*)/;
        if('facebook' === req.type){
            var btn;
            if(pat.test(req.text)){
                if('MNU_CHILL' === req.text){
                    return new fbTemplate.button('What kind of place?')
                    .addButton('Bar', 'MNU_CHILL_BAR')
                    .addButton('Beach', 'MNU_CHILL_BEACH')
                    .get();
                }else if('MNU_CHILL_BAR' === req.text){
                    return "Still gathering information about bars";
                }else if('MNU_CHILL_BEACH' === req.text){
                    return "Still looking for beaches";
                }else if('MNU_OTHER' === req.text){
                    return "Still looking for beaches";
                }

            }else{
                return new fbTemplate.button('Hello, my name is Putobanana. What do you want to know about Cebu?')
                .addButton('Chill', 'MNU_CHILL')
                .addButton('Adventure', 'MNU_ADVENTURE')
                .addButton('Other', 'MNU_OTHER')
                .get();
            }
        }
    }
}];
