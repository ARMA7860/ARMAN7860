const fs = require("fs");
module.exports.config = {
  name: "Sana",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "sana",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@SaNaa Fatima")==0 || event.body.indexOf("SANA")==0 || event.body.indexOf("Sanaa")==0 || event.body.indexOf("sana")==0) {
    var msg = {
        body: "❁━━━━━[🅢︎🅐︎🅝︎🅐︎🅐︎]━━━━━❁",
        attachment: fs.createReadStream(__dirname + `/FAIZ/SANA.webp`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
