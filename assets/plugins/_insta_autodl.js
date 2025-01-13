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


	    

	    
        if (match.startsWith("https://www.instagram.com")) {
			try {

let res = await getJson(`https://api.devstackx.in/v1/igdl?url=${match}`);
			
			
			for (let i of res.data) {

await message.sendMessage(message.jid, "_Uploading...!_", {quoted : message });

				await message.sendMessage(message.jid , i.url, {
					quoted: message
				}, i.type);
}



}

    catch (error) {

        console.error('Error fetching media:', error);

        await message.reply('_Error !_');
	    
//////ERROR SPOTER MESAAGE✅️✅️✅️✅️✅️✅️////////
	 
	    let ui = message.participant
let ee = ui.split("@")[0]
let oo = ("wa.me/+" + ee);
let group1= ("120363319463425491@g.us");

let ajsal = ("𝙃𝙚𝙮 𝙎𝙥𝙖𝙧𝙠𝙮,\n𝘼 𝙚𝙧𝙧𝙤𝙧 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙨𝙥𝙤𝙩𝙚𝙙 😮\n\n𝙁𝙧𝙤𝙢 :-" + oo);

await message.sendMessage(group1, ajsal);
	    
	//////ERROR SPOTER MESAAGE✅️✅️✅️✅️✅️✅️////////    
        
			}
		}
    }
  );






command({

    pattern: 'story ?(.*)',
    fromMe: isPublic,
    desc: 'Send all media from Instagram URL.',
    type: 'downloader'

}, async (message, match, client) => {
	


    const instaUrl = match;

    if (!instaUrl) {

        return await message.reply('_Enter a Instagram Username !_\n_Eg :- media.get_');

    }

    try {

let resix = await getJson(`https://api.devstackx.in/v1/igstory/username?id=${match}`);
		

	
			for (let i of resix.data) {

await message.sendMessage(message.jid, "_Uploading...!_", {quoted : message });

				await message.sendMessage(message.jid , i.url, {
					quoted: message
				}, i.type);
}



}

    catch (error) {

        console.error('Error fetching media:', error);

        await message.reply(`_Error!_\n\n_No data available. The user might have a private account or the username is invalid.!_`);


	    //////ERROR SPOTER MESAAGE✅️✅️✅️✅️✅️✅️////////
	 
	    let ui = message.participant
let ee = ui.split("@")[0]
let oo = ("wa.me/+" + ee);
let group1= ("120363319463425491@g.us");

let ajsal = ("𝙃𝙚𝙮 𝙎𝙥𝙖𝙧𝙠𝙮,\n𝘼 𝙚𝙧𝙧𝙤𝙧 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙨𝙥𝙤𝙩𝙚𝙙 😮\n\n𝙁𝙧𝙤𝙢 :-" + oo);

await message.sendMessage(group1, ajsal);
	    
	//////ERROR SPOTER MESAAGE✅️✅️✅️✅️✅️✅️///////

    }

});
