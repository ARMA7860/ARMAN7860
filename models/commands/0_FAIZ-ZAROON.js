const fs = require("fs");
module.exports.config = {
  name: "Zaroon",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "zaroon",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Zaroon Khan")==0 || event.body.indexOf("zaroon")==0 || event.body.indexOf("Zaroon")==0 || event.body.indexOf("ZAROON")==0) {
    var msg = {
        body: "❁━━━━━[ 🅩︎🅐︎🅡︎🅞︎🅞︎🅝︎ ]━━━━━❁",
        attachment: fs.createReadStream(__dirname + `/DEEPU-BABU/ZAROON.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
