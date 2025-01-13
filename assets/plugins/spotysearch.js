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
