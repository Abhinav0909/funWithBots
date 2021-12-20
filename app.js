const discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const client = new discord.Client();
client.on("message", async (message) => {
  console.info(`Logged in ${client.user.tag}`);
  if (message.author.bot) return;
  if (!message.content.startsWith(process.env.PREFIX)) return;
  //convert the rest of messages into command name
  const commandMessage = message.content.slice(process.env.PREFIX.length);
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
    let member = message.mentions.members.first();
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.kickable) return message.reply("I cannot kick this member!");
    else {
      member.kick();
      return message.reply(
        `${member.username} has been kicked out from your server`
      );
    }
  }
  //Assign a new role to a new member'
  else if (command === "addRole") {
    const new_role = message.guild.roles.cache.find(
      (position) => position.id === "123456"
    );
    const member = message.mentions.members.first();
    //add a role to a member
    if (member) {
      member.roles.add(new_role);
      message.reply(`${member.username} has been assigned to its new role`);
    } else {
      message.author.roles.add(new_role);
      message.reply(
        `Since there is no user.So it has been assigned to owner : -${author.username} `
      );
    }
  }
  //by default
  else {
    return message.reply(
      "Check your commands that you have entered correctfully"
    );
  }
});

client.login(process.env.BOT_TOKEN);
