const fs = require("fs");
module.exports.config = {
  name: "Arzoo",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "arzoo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Aarzoo")==0 || event.body.indexOf("Aarzoo")==0 || event.body.indexOf("AARZOO")==0 || event.body.indexOf("@Aarzoo Khan")==0) {
    var msg = {
        body: "❁━━━━[🅐︎🅐︎🅡︎🅩︎🅞︎🅞︎]━━━━❁",
        attachment: fs.createReadStream(__dirname + `/FAIZ/ARZOO.webp`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧚", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
