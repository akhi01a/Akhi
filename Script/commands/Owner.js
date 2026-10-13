const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  aliases: ["ownerinfo", "owners"],
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  const info = `
👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢

👤 𝗡𝗮𝗺𝗲: Sifat
🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲: Sifu
🎂 𝗔𝗴𝗲: 𝟭𝟴+
💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻: 𝗦𝗶𝗻𝗴𝗹𝗲
🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻: 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻: 𝗛𝗦𝗖
🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: Chapainawabganj 

🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦

📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
fb.com/61592444193026

💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿:
m.me/61592444193026

📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:
wa.me/
`;

  const images = [
    "",
    "",
    "",
    ""
  ];

  const randomImg =
    images[Math.floor(Math.random() * images.length)];

  const filePath = __dirname + "/cache/owner.jpg";

  const callback = () => {
    api.sendMessage(
      {
        body: info,
        attachment: fs.createReadStream(filePath)
      },
      event.threadID,
      () => {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    );
  };

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(filePath))
    .on("close", callback);
};
