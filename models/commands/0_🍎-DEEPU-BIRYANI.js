const fs = require("fs");
module.exports.config = {
	name: "biryani",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "biryani",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("biryani")==0 || event.body.indexOf("Biryani")==0 || event.body.indexOf("BIRYANI")==0 || event.body.indexOf("#Biryani")==0) {
		var msg = {
				body: "😋𝐘𝐄 𝐋𝐏 𝐁𝐀𝐁𝐘 𝐁𝐈𝐑𝐘𝐀𝐍𝐈 😋",
				attachment: fs.createReadStream(__dirname + `/DEEPU-BABU/BIRYANI.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
