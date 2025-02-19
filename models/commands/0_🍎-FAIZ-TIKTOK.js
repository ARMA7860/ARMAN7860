const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
"https://i.imgur.com/V0tp7O6.mp4",
"https://i.imgur.com/ZOSz47m.mp4",
"https://i.imgur.com/pCdVm37.mp4",
"https://i.imgur.com/LJxf5HS.mp4",
"https://i.imgur.com/LLb9bDr.mp4",
"https://i.imgur.com/GITMRSr.mp4",
"https://i.imgur.com/h24mEZQ.mp4",
"https://i.imgur.com/LM7aVwA.mp4",
"https://i.imgur.com/jSGexTT.mp4",
"https://i.imgur.com/3nG9Eei.mp4",
"https://i.imgur.com/C8BKw9w.mp4",
"https://i.imgur.com/RqU5cIp.mp4",
"https://i.imgur.com/fcOgqRA.mp4",
"https://i.imgur.com/NaR9Dlu.mp4",
"https://i.imgur.com/XyiKvzQ.mp4",
"https://i.imgur.com/EkFCva3.mp4",
"https://i.imgur.com/PmoCTik.mp4",
"https://i.imgur.com/RwhNGBv.mp4",
"https://i.imgur.com/SZj2LSK.mp4",
"https://i.imgur.com/FyXClbY.mp4",
"https://i.imgur.com/EliaEUQ.mp4",
"https://i.imgur.com/FsMI6UB.mp4",
"https://i.imgur.com/0sXnMrm.mp4",
"https://i.imgur.com/BsAH8Wy.mp4",
"https://i.imgur.com/ak9Js1W.mp4",
"https://i.imgur.com/TpnQMRN.mp4",
"https://i.imgur.com/aBmNLzd.mp4",
"https://i.imgur.com/tX4pE5g.mp4",
"https://i.imgur.com/zl3jezX.mp4",
"https://i.imgur.com/zYE0D6Z.mp4",
"https://i.imgur.com/njaCr2d.mp4",
"https://i.imgur.com/VSbsU0f.mp4",
"https://i.imgur.com/CUj8lCX.mp4",
"https://i.imgur.com/KpnUGoV.mp4",
"https://i.imgur.com/1xZAJBr.mp4",
"https://i.imgur.com/Lil3Xck.mp4",
"https://i.imgur.com/poOr6yu.mp4",
"https://i.imgur.com/5V9VTgq.mp4",
"https://i.imgur.com/lH78E5U.mp4",
"https://i.imgur.com/KCv7ybM.mp4",
"https://i.imgur.com/r1p46qM.mp4",
"https://i.imgur.com/O26X3J7.mp4",
"https://i.imgur.com/mu9v5AV.mp4",
"https://i.imgur.com/wbxfXq3.mp4",
"https://i.imgur.com/5PVHiDL.mp4",
"https://i.imgur.com/sxQW0tW.mp4",
"https://i.imgur.com/ZP0CUin.mp4",
"https://i.imgur.com/Ha1TpKz.mp4",
"https://i.imgur.com/Qki30q6.mp4",
"https://i.imgur.com/DP7USJB.mp4",
"https://i.imgur.com/dW7nMdy.mp4",
"https://i.imgur.com/xx1sel5.mp4",
"https://i.imgur.com/hHFolVI.mp4",
"https://i.imgur.com/5ZAcjO4.mp4",
"https://i.imgur.com/0fLzjJ8.mp4",
"https://i.imgur.com/vjvuOKH.mp4",
];

module.exports.config = {
  name: "tiktok",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAIZ BABU",
  description: "auto reply to tiktok",
  commandCategory: "noprefix",
  usages: "TIKTOK",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("tiktok")==0 || 
      event.body.indexOf("Tiktok")==0 ||
      event.body.indexOf("TIKTOK")==0 ||
      event.body.indexOf("tiktokvideo")==0 || 
      event.body.indexOf("Tiktokvideo")==0 || 
      event.body.indexOf("tiktok video")==0 || 
      event.body.indexOf("Tiktok video")==0 || 
      event.body.indexOf("TIKTOK VIDEO")==0) {
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
  if (typeof data["tiktok"] === "undefined" || data["tiktok"]) data["tiktok"] = false;
  else data["tiktok"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["tiktok"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};