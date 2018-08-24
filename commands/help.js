exports.run = (client, message, args) => {
    const embed = {
  "color": 4886754,
  "author": {
    "name": "Boopie's Commands!"
  },
  "fields": [
    {
      "name": "^help",
      "value": "shows commands"
    },
    {
      "name": "^ping",
      "value": "see if i'm laggin'"
    },
    {
      "name": "^hello",
      "value": "say hi to me"
    },
    {
      "name": "^avatar [@user]",
      "value": "get the avatar of someone (or you if no user is mentioned)"
    },
    {
      "name": "^8ball <question>",
      "value": "ask a yes or no question"
    },
    {
      "name": "^github",
      "value": "get a link to the github repo"
    },
    {
      "name": "^say",
      "value": "make me say stuff"
    },
    {
      "name": "^me",
      "value": "show that you do an action"
    },
  ]
};
message.channel.send({ embed }).catch(console.error);
}