module.exports.config = {
  name: "cutedp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAIZ ANSARI",
  description: "cute Dp photos",
  commandCategory: "Random-IMG",
  usages: "cute",
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
"https://i.imgur.com/lsawaKB.jpeg",
"https://i.imgur.com/e62ZPTp.jpeg",
"https://i.imgur.com/eBchXm3.jpeg",
"https://i.imgur.com/pJRVIkF.jpeg",
"https://i.imgur.com/cr33TC5.jpeg",
"https://i.imgur.com/6ixpNR3.jpeg",
"https://i.imgur.com/LFivGk3.jpeg",
"https://i.imgur.com/AD3nS6D.jpeg",
"https://i.imgur.com/rIcVLNE.jpeg",
"https://i.imgur.com/3NqgqiN.jpeg",
"https://i.imgur.com/qrOZAE9.jpeg",
"https://i.imgur.com/KqH4Akv.jpeg",
"https://i.imgur.com/vmJZzmX.jpeg",
"https://i.imgur.com/8crB473.jpeg",
"https://i.imgur.com/PzvBoHt.jpeg",
"https://i.imgur.com/GQTDLsk.jpeg",
"https://i.imgur.com/ezreR3a.jpeg",
"https://i.imgur.com/03ot2ES.jpeg",
"https://i.imgur.com/gteGXfq.jpeg",
"https://i.imgur.com/k9CnFcw.jpeg",
"https://i.imgur.com/cT3vxLu.jpeg",
"https://i.imgur.com/ZTWf4IL.jpeg",
"https://i.imgur.com/ybRNGc5.jpeg",
"https://i.imgur.com/K4o6Naf.jpeg",
"https://i.imgur.com/rBiC9bT.jpeg",
"https://i.imgur.com/aYYjEhn.jpeg",
"https://i.imgur.com/ii6zc9o.jpeg",
"https://i.imgur.com/fTV1s3V.jpeg",
"https://i.imgur.com/gqGXYzQ.jpeg",
"https://i.imgur.com/CKpyy8J.jpeg",
"https://i.imgur.com/NWwCBWO.jpeg",
"https://i.imgur.com/LT5DweM.jpeg",
"https://i.imgur.com/eFJTw3M.jpeg",
"https://i.imgur.com/tEnTCkN.jpeg",
"https://i.imgur.com/8WgsmI3.jpeg",
"https://i.imgur.com/O0iWKvG.jpeg",
"https://i.imgur.com/WQp3njw.jpeg",
"https://i.imgur.com/QFEN3mA.jpeg",
"https://i.imgur.com/kWGo0YA.jpeg",
"https://i.imgur.com/WxXaYMn.jpeg",
  ];
     var callback = () => api.sendMessage({body:`❁━━━━━[ 🅕︎🅐︎🅘︎🅩︎ ]━━━━━❁`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };