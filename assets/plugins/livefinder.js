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

	    

if (match.startsWith("https://www.youtube.com/live")) {

let string = [ "_Hey Dude.., it's live, don't try again🙂_\n_Go and die!!😂_", "_Hey brother_, \n_I know it's a live video, You can't down me!!❤️_","_Wtf? 💀_\n_Trying to down me?,nice try dont try again!_","_It was too crazy_, \n_Now you can die🫴🏻!!!_"];
let randomindex = Math.floor(Math.random() * string.length);
let randomString = string[randomindex];
return message.reply(randomString);

}

} catch (e) {
console.log(e);
}
 });
