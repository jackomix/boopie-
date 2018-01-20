exports.run = (client) => {
  console.log(`boopie! is ready!`)
  console.log(`Stats: boopie! is on ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users!`);
}