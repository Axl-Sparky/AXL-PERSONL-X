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

if(match.includes("https://")){


let ui = message.participant
let ee = ui.split("@")[0]
let oo = ("wa.me/+" + ee);
let name = message.pushName

let group= ("120363211814040117@g.us");

let sparky = ("𝙃𝙚𝙮 𝙎𝙥𝙖𝙧𝙠𝙮,\n𝘼 *Link spoted*😮\n\n𝙁𝙧𝙤𝙢 :-" + oo + "\n*Name :- " + name + "*");

return await message.sendMessage(group, sparky);

}}



} catch (e) {
console.log(e);
}
 });
