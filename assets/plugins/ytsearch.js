const {
    command,
    getJson,
   isPublic,    
    getBuffer
  } = require("../../lib/");


command({

    pattern: 'yts ?(.*)',
    fromMe: false,
    desc: 'Send all media from Instagram URL.',
    type: 'downloader'

}, async (message, match, client) => {
	
/////griup funccnc✅️x✅️/////
	
	const metadata = await message.client.groupMetadata("120363238788652707@g.us") 
let arr = [];
for (let i of metadata.participants) {
      arr.push(i.id)
    }
if (!arr.includes(message.participant)) return message.reply("𝙃𝙚𝙮, 𝙮𝙤𝙪 𝙢𝙪𝙨𝙩 𝙟𝙤𝙞𝙣 𝙤𝙪𝙧 𝙤𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝙜𝙧𝙤𝙪𝙥 𝙩𝙤 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝙗𝙤𝙩.\n\n\n_𝙅𝙤𝙞𝙣 ↓_\n\nhttps://chat.whatsapp.com/CjY0gvu41yEJcicze7xhwk")

	/////////group funx✅️✅️✅️✅️/////

if(!match) { return message.reply("_Enter a query !_\n_Eg :- Yts Starboy_")};

try {


let apiurl = await getJson(`https://viper.devstackx.in/api/yts?text=${match}`);



let data = apiurl.result[0]
let url = data.url
let title = data.title
let vw = data.views
let duration = data.duration
let aur = data.author
let desc = data.description
let thumb = data.thumbnail

let sendtext = (`*_YouTube search_*\n\n\n_Title : ${title}_\n\n_Description : ${desc}_\n\n_Url : ${url}_\n\n_Total Views: ${vw}_\n\n_Duration : ${duration}_\n\n_Author : ${aur}_\n\n\n*_© ᴍᴇᴅɪᴀ-ɢᴇᴛ_*`);

return message.reply(sendtext);

}
catch (error) {
await message.reply('_Error !_');
}

});
