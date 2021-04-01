exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  //if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(`**${message.author.username}** has locked down the channel. Don't worry, you'll be able to talk again soon.`);
      
  };
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lock'],
  permLevel: 2
};

exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down.',
  usage: 'lockdown'
};
