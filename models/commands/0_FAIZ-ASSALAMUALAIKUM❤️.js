module.exports.config = {
  name: "Asalamu alaikum",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("asalamu alaikum")>=0 || event.body.indexOf("assalamu alaikkum")>=0 || event.body.indexOf("Assalamu alaikkum")>=0 || event.body.indexOf("ASALAMU ALAIKUM")>=0 || event.body.indexOf("Assalamualaikum")>=0 || event.body.indexOf("Assalamu Alaikum")>=0 || event.body.indexOf("Asslam alikum good moring")>=0 || event.body.indexOf("Salam")>=0 || event.body.indexOf("asalam")>=0 || event.body.indexOf("Assalam alaikum")>=0 ) { 
    var msg = {
        body: ` ${name} ♥ W'aleykum Assalam Wa'rahmatullahi Wa'barakatuh ❤️`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }