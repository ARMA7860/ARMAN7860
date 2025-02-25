const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "FAIZ BABU",
    description: "MADE BY ARIF BABU",
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function({ api, event }) {

        const request = require("request");
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`【 ${global.config.PREFIX} 】 ${global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        return api.sendMessage(
            "‎‎❁ ━━━━━[  𝗪𝗘𝗟𝗖𝗢𝗠𝗘  ]━━━━━ ❁\n\nजल्दी से स्वागत करो हमारा 😃\n━━━━━━━━━━━━━━━\n❁ ━━━━━ ❃ ━━━━━ ❃ ━━━━━ ❁\n✰ OWNER 𒁍  FAIZ ANSARI\n✰ BOT PREFIX 𒁍 【 # 】\n✰ FACEBOOK LINK 𒁍 https://www.facebook.com/profile.php?id=100070412730192&mibextid=kFxxJD\n❁ ━━━━━ ❃ ━━━━━ ❃ ━━━━━ ❁\n\nलो मैं आ गया आपका प्यारा फैज़ अंसारी स्वागत करो हमारा 🙈",
            threadID
        );
    } else {
        try {
            const { threadName, participantIDs } = await api.getThreadInfo(threadID);
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            let mentions = [], nameArray = [], memLength = [], i = 0;

            for (let newParticipant of event.logMessageData.addedParticipants) {
                let userID = newParticipant.userFbId;
                api.getUserInfo(parseInt(userID), (err, data) => {
                    if (err) return console.log(err);

                    let userName = data[Object.keys(data)[0]].name.replace("@", "");
                    if (userID !== api.getCurrentUserID()) {
                        nameArray.push(userName);
                        mentions.push({ tag: userName, id: userID, fromIndex: 0 });
                        memLength.push(participantIDs.length - i++);
                        memLength.sort((a, b) => a - b);

                        let msg = (typeof threadData.customJoin == "undefined") ?
                            "❁ ━━━━━[  𝗪𝗘𝗟𝗖𝗢𝗠𝗘  ]━━━━━ ❁\n\nजल्दी से स्वागत करो हमारा 😃\n━━━━━━━━━━━━━━━\n✰ NAME 𒁍  {uName}\n✰ MEMBER TO 𒁍 {soThanhVien}th\n✰ GROUP NAME 𒁍 {threadName}\n❁ ━━━━━ ❃ ━━━━━ ❃ ━━━━━ ❁\n✰ MR BOSS 𒁍 FAIZ ANSARI 😃\n❁ ━━━━━ ❃ ━━━━━ ❃ ━━━━━ ❁\nआप इस ग्रुप के {soThanhVien}th मेंबर हो.......🤠\n❁ ━━━━━ ❃ ━━━━━ ❃ ━━━━━ ❁\n\nलो मैं आ गया आपका प्यारा फैज़ अंसारी स्वागत करो हमारा 🙈" :
                            threadData.customJoin;

                        msg = msg
                            .replace(/{uName}/g, nameArray.join(', '))
                            .replace(/{type}/g, (memLength.length > 1) ? 'you' : 'Friend')
                            .replace(/{soThanhVien}/g, memLength.join(', '))
                            .replace(/{threadName}/g, threadName);

                        const links = [
                            "https://i.imgur.com/m1aPqh8.mp4",
                            "https://i.imgur.com/S08GC8L.mp4",
                            "https://i.imgur.com/Vzumlkn.mp4",
                            "https://i.imgur.com/Sus0LAd.mp4",
                            "https://i.imgur.com/yqy9XvB.mp4" // Add your mp4 link here
                        ];

                        let link = links[Math.floor(Math.random() * links.length)];
                        let isVideo = link.endsWith(".mp4");

                        let callback = () => api.sendMessage(
                            { body: msg, attachment: fs.createReadStream(__dirname + "/cache/attachment" + (isVideo ? ".mp4" : ".jpg")), mentions },
                            event.threadID,
                            () => fs.unlinkSync(__dirname + "/cache/attachment" + (isVideo ? ".mp4" : ".jpg"))
                        );

                        request(encodeURI(link)).pipe(fs.createWriteStream(__dirname + "/cache/attachment" + (isVideo ? ".mp4" : ".jpg"))).on("close", () => callback());
                    }
                });
            }
        } catch (err) {
            return console.log("ERROR: " + err);
        }
    }
};
