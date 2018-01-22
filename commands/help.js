exports.run = (client, message, args) => {
    const embed = {
  "color": 4886754,
  "author": {
    "name": "Boopie's Commands!"
  },
  "fields": [
    {
      "name": "^help",
      "value": "Displays the message\nyou're seeing right now!\n*(You silly goose.)*\n"
    },
    {
      "name": "^ping",
      "value": "See if I respond and how\nlong it takes me to.\n"
    },
    {
      "name": "^hello",
      "value": "Say hello to me. :)"
    },
    {
      "name": "^avatar [@user]",
      "value": "Get the link of the avatar\na user (or you if you don't\nmention anyone).\n"
    },
    {
      "name": "^8ball <question>",
      "value": "Ask me a yes or no question\nand I'll give you an answer!\n"
    },
    {
      "name": "^github",
      "value": "Get the link to the github repo!\n"
    }
  ]
};
message.channel.send({ embed }).catch(console.error);
}