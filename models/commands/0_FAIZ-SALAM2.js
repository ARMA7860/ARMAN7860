module.exports.config = {
  name: "Assalamu Alaikum",
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
  if (event.body.indexOf("Assalamu alaikum")>=0 || event.body.indexOf("Asslam o alaikum")>=0 || event.body.indexOf("Aaslamu aalekum")>=0 || event.body.indexOf("Assalamualaikum wa rahmatullahi wa Barakatuhu")>=0 || event.body.indexOf("Assalam walekum")>=0 || event.body.indexOf("Assalamu alaikum all friends Asslamualaykum")>=0 || event.body.indexOf("Assalamu alaikum wa rahmatullahi wa barakatuh ✨✨💙✨⭐🌹")>=0 || event.body.indexOf("Aasalam u Aalikum warahmatullahi wabarkathu")>=0 || event.body.indexOf("Assalam allikum 💞💞💞@everyone")>=0 || event.body.indexOf("🌿 🍫 🎭 ")>=0 ) { 
    var msg = {
        body: ` ${name} ≛⃝🩵᭄ WALAIKUM ASSALAM WA RAHMATULLAHI WA BARAKATUH ≛⃝🩵᭄`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }