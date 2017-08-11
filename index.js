'use strict';

const Alexa = require('alexa-sdk');

var sights = [
"You see Jon Snow. He is up to no good with the Night's Watch.",
"You see Joffrey. He is drinking wine.",
"You see Robb. He is here.",
"You see Dany. She is now a dragon."
];

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'LaunchRequest': function () { // When the skill is first opened
        this.emit(':ask', "Welcome to the Throne Adventure skill. Which way would you like to go?");
    },
    'GoLeftIntent': function () {
        var speechOutput;
        
        speechOutput = "You choose to go left. ";
        speechOutput+= sights[Math.floor(Math.random() * (sights.length-1) )]; //Takes a random sight from the sights array
        speechOutput+= " Which way would you like to go now?";
        
        this.emit(':ask', speechOutput); //Sends back to user without closing session
    },
    'GoRightIntent': function () {
        var speechOutput;
        
        speechOutput = "You choose to go right. ";
        speechOutput+= sights[Math.floor(Math.random() * (sights.length-1) )];
        speechOutput+= " Which way would you like to go now?";
        
        this.emit(':ask', speechOutput);
    },
    'GoForwardIntent': function () {
        var speechOutput;
        
        speechOutput = "You choose to go forward. ";
        speechOutput+= sights[Math.floor(Math.random() * (sights.length-1) )]; 
        speechOutput+= " Which way would you like to go now?";
        
        this.emit(':ask', speechOutput);
    }
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};
