var Twilio = require("twilio");

var keys = require("./keys.js");
var contacts = require("./contacts.js");

var twilio = new Twilio(keys.twilio.accountSid, keys.twilio.authToken);

twilio.messages.create({
	body: "SHAZAM IMA TXT MESSAGE",
	to: contacts.justin.number,
	from: contacts.twilio.number
})
.then((message) => console.log(message.sid))
.catch((err) => console.log(err));
