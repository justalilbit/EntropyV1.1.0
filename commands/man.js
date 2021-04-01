const man = require('../data/man.json');
const Discord = require('discord.js');
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    args = args.join(" ");
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTimestamp()
    .setTitle("MAN")
    .setImage(`${man[Math.floor(Math.random() * man.length)]}`)
    message.channel.send({embed})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['brooke'],
  permLevel: 0
};

exports.help = {
  name: 'man',
  description: 'Sends a random man image.',
  usage: 'man'
};

