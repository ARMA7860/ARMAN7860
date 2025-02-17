const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
"https://i.imgur.com/gQ4Ek9b.jpeg",
"https://i.imgur.com/BDyJsIN.jpeg",
"https://i.imgur.com/k3j3YvM.jpeg",
"https://i.imgur.com/xw8UINn.jpeg",
"https://i.imgur.com/bWaw6kP.jpeg",
"https://i.imgur.com/WXC2jG7.jpeg",
"https://i.imgur.com/Jc5MbRz.jpeg",
"https://i.imgur.com/VG3LfyG.jpeg",
"https://i.imgur.com/k24uDfW.jpeg",
"https://i.imgur.com/Ntxtl0u.jpeg",
"https://i.imgur.com/Zv3fjdE.jpeg",
"https://i.imgur.com/0u12Hhu.jpeg",
"https://i.imgur.com/XKU0q2x.jpeg",
"https://i.imgur.com/eSmSv1r.jpeg",
"https://i.imgur.com/EgZatAp.jpeg",
"https://i.imgur.com/SnFANPj.jpeg",
"https://i.imgur.com/Y19UFKh.jpeg",
"https://i.imgur.com/XQl4wZl.jpeg",
"https://i.imgur.com/lCTvIlM.jpeg",
"https://i.imgur.com/XyouXvF.jpeg",
"https://i.imgur.com/V6V9L5E.jpeg",
"https://i.imgur.com/2w9QBIQ.jpeg",
"https://i.imgur.com/8Z9hD5O.jpeg",
"https://i.imgur.com/dN4VnYw.jpeg",
"https://i.imgur.com/SXnSwp3.jpeg",
"https://i.imgur.com/TSKkdRH.jpeg",
"https://i.imgur.com/Kuc7M42.jpeg",
"https://i.imgur.com/2vOOQM2.jpeg",
"https://i.imgur.com/0MQ2yDm.jpeg",
"https://i.imgur.com/3H5GWNE.jpeg",
"https://i.imgur.com/fyJ1WL3.jpeg",
"https://i.imgur.com/QJW8V28.jpeg",
"https://i.imgur.com/R5IHFlP.jpeg",
"https://i.imgur.com/qZrolLB.jpeg",
"https://i.imgur.com/uwYB1UT.jpeg",
"https://i.imgur.com/5HGyZeo.jpeg",
"https://i.imgur.com/uftR9yM.jpeg",
"https://i.imgur.com/P8vDRDy.jpeg",
"https://i.imgur.com/6EXyq2P.jpeg",
"https://i.imgur.com/RS1ewBt.jpeg",
"https://i.imgur.com/P70Ysvm.jpeg",
"https://i.imgur.com/NU3HHTr.jpeg",
"https://i.imgur.com/UHC6vtH.jpeg",
"https://i.imgur.com/WuYdrs0.jpeg",
"https://i.imgur.com/QSFBgNC.jpeg",
"https://i.imgur.com/Hs4mG8u.jpeg",
"https://i.imgur.com/4HztNfU.jpeg",
"https://i.imgur.com/WlWVSGa.jpeg",
"https://i.imgur.com/bGNyfn4.jpeg",
"https://i.imgur.com/mutw6i0.jpeg",
"https://i.imgur.com/D8u58b0.jpeg",
"https://i.imgur.com/ED21Ufk.jpeg",
"https://i.imgur.com/yvAm8Wz.jpeg",
"https://i.imgur.com/i0NxcUH.jpeg",
"https://i.imgur.com/SgWXwt9.jpeg",
"https://i.imgur.com/wz62OLX.jpeg",
"https://i.imgur.com/BXbc4oL.jpeg",
"https://i.imgur.com/G5NU6f0.jpeg",
"https://i.imgur.com/v6OSOG0.jpeg",
"https://i.imgur.com/lR3lVKd.jpeg",
"https://i.imgur.com/C9PVeBg.jpeg",
"https://i.imgur.com/MkdFpfw.jpeg",
"https://i.imgur.com/UzcbBsp.jpeg",
"https://i.imgur.com/rsxGRpe.jpeg",
"https://i.imgur.com/ATrmUAY.jpeg",
"https://i.imgur.com/khoSO89.jpeg",
"https://i.imgur.com/7JPDU3Q.jpeg",
"https://i.imgur.com/B5pROc1.jpeg",
"https://i.imgur.com/0e4fBZK.jpeg",
"https://i.imgur.com/NCNPyx4.jpeg",
"https://i.imgur.com/lyV1DoQ.jpeg",
"https://i.imgur.com/RTmJKlP.jpeg",
"https://i.imgur.com/fFvREL4.jpeg",
"https://i.imgur.com/UyQTQst.jpeg",
"https://i.imgur.com/n0dajZX.jpeg",
"https://i.imgur.com/1dPn08b.jpeg",
"https://i.imgur.com/iRCH6Gv.jpeg",
"https://i.imgur.com/AHVc2wM.jpeg",
"https://i.imgur.com/8BxR8LY.jpeg",
"https://i.imgur.com/m7rBupp.jpeg",
"https://i.imgur.com/Uerq04F.jpeg",
"https://i.imgur.com/98NkxyO.jpeg",
"https://i.imgur.com/rYBVN6s.jpeg",
"https://i.imgur.com/wyLxNzk.jpeg",
"https://i.imgur.com/sa1ZbUP.jpeg",
"https://i.imgur.com/nzFrpsY.jpeg",
"https://i.imgur.com/Bls9Orn.jpeg",
"https://i.imgur.com/LEHgUb0.jpeg",
"https://i.imgur.com/8BueOAX.jpeg",
"https://i.imgur.com/UZRfNB1.jpeg",
"https://i.imgur.com/L8U01dJ.jpeg",
"https://i.imgur.com/YgDndyj.jpeg",
"https://i.imgur.com/2tYgqqG.jpeg",
"https://i.imgur.com/ycCIG9G.jpeg",
"https://i.imgur.com/WfniaSI.jpeg",
"https://i.imgur.com/6i6CJFJ.jpeg",
"https://i.imgur.com/68UWOV1.jpeg",
"https://i.imgur.com/nEITksD.jpeg",
"https://i.imgur.com/rjgFl5T.jpeg",
"https://i.imgur.com/wr78uks.jpeg",
"https://i.imgur.com/tdq5pqW.jpeg",
"https://i.imgur.com/8ugF4Zx.jpeg",
"https://i.imgur.com/Njf6yhs.jpeg",
"https://i.imgur.com/Fz3pdgq.jpeg",
"https://i.imgur.com/y4GmHjO.jpeg",
"https://i.imgur.com/fWpD1DW.jpeg",
"https://i.imgur.com/LLJXDkU.jpeg",
"https://i.imgur.com/r5NRaSW.jpeg",
"https://i.imgur.com/koco9oT.jpeg",
"https://i.imgur.com/YzTI9FV.jpeg",
"https://i.imgur.com/BhIH8Ir.jpeg",
"https://i.imgur.com/6TjWv2Y.jpeg",
"https://i.imgur.com/Feh5pdR.jpeg",
"https://i.imgur.com/uZRbIn5.jpeg",
"https://i.imgur.com/BgXhgQL.jpeg",
"https://i.imgur.com/VucqZS3.jpeg",
"https://i.imgur.com/nEe21CS.jpeg",
"https://i.imgur.com/QvAWdVe.jpeg",
"https://i.imgur.com/EKZ6wb4.jpeg",
"https://i.imgur.com/X50jjKB.jpeg",
"https://i.imgur.com/f7AoXep.jpeg",
"https://i.imgur.com/bABcCgC.jpeg",
"https://i.imgur.com/my8mUO9.jpeg",
"https://i.imgur.com/Oc2VDKM.jpeg",
"https://i.imgur.com/pE00rMP.jpeg",
"https://i.imgur.com/7jD58zg.jpeg",
"https://i.imgur.com/JKHuQCw.jpeg",
"https://i.imgur.com/y8UEFS4.jpeg",
"https://i.imgur.com/rGL4lKB.jpeg",
"https://i.imgur.com/4DyqBgM.jpeg",
"https://i.imgur.com/VwC6OK7.jpeg",
"https://i.imgur.com/6faWjwQ.jpeg",
"https://i.imgur.com/2UwxPYo.jpeg",
"https://i.imgur.com/V14Aazs.jpeg",
"https://i.imgur.com/SqS3bxu.jpeg",
"https://i.imgur.com/CWMB04U.jpeg",
"https://i.imgur.com/1IucdIJ.jpeg",
"https://i.imgur.com/CpiZO9n.jpeg",
"https://i.imgur.com/bIPRPFJ.jpeg",
"https://i.imgur.com/etvu3Ln.jpeg",
"https://i.imgur.com/ktBe7FX.jpeg",
"https://i.imgur.com/TkcOdDl.jpeg",
"https://i.imgur.com/fnRPzCA.jpeg",
"https://i.imgur.com/9Rw1ayA.jpeg",
"https://i.imgur.com/49PMoLA.jpeg",
"https://i.imgur.com/5VGE1Id.jpeg",
"https://i.imgur.com/y6aTjJS.jpeg",
"https://i.imgur.com/Ny55vjg.jpeg",
"https://i.imgur.com/qCSY2za.jpeg",
"https://i.imgur.com/zFeGQ4I.jpeg",
];

module.exports.config = {
  name: "boydp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAIZ BABU",
  description: "MADE BY FAIZ BABU",
  commandCategory: "no prefix", 
  usages: "BOYDP",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
 if (event.body.indexOf("boydp")==0 || 
      event.body.indexOf("Boydp")==0 ||
      event.body.indexOf("boy dp")==0 ||
      event.body.indexOf("Boy dp")==0 || 
      event.body.indexOf("#boydp")==0 || 
      event.body.indexOf("#Boydp")==0) {
    const rahad = [
      "💝 𝐌𝐚𝐝𝐞 𝐁𝐲 𝐅𝐚𝐢𝐳 𝐚𝐧𝐬𝐚𝐫𝐢 💝"
    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.jpg")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.jpg"), event.messageID);

    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.jpg")).on("close", () => callback());
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
  if (typeof data["boydp"] === "undefined" || data["boydp"]) data["boydp"] = false;
  else data["boydp"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["boydp"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};