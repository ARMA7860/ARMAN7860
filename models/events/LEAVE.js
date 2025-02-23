const axios = require("axios");

module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.1.0",
  credits: "FAIZ BABU",
  description: "MADE BY FAIZ BABU VIDEO",
  dependencies: {
    "fs-extra": "",
    "axios": "",
    "path": "",
    "moment-timezone": ""
  }
};

module.exports.run = async function({ api, event, Users }) {
  const axios = require('axios');
  const moment = require("moment-timezone");
  const { createWriteStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];
  const { threadID } = event;

  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;

  const name = await Users.getNameUser(event.logMessageData.leftParticipantFbId) || "उपयोगकर्ता";
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "खुद ही भाग गया 😐👈" : "एडमिन ने गुस्से में निकाल दिया। 😑👈";

  // Time-Based Session
  const hours = moment.tz("Asia/Kolkata").format("HH");
  const date = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
  const time = moment.tz("Asia/Kolkata").format("HH:mm:ss");
  let session;

  if (hours >= 5 && hours < 12) {
    session = "सुबह";
  } else if (hours >= 12 && hours < 17) {
    session = "दोपहर";
  } else if (hours >= 17 && hours < 21) {
    session = "शाम";
  } else {
    session = "रात";
  }

  const path = join(__dirname, "cache", "leaveVideo");
  if (!existsSync(path)) mkdirSync(path, { recursive: true });

  // Video Links
  const videoLinks = [
    "https://i.imgur.com/jSeK1x4.mp4",
    "https://i.imgur.com/noOlGOD.mp4",
    "https://i.imgur.com/KVqk5NO.mp4",
    "https://i.imgur.com/vJV4TmW.mp4"
  ];

  const randomVideo = videoLinks[Math.floor(Math.random() * videoLinks.length)];
  const videoPath = join(__dirname, "cache", "leaveVideo", `${threadID}.mp4`);

  // Message format with time-based session
  let msg = `❁ ━━━━━━━[  𝗕𝗬𝗘  ]━━━━━━━ ❁\n\n सुकर है एक ठरकी इस ग्रुप में कम हो गया 😃✌️\n\n❁ ━━━━━ ❃ ━━━━━ ❃ ━━━━━ ❁\n✰  उसका नाम है 𒁍 ${name} \n✰  रीजन 𒁍 ${type}\n❁ ━━━━━ ❃ ━━━━━ ❃ ━━━━━ ❁\n\n𝗠𝗔𝗗𝗘 𝗕𝗬 ✰ 𝗙𝗔𝗜𝗭 𝗕𝗔𝗕𝗨`;

  try {
    // Download the video from the URL
    const response = await axios({
      url: randomVideo,
      method: 'GET',
      responseType: 'stream'
    });

    // Save the video to the file system
    const writer = createWriteStream(videoPath);
    response.data.pipe(writer);

    // Wait for the video to finish downloading
    writer.on('finish', () => {
      // Send the video with the message
      api.sendMessage({
        body: msg,
        attachment: require("fs").createReadStream(videoPath)
      }, threadID);
    });

    writer.on('error', () => {
      api.sendMessage("वीडियो भेजने में समस्या आई।", threadID);
    });

  } catch (error) {
    api.sendMessage("कुछ गड़बड़ हो गई। वीडियो भेजने में असमर्थ।", threadID);
  }
};
