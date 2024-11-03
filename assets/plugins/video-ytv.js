const { command,
    getJson,
   isPublic,    
    getBuffer
  } = require("../../lib/");


command({

    pattern: 'video ?(.*)',
    fromMe: false,
    desc: 'yt video downloader.',
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

if(!match) { return message.reply("_Enter a Youtube link !_")};

if(!match.startsWith("https://youtu")){
return message.reply("_Enter a valid url !_")};

try {
let response = await getJson(`https://api.devstackx.in/v1/ytdl?url=${match}`);


if(response.message === "An error occurred!."){
return await message.reply("_Api request limit is full, Try again later.!_")} else {

let get = response.data
let title = get.title
let duration = get.duration



let first = (`_Downloading video....!_\n\n\n_Title : ${title}_\n_Duration : ${duration}_\n\n_Video Quality = 480p_`);

await message.reply(first);

         
for (xos of response.data.media)
if (xos.quality === "480p")


return await message.sendMessage(message.jid , xos.url, {
					quoted: message
				}, "video");
}


}
catch (error) {
await message.reply('_Error !_');
}

});





command({

    pattern: 'ytv ?(.*)',
    fromMe: false,
    desc: 'yt video downloader.',
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

if(!match) { return message.reply("_Enter a Youtube link !_")};

if(!match.startsWith("https://youtu")){
return message.reply("_Enter a valid url !_")};

try {
let response = await getJson(`https://api.devstackx.in/v1/ytdl?url=${match}`);


if(response.message === "An error occurred!."){
return await message.reply("_Api request limit is full, Try again later.!_")} else {

let get = response.data
let title = get.title
let duration = get.duration



let first = (`_Downloading video....!_\n\n\n_Title : ${title}_\n_Duration : ${duration}_\n\n_Video Quality = 480p_`);

await message.reply(first);

         
for (xos of response.data.media)
if (xos.quality === "480p")


return await message.sendMessage(message.jid , xos.url, {
					quoted: message
				}, "video");
}


}
catch (error) {
await message.reply('_Error !_');
}

});
