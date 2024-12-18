const fs = require("fs");
module.exports.config = {
  name: "Faiz",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Faiz",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@ll 輪͙͙͟͟͞͞⃝͙ 𓆣𒄬 𓆩⃝𝐅ᴀ͜͡ɪᴢ 𝐑ᴅ͜͡x𓆪𓆥†⃝⃞⸙ »ﮩ‣𓆩๏̬̬̬̬̬̬̬̬̬̬𓆪")==0 || event.body.indexOf("Faiz")==0 || event.body.indexOf("FAIZ")==0 || event.body.indexOf("faiz")==0) {
    var msg = {
        body: "❁━━━━━[ 🅕︎🅐︎🅘︎🅩︎ ]━━━━━❁",
        attachment: fs.createReadStream(__dirname + `/DEEPU-BABU/FAIZ.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
