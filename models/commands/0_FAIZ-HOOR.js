const fs = require("fs");
module.exports.config = {
  name: "Hoor",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "hoor",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Hoor Parii")==0 || event.body.indexOf("Hoor parii")==0 || event.body.indexOf("Hoor")==0 || event.body.indexOf("HOOR")==0) {
    var msg = {
        body: "❁━━━━━[🅗︎🅞︎🅞︎🅡︎ 🧚]━━━━━❁",
        attachment: fs.createReadStream(__dirname + `/FAIZ/HOOR.webp`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧚", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }