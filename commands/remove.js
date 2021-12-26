module.exports = {
  name: "remove",
  description: "This is used to remove a member",
  execute(message, args) {
    let member = message.mentions.members.first();
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.kickable) return message.reply("I cannot kick this member!");
    else {
      member.kick();
      return message.reply(
        `${
          message.mentions.users.first().username
        } has been kicked out from your server`
      );
    }
  },
};
