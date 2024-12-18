const fs = require("fs");
module.exports.config = {
	name: "biskit",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "rose",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("biskit")==0 || event.body.indexOf("biskut")==0 || event.body.indexOf("BISKIT")==0 || event.body.indexOf("BISKUT")==0) {
		var msg = {
				body: "यें लो बाबू बिस्किट खाओ 😝👈",
				attachment: fs.createReadStream(__dirname + `/DEEPU-BABU/BISKIT.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍪", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
