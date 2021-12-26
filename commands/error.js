const { execute } = require("./ping");

module.exports={
    message:'error',
    description:"This is a default message if any of the commands didn't match that we have in our arsenal",
    execute(message,args){
         message.reply(
            "Check your commands that you have entered correctfully"
          );
    }
}