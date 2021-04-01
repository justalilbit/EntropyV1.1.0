const superagent = require('superagent');
const Discord = require('discord.js');
const { getMember } = require("../handlers/functions.js");

exports.run = async function (client, message, args) {
    if (message.mentions.users.size < 1)
        return message.reply;
    let user = getMember(message, args[0]);
    if (!user || message.author.id === user.id) {
        user = message.guild.members
            .filter(m => m.id !== message.author.id)
            .random();
    }
    const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 10);
    const loveLevel = "█".repeat(loveIndex) + "▒".repeat(10 - loveIndex);
    const { body } = await superagent

    const embed = new Discord.MessageEmbed()

        .setColor("#ffb6c1")
        .addField(`☁ **${message.author.username}** Loves **${message.mentions.username}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);
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
	name: `love`,
	description: `Love meter.`,
	usage: `love <user> [user]`
};