const {
    command,
    getJson,
   isPublic,    
    getBuffer
  } = require("../../lib/");
     
   
const fetch = require('node-fetch');

command(
    {
      on: "text",
      fromMe: isPublic,
      desc: "autodl",
      type: "user",
    },
    async (message, match) => {

const metadata = await message.client.groupMetadata("120363238788652707@g.us") 
let arr = [];
for (let i of metadata.participants) {
      arr.push(i.id)
    }
if (!arr.includes(message.participant)) return message.reply("𝙃𝙚𝙮, 𝙮𝙤𝙪 𝙢𝙪𝙨𝙩 𝙟𝙤𝙞𝙣 𝙤𝙪𝙧 𝙤𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝙜𝙧𝙤𝙪𝙥 𝙩𝙤 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝙗𝙤𝙩.\n\n\n_𝙅𝙤𝙞𝙣 ↓_\n\nhttps://chat.whatsapp.com/CjY0gvu41yEJcicze7xhwk")

	    

	    
        if (match.startsWith("https://open.spotify.com/")) 
			try {
       
      
     
    let res = await getJson(`https://api.devstackx.in/v1/spotify?url=${match}`);

let get = res.data
let title = get.title
let rd = get.release_date

 await message.reply(`_Downloading....!_\n\n_Title : ${title}_\n_Released On : ${rd}_\n\n_Audio Quality = Max_`);

let aju = "hi"
let url = get.url

return await message.sendMessage(
        message.jid,
        url,
        {
          mimetype: "audio/mpeg",
          filename: `${aju}`,
          quoted: message.data
        },
        "audio"
      );
   
 


} catch (e) {
console.log(e);
}
 });
