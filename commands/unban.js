module.exports={
    name:'unban',
    description:'This is used to unban a member',
    execute(message,args){
        message.guild.members.unban("732300796816785457");
        return message.reply(`It has been unbanned`);
    }
}