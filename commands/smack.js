exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('You can\'t smack thin air you baka!');
  if(message.mentions.users.first().id === "264563977005170688") return message.reply('You can\'t hurt him, baka.');
  if(message.mentions.users.first().id == client.user.id && message.author.id !== "264563977005170688") return message.reply('You can\'t hurt me.');
  if(message.mentions.users.first().id == client.user.id && message.author.id == "264563977005170688") return message.reply('Nuuuuuuuuuu that hurts ;-;');
  message.channel.send(`${message.author.username} smacked ${message.mentions.users.first().username}.`)
  }
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'smack',
  description: 'Smacks a user.',
  usage: 'smack <user>'
};
