const Discord = require('discord.js');
const { getMember } = require("../handlers/functions.js");

exports.run = async function (client, message, args) {
    if (message.mentions.users.size < 1)
        return message.reply;
    let person = getMember(message, args[0]);
    if (!person || message.author.id === person.id) {
        person = message.guild.members
            .filter(m => m.id !== message.author.id)
            .random();
    }
    const hate = Math.random() * 100;
    const hateIndex = Math.floor(hate / 10);
    const hateLevel = "█".repeat(hateIndex) + "▒".repeat(10 - hateIndex);

    const embed = new Discord.MessageEmbed()
        .setColor("#ffb6c1")
        .addField(`**💢 ${message.author.username}** hates **${message.mentions.users.first().username}** this much:`,
            `👿 ${Math.floor(hate)}%\n\n${hateLevel}`);
    message.channel.send(embed);
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
	type: 4
};

exports.help = {
	name: `hate`,
	description: `Hate Meter.`,
	usage: `hate <user> [user]`
};