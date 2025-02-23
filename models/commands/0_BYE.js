const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
"https://i.imgur.com/h3I5CDI.gif",
"https://i.imgur.com/yWJylC5.gif",
"https://i.imgur.com/JvksMBt.gif",
"https://i.imgur.com/AFZ5t7R.gif",
];

module.exports.config = {
  name: "bye",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAIZ BABU",
  description: "MADE BY FAIZ BABU",
  commandCategory: "no prefix", 
  usages: "bye",
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
    if(react.includes("bye") ||
     react.includes("BYE") || 
     react.includes("Bye") || 
     react.includes("अलविदा") ||
     react.includes("byyy") ||
     react.includes("byy")) {
    const rahad = [
      "𝐁𝐘𝐄 𝐁𝐘𝐄 🙋‍♂ 𝐓𝐀𝐊𝐄 𝐂𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 😇"

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
  if (typeof data["bye"] === "undefined" || data["bye"]) data["bye"] = false;
  else data["bye"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["bye"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};