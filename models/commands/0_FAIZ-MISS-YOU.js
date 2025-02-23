const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
"https://i.imgur.com/cQzy6ro.gif",
"https://i.imgur.com/6OdTaeB.gif",
"https://i.imgur.com/xlTmwK1.gif
"https://i.imgur.com/SqDzQIg.gif",
"https://i.imgur.com/RkAgFWr.gif",
"https://i.imgur.com/S2Do2DM.gif",
"https://i.imgur.com/3AryVZp.gif",
];

module.exports.config = {
  name: "miss",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAIZ BABU",
  description: "MADE BY FAIZ BABU",
  commandCategory: "no prefix", 
  usages: "miss",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("miss you") ||
     react.includes("Miss you") || 
     react.includes("miss u") || 
     react.includes("Miss u") ||
     react.includes("Mich u") ||
     react.includes("MISS YOU")) {
    const rahad = [
      "𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐌𝐀𝐑𝐈 𝐉𝐀𝐀𝐍 😇"

    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.gif")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.gif"), event.messageID);

    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.gif")).on("close", () => callback());
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
  if (typeof data["miss"] === "undefined" || data["miss"]) data["miss"] = false;
  else data["miss"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["miss"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};