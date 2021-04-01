const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, msg, args) => {
  msg.delete();
  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .addField('About The Bot', `Momo is a bot created by ${customisation.ownername}, made for Entropy. Concider her the mascot for all your resorces. Memes, fun, moderation, and more. Later down the line the bot will be cleaned up and re-branded for public use, but at this current time it is just for Entropy and a few sister servers.
  It is written in discord.js. To see more info about the bot, type /info in usable channels`)
  msg.channel.send({embed});
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
  name: 'about',
  description: 'About the bot.',
  usage: 'about'
};