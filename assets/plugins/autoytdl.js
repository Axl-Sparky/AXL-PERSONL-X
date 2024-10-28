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

	    

if (match.startsWith("https://youtu")) {

let response = await getJson(`https://api.devstackx.in/v1/ytdl?url=${match}`);


if(response.message === "An error occurred!."){
return await message.reply("_Api request limit is full, Try again later.!_")} else {

let get = response.data
let title = get.title
let duration = get.duration


let first = (`_Downloading....!_\n\n\n_Title : ${title}_\n_Duration : ${duration}_\n\n_Audio Quality = 128kbps_\n_Video Quality = 240p_`);

await message.reply(first);


for (xos of response.data.media)
if (xos.quality === "240p")


await message.sendMessage(message.jid , xos.url, {
					quoted: message
				}, "video");


for (i of response.data.media)
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
}
} catch (e) {
console.log(e);
}
 });
