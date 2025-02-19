const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
"https://i.imgur.com/MN8K2GR.mp4",
"https://i.imgur.com/DQuH24h.mp4",
"https://i.imgur.com/uDJWjmC.mp4",
"https://i.imgur.com/IOsgIZy.mp4",
"https://i.imgur.com/6ehgK8c.mp4",
"https://i.imgur.com/cVsGX6O.mp4",
"https://i.imgur.com/JB9MnxT.mp4",
"https://i.imgur.com/wNB2aFG.mp4",
"https://i.imgur.com/ntTXhE9.mp4",
"https://i.imgur.com/VLjFWiO.mp4",
"https://i.imgur.com/kdXp78d.mp4",
"https://i.imgur.com/QFrMhcV.mp4",
"https://i.imgur.com/uTk29FG.mp4",
"https://i.imgur.com/x045aQA.mp4",
"https://i.imgur.com/Cr2TVh9.mp4",
"https://i.imgur.com/csFsNPz.mp4",
"https://i.imgur.com/esVO0MO.mp4",
"https://i.imgur.com/Tpp3U4f.mp4",
"https://i.imgur.com/Ll76Qbw.mp4",
"https://i.imgur.com/k7T2yVV.mp4",
"https://i.imgur.com/sg1b8gS.mp4",
"https://i.imgur.com/vK71G6H.mp4",
];

module.exports.config = {
  name: "hotvideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAIZ BABU",
  description: "auto reply to sadvideo",
  commandCategory: "noprefix",
  usages: "hotvideo",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("hotvideo")==0 || 
      event.body.indexOf("Hotvideo")==0 ||
      event.body.indexOf("hot video")==0 ||
      event.body.indexOf("Hot video")==0 || 
      event.body.indexOf("HOTVIDEO")==0 || 
      event.body.indexOf("HOT VIDEO")==0) {
    const rahad = [
      ""

    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);

    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["hotvidos"] === "undefined" || data["hotvidos"]) data["hotvidos"] = false;
  else data["hotvidos"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["hotvidos"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};