const Discord = require('discord.js');
const customisation = require('../customisation.json');

    exports.run = (client, message, args) => {
        args = args.join(" ");
        message.channel.send(`The Discords official Spotifiy playlist! https://open.spotify.com/playlist/6PZ5U3LQON6hVNI9OEH8ec?si=etZVrCO3R7Oe2uQrv-SHLw`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vibe', 'spot'],
  permLevel: 0
};

exports.help = {
  name: 'spotify',
  description: 'Entropys Server Vibe playlist',
  usage: 'spotify, vibe, spot'
};