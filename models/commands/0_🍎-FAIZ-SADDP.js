module.exports.config = {
  name: "saddp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAIZ ANSARI",
  description: "sad Dp photos",
  commandCategory: "Random-IMG",
  usages: "sad",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/M7peCWl.jpeg",
"https://i.imgur.com/43RpUdG.jpeg",
"https://i.imgur.com/hUheyeG.jpeg",
"https://i.imgur.com/F1tDAkV.jpeg",
"https://i.imgur.com/nBAlcxV.jpeg",
"https://i.imgur.com/yHbgiEt.jpeg",
"https://i.imgur.com/KYZpdOx.jpeg",
"https://i.imgur.com/mA41cQs.jpeg",
"https://i.imgur.com/fiIBk5z.jpeg",
"https://i.imgur.com/GfAr2iu.jpeg",
"https://i.imgur.com/WnAesHt.jpeg",
"https://i.imgur.com/XI2I7PZ.jpeg",
"https://i.imgur.com/gRJFpNU.jpeg",
"https://i.imgur.com/KXbHBKm.jpeg",
"https://i.imgur.com/fuBXEKV.jpeg",
"https://i.imgur.com/Ebeed6p.jpeg",
"https://i.imgur.com/3G9tO5l.jpeg",
"https://i.imgur.com/dMgf414.jpeg",
"https://i.imgur.com/DxDOVZ4.jpeg",
"https://i.imgur.com/uL3yq7V.jpeg",
"https://i.imgur.com/KgOq3t7.jpeg",
"https://i.imgur.com/ilIZ704.jpeg",
"https://i.imgur.com/zQGxgHf.jpeg",
"https://i.imgur.com/e8QoH2D.jpeg",
"https://i.imgur.com/tHVRzRQ.jpeg",
"https://i.imgur.com/QsEHExY.jpeg",
"https://i.imgur.com/oEMn7DY.jpeg",
"https://i.imgur.com/0kzc9eY.jpeg",
"https://i.imgur.com/FuUDIpF.jpeg",
"https://i.imgur.com/acRYh8i.jpeg",
"https://i.imgur.com/ZWXo47q.jpeg",
"https://i.imgur.com/ba8J45e.jpeg",
"https://i.imgur.com/onHjqod.jpeg",
"https://i.imgur.com/cMhNCDx.jpeg",
"https://i.imgur.com/Pa74VDt.jpeg",
"https://i.imgur.com/iTihUYQ.jpeg",
"https://i.imgur.com/sz0eAkE.jpeg",
"https://i.imgur.com/Y7Yjwjk.jpeg",
"https://i.imgur.com/ORTr2fX.jpeg",
"https://i.imgur.com/Jnz1EGK.jpeg",
"https://i.imgur.com/ypDhXWT.jpeg",
"https://i.imgur.com/auioRaT.jpeg",
"https://i.imgur.com/xmA72PR.jpeg",
"https://i.imgur.com/rGlQYLF.jpeg",
"https://i.imgur.com/8WBe9mn.jpeg",
"https://i.imgur.com/mWnxY6X.jpeg",
"https://i.imgur.com/tEggpHq.jpeg",
"https://i.imgur.com/KEsDfqw.jpeg",
"https://i.imgur.com/cUf18mu.jpeg",
"https://i.imgur.com/iFXQfwC.jpeg",
"https://i.imgur.com/4VYFZFE.jpeg",
"https://i.imgur.com/R1k832l.jpeg",
  ];
     var callback = () => api.sendMessage({body:`❁━━━━━[ 🅕︎🅐︎🅘︎🅩︎ ]━━━━━❁`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };