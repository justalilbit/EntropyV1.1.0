const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
    if (!args[0]) return message.reply('You need to leave a suggestion after the command.');;
    if (args[0] === "bug") return message.reply("Please give a suggestion.");
    args = args.join(" ");
    message.reply("Thanks for suggesting something! uwu");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) suggested:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.cache.get(customisation.suggestionchannelid).send(`${content}`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['suggestion'],
  permLevel: 0
};

exports.help = {
  name: 'suggest',
  description: 'Suggests something.',
  usage: 'suggest <suggestion>'
};
