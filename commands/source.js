const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../data/customisation.json');

exports.run = async (client, message, args) => {
   const { body } = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`)

  const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("This is a temp block")
    .setThumbnail("Filler")
    .setDescription(`Filler`)
    message.channel.send({embed});

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'source',
    description: 'Filler command',
    usage: 'source'
  };