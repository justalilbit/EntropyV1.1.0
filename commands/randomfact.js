const Discord = require('discord.js');
const randomfact = require('../data/randomfact.json');
exports.run = (client, message, args) => {
    args = args.join(" ");
    message.channel.send(`${randomfact[Math.floor(Math.random() * randomfact.length)]}`);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rf'],
    permLevel: 0
  };

exports.help = {
    name: "randomfact",
    description: 'Sends a random fact from all over the world.',
    usage: 'randomfact'
};