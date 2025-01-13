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
      fromMe: true,
      desc: "autodl",
      type: "user",
    },
    async (message, match) => {


	    

	    
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
