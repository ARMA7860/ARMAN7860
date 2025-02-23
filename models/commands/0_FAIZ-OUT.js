const crypto = require("crypto");

module.exports.config = {
    name: "out",
    version: "1.0.4",
    hasPermssion: 2,
    credits: "FAIZ BABU",
    description: "MADE BY FAIZ BABU 🙂🤞",
    commandCategory: "Admin",
    usages: "out",
    cooldowns: 5,
};

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, senderID, body } = event;


    const authorizedUserID = "61553634015672";
    if (senderID !== authorizedUserID) return;

    if (!body) return;

    const triggerWords = ["bot chlo yaha se", "nikal", "bhag", "chala jaa is group se", "nikal bsdk"];

    if (triggerWords.includes(body.toLowerCase().trim())) {
        api.sendMessage("ओके बॉस मैं इस ग्रुप से जा रहा हूं! 🙂🤞", threadID, () => {
            api.removeUserFromGroup(api.getCurrentUserID(), threadID, (err) => {
                if (err) {
                    api.sendMessage("Bot ko group se nikalne me koi error aayi। 🙁", threadID);
                } else {
                    console.log(`Bot left the group: ${threadID}`);
                }
            });
        });
    }
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, senderID } = event;

    const authorizedUserID = "100070412730192";
    if (senderID !== authorizedUserID) return api.sendMessage(
        "सिर्फ authorized user ही इस command का उपयोग कर सकता है।", 
        threadID
    );

    if (!args[0]) {
        api.sendMessage("Ok Boss, jaa रहा हूं! 🙂🤞", threadID, () => {
            api.removeUserFromGroup(api.getCurrentUserID(), threadID, (err) => {
                if (err) {
                    api.sendMessage("Bot ko group se nikalने में कोई error आई। 🙁", threadID);
                } else {
                    console.log(`Bot left the group: ${threadID}`);
                }
            });
        });
    }
};
