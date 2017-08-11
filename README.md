# Throne-Adventure

Super (I mean super) basic intro to Alexa skills. The idea is to create an 'adventure' from scratch in no time at all; actually done under 6 minutes if you check out the video here:

https://youtu.be/peAFx02SGTg

# How to Use

* Create an AWS Account here: https://aws.amazon.com/

* Create an Amazon Developer account here: https://developer.amazon.com/

* Whilst here, go to the Alexa section, click 'Get Started' under ASK, and select 'Add a new skill;

* Ensure 'Custom Interaction Model' is selected, and choose your skill name/invocation name

* Go to the AWS portal, lambda, and create a new skill using the fact template

* Copy the contents of index.js from this repository into it

* Copy the ARN (endpoint) from here, and paste it into 'Configuration' in the Amazon Dev portal

* Under 'Interaction Model', copy over the contents of intentschema.js and sampleutterances.js into the relevant parts. Then build the model!

* ???

* Profit.

-jamielliottg
