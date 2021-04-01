const Discord = require("discord.js");
const Report = require("../models/report.js");
const mongoose = require("mongoose");
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    if (!args[0]) return message.reply("Please specify the report. Example:\n`/member was being offensive`");
    if (args[0] === "report") return message.reply("Please specify the report. Example:\n`/member was being offensive`");
    args = args.join(" ");
    message.reply("Thanks for submitting a report");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) Has reported the user for:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.cache.get(customisation.reportschannelid).send(content)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'report',
  description: 'Reports a community member',
  usage: 'report <reason>'
};

