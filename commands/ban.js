module.exports={
    name:'ban',
    description:'This is used to ban a member',
    execute(message,args){
      let member = message.mentions.members.first();
      if(!member)return message.reply("This member is not a valid member");
      if(!member.bannable)return message.reply('We cannot ban this member');
      member.ban();
      console.info(message.mentions.users.first().id);
      return message.reply(`${message.mentions.users.first().username} has been banned`);
    }
}