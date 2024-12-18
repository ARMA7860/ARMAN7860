const fs = require("fs");
module.exports.config = {
	name: "dreng",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "dreng",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dreng")==0 || event.body.indexOf("DRINK")==0 || event.body.indexOf("Daru")==0 || event.body.indexOf("Drink")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐃𝐑𝐈𝐍𝐊 𝐏𝐈 𝐋𝐎",
				attachment: fs.createReadStream(__dirname + `/DEEPU-BABU/DRENG.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
