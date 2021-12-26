module.exports = {
  name: "addRole",
  description: "This is used to add new role to our new member",
  execute(message, args) {
    let new_role = message.member.roles.cache.find(new_role => new_role.name === "#discordCommands#3348");
    let member = message.mentions.members.first();
    //add a role to a member

    member.roles.add(new_role);
    message.reply(`${member.username} has been assigned to its new role`);

    message.author.roles.add(new_role);
    message.reply(
      `Since there is no user.So it has been assigned to owner : -${author.username} `
    );
  }
}
  