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
