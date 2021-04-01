const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them :3");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "264563977005170688") return message.reply("No kissing unless you're my Dev :<")
    if (message.mentions.users.first().id == message.author.id) return message.reply("Idk if thats possible chief")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "264563977005170688") return message.reply("B-Baka, >/////<")
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.author.username} kissed ${message.mentions.users.first().username}`)
    .setImage(body.url)
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kiss',
    description: 'Kisses someone',
    usage: 'kiss'
  };
