const fs = require("fs");
module.exports.config = {
  name: "Dua",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "dua",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("dua")==0 || event.body.indexOf("DUA")==0 || event.body.indexOf("Dua")==0 || event.body.indexOf("@Dưa Fatima")==0) {
    var msg = {
        body: "❁━━━━━[ 💗🅓︎🅤︎🅐︎💗 ]━━━━━❁",
        attachment: fs.createReadStream(__dirname + `/DEEPU-BABU/FAIZ.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
