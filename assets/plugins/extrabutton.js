const { command, isPublic } = require("../../lib/");
command(
  {
    pattern: "xyzajsalsparkyxyz",
    fromMe: isPublic,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    let whyxxx = ("*_Public Bot Group ↓_* \n\n https://chat.whatsapp.com/DAD1FGg9dES0FpxtrUEheo");

await message.reply(whyxxx);
  }
);
