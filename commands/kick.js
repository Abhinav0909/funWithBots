module.exports = {
  name: "kick",
  describe: "This is used to show which member you want to kick",
  execute(message, args) {
    if (message.mentions.users.size) {
      const taaggedUser = message.mentions.users.first();
      return message.reply(`You wanted to kick : ${taaggedUser.username}`);
    } else {
      return message.reply("Please enter a user which is valid");
    }
  },
};
