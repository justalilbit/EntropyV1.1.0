exports.run = (client, msg) => {
    msg.channel.send(`<:dice:759986093448757248> **${msg.author.username}**, you rolled a **${Math.floor(Math.random() * 100) + 1}**!`);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dice', '55x2', 'dd'],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Rolls dice up to 100',
  usage: 'roll'
};
