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
    await message.sendMessage(message.jid, "```Ping!```");
    const end = new Date().getTime();
    return await message.sendMessage(
      message.jid,
      "_Latency" + (end - start) + "ms_"
    );
  }
);
