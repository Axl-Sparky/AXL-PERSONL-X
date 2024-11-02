const { fromBuffer, mimeTypes } = require("file-type");
const { command, isPublic } = require("../../lib/");
command(
  {
    pattern: "ping",
    fromMe: isPublic,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
let first = ("_Checking....!_");

let pong = await message.sendMessage(message.jid,  first, { quoted: message });



    const end = new Date().getTime();

var zzz = ("_Latency " + (end - start) + " ms_" );

 return await message.sendMessage(message.jid,   zzz , {edit: pong.key });

  });
