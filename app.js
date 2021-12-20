const discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const client = new discord.Client();
const prefix = '!'
client.on("message",(message)=>{
if(message.author.bot)return;
if(!message.content.startsWith(prefix))return;
//convert the rest of messages into command name
const commandMessage = message.content.slice(prefix.length);
const args = commandMessage.split(' ');
//shift removes the first element of array
const command = args.shift().toLowerCase();
if(command === 'ping'){
    const processTime = Date.now() - message.createdTimestamp;
    message.reply(`Pong Time taken to process the command ${processTime}`);
}

});
client.login(process.env.BOT_TOKEN);
