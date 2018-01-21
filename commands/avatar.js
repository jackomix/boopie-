exports.run = (client, message, args) => {
    if (message.mentions.members.size == 0) {
      message.channel.send(message.author.avatarURL).catch(console.error);
    } else {
      member = message.mentions.users.first();
      message.channel.send(member.avatarURL).catch(console.error);
    }
}