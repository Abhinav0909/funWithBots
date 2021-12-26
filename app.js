const Discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const commandSource = require(`./commands/${file}`);
  client.commands.set(commandSource.name, commandSource);
}
client.once("ready", () => {
  console.info(" Your bot is online");
});
client.once("disconnect", () => {
  console.info(" Your bot is offline");
});
client.on("message", async (message) => {
  console.info(`Logged in ${client.user.tag}`);
  if (message.author.bot) return;
  if (!message.content.startsWith(process.env.PREFIX)) return;
  //convert the rest of messages into command name
  const commandMessage = message.content.slice(process.env.PREFIX.length);
  const args = commandMessage.split(" ");
  //shift removes the first element of array
  const command = args.shift().toLowerCase();

  //   //command to have ping pong word
  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  }
  //members that I want to kick it will just display
  else if (command === "kick") {
    client.commands.get("kick").execute(message, args);
  }

  //command to remove a member
  else if (command === "remove") {
    client.commands.get("remove").execute(message, args);
  }
  //Assign a new role to a new member'
  else if (command === "addRole") {
    client.commands.get("addRole").execute(message, args);
  } else if (command === "ban") {
    client.commands.get("ban").execute(message, args);
  } else if (command === "unban") {
    client.commands.get("unban").execute(message, args);
  } else if (command === "play") {
    client.commands.get("play").execute(message, args);
  }
  //   //by default
  // else {
  //  return message.reply(
  //     "Check your commands that you have entered correctfully"
  //   );
  //  // client.commands.get("error").execute(message, args);
  // }
});

client.login(process.env.BOT_TOKEN);
