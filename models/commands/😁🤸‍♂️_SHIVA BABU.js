const fs = require("fs");
module.exports.config = {
  name: "ARMAN",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Shiva",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("ARMAN")==0 || event.body.indexOf("Arman")==0 || event.body.indexOf("@Arman Babu")==0 || event.body.indexOf("Arman babu")==0) {
    var msg = {
        body: "😹𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐌𝐀𝐈 𝐀 𝐆𝐀𝐘𝐀😹",
        attachment: fs.createReadStream(__dirname + `/FAIZ/SHIVA.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }