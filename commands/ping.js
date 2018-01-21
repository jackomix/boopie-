exports.run = (client, message, args) => {
    console.log("Sent message.")
    message.channel.send("Ping!").catch(console.error);
    message.channel.send(new Date().getTime() - message.createdTimestamp + " ms").catch(console.error);
}