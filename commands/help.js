exports.run = (client, message, args) => {
    const embed = {
  "color": 4886754,
  "author": {
    "name": "Boopie's Commands!"
  },
  "fields": [
    {
      "name": "^help",
      "value": "Displays the message\nyou're seeing right now!\n*(You silly goose.)*",
      "inline": true
    },
    {
      "name": "^ping",
      "value": "See if I respond and how\nlong it takes me to.",
      "inline": true
    },
    {
      "name": "^hello",
      "value": "Say hello to me. :)",
      "inline": true
    },
    {
      "name": "^avatar [@user]",
      "value": "Get the link of the avatar\na user (or you if you don't\nmention anyone).",
      "inline": true
    }
  ]
};
message.channel.send({ embed }).catch(console.error);
}