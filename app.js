const discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const client = new discord.Client();
const prefix = "!";
client.on("message", async (message) => {
  console.info(`Logged in ${client.user.tag}`);
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  //convert the rest of messages into command name
  const commandMessage = message.content.slice(prefix.length);
  const args = commandMessage.split(" ");
  //shift removes the first element of array
  const command = args.shift().toLowerCase();

  //command to have ping pong word
  if (command === "ping") {
    const processTime = Date.now() - message.createdTimestamp;
    message.reply(`Pong Time taken to process the command ${processTime}`);
    //members that I want to kick it will just display
  } else if (command === "kick") {
    if (message.mentions.users.size) {
      const taaggedUser = message.mentions.users.first();
      return message.reply(`You wanted to kick : ${taaggedUser.username}`);
    } else {
      return message.reply("Please enter a user which is valid");
    }
  }

  //command to remove a member
  else if (command === "remove") {
    if (!message.member.hasPermission("KICK_MEMBERS"));
    message.reply("You do not have permission to use this command");
  }
  const members = message.guild.members.cache.get(args[0]);
  if (members) {
    members.kick();
    if (members.kick()) message.channel.send(`${members} was kicked`);
    else message.channel.send("I cannot kick that member");
  } else message.channel.send("That member have been not found");
});

client.login(process.env.BOT_TOKEN);
