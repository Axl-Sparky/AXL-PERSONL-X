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
      fromMe: false,
      desc: "autodl",
      type: "user",
    },
    async (message, match) => {

try {

if(message.jid === "120363338794084249@g.us"){

if(match.startsWith("https://")){

 await message.client.sendMessage(message.jid, { delete: message.key })

 await message.client.groupParticipantsUpdate(
    message.jid, 
    [message.participant],
    "remove"
)
return message.reply("_Deleted a Virus baby!_");

return;
}
}



} catch (e) {
console.log(e);
}
 });
