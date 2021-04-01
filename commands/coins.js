const Discord = require("discord.js");
const customisation = require('../customisation.json');
const mongoose = require('mongoose');

exports.run = async (client, message, args) => {
  const Coins = require('../models/coins.js');
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) user = message.author;
Coins.findOne({
  userID: user.id
}, (err, coins) => {
  if (err) console.error(err);
  if (!coins) {
    return message.channel.send("This user has no mora on record.")
  }else{
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .addField(`𝕐𝕠𝕦𝕣 𝕎𝕒𝕝𝕝𝕖𝕥 `,`${user} has <:mora:764717398564667402> ${coins.coins} Mora!`)
    
    message.channel.send({embed})
  }
})
};
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['balance', 'wallet', 'bal'],
    permLevel: 0
  };
  
module.exports.help = {
    name: 'mora',
    description: 'Check a user\'s mora.',
    usage: 'mora'
  };
  