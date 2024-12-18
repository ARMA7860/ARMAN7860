const fs = require("fs");
module.exports.config = {
	name: "cigarette",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "cigarette",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cigarette")==0 || event.body.indexOf("cigarette")==0 || event.body.indexOf("🚬")==0 || event.body.indexOf("Sicret")==0) {
		var msg = {
				body: "😁𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 🚬 👈😂",
				attachment: fs.createReadStream(__dirname + `/DEEPU-BABU/SICRET.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
