const { command, isPublic } = require("../../lib/")
command(
  {
    pattern: "hi",
    fromMe: isPublic,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {

let data = {
      jid: message.jid,
      button: [

        {
          type: "reply",
          params: {
            display_text: "ᴩɪɴɢ",
            id: "ping",
          },
        },

{
          type: "reply",
          params: {
            display_text: "ɢʀᴏᴜᴩꜱ",
            id: "xyzajsalsparkyxyz",
          },
        },


        {
          type: "url",
          params: {
            display_text: "ᴠɪꜱɪᴛ",
            url: "https://sy4m.vercel.app",
            merchant_url: "https://sy4m.vercel.app",
          },
        },

{
          type: "url",
          params: {
            display_text: "ᴄʜᴀɴɴᴇʟ",
            url: "https://whatsapp.com/channel/0029Va97vPqGU3BKjEyFQX3l",
            merchant_url: "https://whatsapp.com/channel/0029Va97vPqGU3BKjEyFQX3l",
          },
        },


      ],
      header: {
        title: "𝙎𝙆𝙎 𝘽𝙊𝙏☮︎",
        subtitle: "𝘈 𝘴𝘪𝘮𝘱𝘭𝘦 𝘮𝘶𝘭𝘵𝘪 𝘥𝘦𝘷𝘪𝘤𝘦 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘣𝘰𝘵 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘈𝘟𝘓-𝘚𝘗𝘈𝘙𝘒𝘠",
        hasMediaAttachment: false,
      },
      footer: {
        text: "𝘔𝘦𝘥𝘪𝘢-𝘎𝘦𝘵 💗",
      },
      body: {
        text: "_Hey!_\nī.am 𝘈 𝘴𝘪𝘮𝘱𝘭𝘦 𝘮𝘶𝘭𝘵𝘪 𝘥𝘦𝘷𝘪𝘤𝘦 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘣𝘰𝘵 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘈𝘟𝘓-𝘚𝘗𝘈𝘙𝘒𝘠",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
    
  }
);


command(
  {
    pattern: "hy",
    fromMe: isPublic,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {

let data = {
      jid: message.jid,
      button: [

        {
          type: "reply",
          params: {
            display_text: "ᴩɪɴɢ",
            id: "ping",
          },
        },

{
          type: "reply",
          params: {
            display_text: "ɢʀᴏᴜᴩꜱ",
            id: "xyzajsalsparkyxyz",
          },
        },


        {
          type: "url",
          params: {
            display_text: "ᴠɪꜱɪᴛ",
            url: "https://sy4m.vercel.app",
            merchant_url: "https://sy4m.vercel.app",
          },
        },

{
          type: "url",
          params: {
            display_text: "ᴄʜᴀɴɴᴇʟ",
            url: "https://whatsapp.com/channel/0029Va97vPqGU3BKjEyFQX3l",
            merchant_url: "https://whatsapp.com/channel/0029Va97vPqGU3BKjEyFQX3l",
          },
        },


      ],
      header: {
        title: "𝙎𝙆𝙎 𝘽𝙊𝙏☮︎",
        subtitle: "𝘈 𝘴𝘪𝘮𝘱𝘭𝘦 𝘮𝘶𝘭𝘵𝘪 𝘥𝘦𝘷𝘪𝘤𝘦 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘣𝘰𝘵 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘈𝘟𝘓-𝘚𝘗𝘈𝘙𝘒𝘠",
        hasMediaAttachment: false,
      },
      footer: {
        text: "𝘔𝘦𝘥𝘪𝘢-𝘎𝘦𝘵 💗",
      },
      body: {
        text: "_Hey!_\nī.am 𝘈 𝘴𝘪𝘮𝘱𝘭𝘦 𝘮𝘶𝘭𝘵𝘪 𝘥𝘦𝘷𝘪𝘤𝘦 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘣𝘰𝘵 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘈𝘟𝘓-𝘚𝘗𝘈𝘙𝘒𝘠",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
    
  }
);

command(
  {
    pattern: "hey",
    fromMe: isPublic,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {

let data = {
      jid: message.jid,
      button: [

        {
          type: "reply",
          params: {
            display_text: "ᴩɪɴɢ",
            id: "ping",
          },
        },

{
          type: "reply",
          params: {
            display_text: "ɢʀᴏᴜᴩꜱ",
            id: "xyzajsalsparkyxyz",
          },
        },


        {
          type: "url",
          params: {
            display_text: "ᴠɪꜱɪᴛ",
            url: "https://sy4m.vercel.app",
            merchant_url: "https://sy4m.vercel.app",
          },
        },

{
          type: "url",
          params: {
            display_text: "ᴄʜᴀɴɴᴇʟ",
            url: "https://whatsapp.com/channel/0029Va97vPqGU3BKjEyFQX3l",
            merchant_url: "https://whatsapp.com/channel/0029Va97vPqGU3BKjEyFQX3l",
          },
        },


      ],
      header: {
        title: "𝙎𝙆𝙎 𝘽𝙊𝙏☮︎",
        subtitle: "𝘈 𝘴𝘪𝘮𝘱𝘭𝘦 𝘮𝘶𝘭𝘵𝘪 𝘥𝘦𝘷𝘪𝘤𝘦 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘣𝘰𝘵 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘈𝘟𝘓-𝘚𝘗𝘈𝘙𝘒𝘠",
        hasMediaAttachment: false,
      },
      footer: {
        text: "𝘔𝘦𝘥𝘪𝘢-𝘎𝘦𝘵 💗",
      },
      body: {
        text: "_Hey!_\nī.am 𝘈 𝘴𝘪𝘮𝘱𝘭𝘦 𝘮𝘶𝘭𝘵𝘪 𝘥𝘦𝘷𝘪𝘤𝘦 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘣𝘰𝘵 𝘤𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘈𝘟𝘓-𝘚𝘗𝘈𝘙𝘒𝘠",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
    
  }
);
