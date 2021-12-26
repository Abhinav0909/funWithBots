module.exports = {
  name: "ping",
  description: "This is a ping command",
  execute(message, args) {
    const processTime = Date.now() - message.createdTimestamp;
    message.reply(`Pong Time taken to process the command ${processTime}`);
  },
};
