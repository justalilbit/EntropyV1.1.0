const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');
const yeeted = require('../data/yeet.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to yeet them");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "264563977005170688") return message.reply("No Yeets for you.")
    if (message.mentions.users.first().id == message.author.id) return message.reply("Idk if thats possible chief")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "264563977005170688") return message.reply("D: Dont do that!!")
    const { body } = await superagent
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.author.username} just Yeeted ${message.mentions.users.first().username}`)
    .setImage(`${yeeted[Math.floor(Math.random() * yeeted.length)]}`)
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yeet',
    description: 'Yeet someone',
    usage: 'yeet [mention user]'
  };
