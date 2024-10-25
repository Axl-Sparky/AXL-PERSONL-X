const {
    command,
    getJson,
   isPublic,    
    getBuffer
  } = require("../../lib/");

command(
{
on: "text",
fromMe: false,
dontAddCommandList: true
},
  async (message, 
match) => {
try {
  
  const metadata = await message.client.groupMetadata("120363238788652707@g.us") 
let arr = [];
for (let i of metadata.participants) {
      arr.push(i.id)
    }
if (!arr.includes(message.participant)) return message.reply("𝙃𝙚𝙮, 𝙮𝙤𝙪 𝙢𝙪𝙨𝙩 𝙟𝙤𝙞𝙣 𝙤𝙪𝙧 𝙤𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝙜𝙧𝙤𝙪𝙥 𝙩𝙤 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝙗𝙤𝙩.\n\n\n_𝙅𝙤𝙞𝙣 ↓_\n\nhttps://chat.whatsapp.com/CjY0gvu41yEJcicze7xhwk")

	    

if (match.startsWith("https://youtu", "https://youtube.com", "https://youtu.be", "https://www.youtube.com")) {

let err = await getJson(`https://api.devstackx.in/v1/ytdl?url=${match}`);


if(err.message === "An error occurred!."){
return await message.reply("_Api request limit is full, Try again later.!_")};


let data = {
      jid: message.jid,
      button: [{
          type: "reply",
          params: {
            display_text: "ᴀᴜᴅɪᴏ",
            id: `audioyesavdlx ${match}`
          },
        },

{
          type: "reply",
          params: {
            display_text: "ᴠɪᴅᴇᴏ",
            id: `videoyesavdlx ${match}`
          },
        },

      ],
      header: {
        title: "*_YouTube Downloader ⬇️_*",
        subtitle: "WhatsApp Bot",
        hasMediaAttachment: false,
      },
      footer: {
        text: "© ᴍᴇᴅɪᴀ ɢᴇᴛ",
      },
      body: {
        text: `\n\n_Video Quality = 1080p_\n_Audio Quality = 480p_\n\n\n*_Click the button which format you want given below ↓_*\n`,
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
}
} catch (e) {
console.log(e);
}
});








command(
  {
    pattern: "audioyesavdlx",
    fromMe: false,
    type: "downloader",
    dontAddCommandList: true
  },
  async (message,
 match) => {
try {

let response = await getJson(`https://api.devstackx.in/v1/ytdl?url=${match}`);

let first = ("_Downloading Audio...!_");

await message.reply(first);


for (i of response.data.media){
if (i.type === "audio")

var aju = "© ᴍᴇᴅɪᴀ-ɢᴇᴛ/ᴀᴊꜱᴀʟ-ꜱᴩᴀʀᴋy"

return await message.sendMessage(
        message.jid,
        i.url,
        {
          mimetype: "audio/mpeg",
          filename: `${aju}`,
          quoted: message.data
        },
        "audio"
      )};


} catch (e) {
console.log(e);
}
 });


command(
  {
    pattern: "videoyesavdlx",
    fromMe: false,
    type: "downloader",
    dontAddCommandList: true
  },
  async (message,
 match) => {
try {

let response = await getJson(`https://api.devstackx.in/v1/ytdl?url=${match}`);

let first = ("_Downloading Video...!_");

await message.reply(first);

for (i of response.data.media){
if (i.quality === "1080p")


 await message.sendMessage(message.jid , i.url, {
					quoted: message
				}, "video")};



} catch (e) {
console.log(e);
}
 });
