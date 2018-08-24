exports.run = (client, message, args) => {
    if (args.length < 1) {
      message.channel.send("what's your question?");
      return;
    } 
    var answers = [
      "100%",
      "nah",
      "maybe",
      "probs not",
      "probs",
      "think about it",
      "most likely",
      "most unlikely",
      "ask a friend",
      "what do you think?"
    ]
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  
    message.channel.send(randomAnswer).catch(console.error);
}