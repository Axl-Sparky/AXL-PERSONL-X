const {
    command,
    getJson,
   isPublic,    
    getBuffer
  } = require("../../lib/");


command({

    pattern: 'spotify ?(.*)',
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

if(!match) { return message.reply("_Enter a song name !_\n_Eg :- Spotify Starboy_")};

try {
let res = await getJson(`https://ameen-api.vercel.app/sfys?query=${match}`);

let url = res.data[0].url
let title = res.data[0].title
let dr = res.data[0].duration

return message.reply(`_Title : ${title}_\n_Duration : ${dr}_\n_Spotify Url :-_ ${url}\n\n_Hey, if you want download the song,just copy the url and paste in my chat_`);





}
catch (error) {
await message.reply('_Error !_');
}

});
