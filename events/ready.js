const chalk = require('chalk');
const Discord = require("discord.js");
const fs = require('fs');
module.exports = client => {
  client.user.setActivity(` server go zOOOM! /help`, { type: 'WATCHING' })
  setInterval(() => {
    client.user.setActivity(`server go zOOOM! /help`, {type: 'WATCHING' })
  },60000);

  console.log(chalk.bgGreen.black(`server go zOOOM! /help`));
  let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
  client.guilds.cache.forEach((guild) => {
    if (!blacklist[guild.ownerID]) {
      return;
    }else{
      if(blacklist[guild.ownerID].state === true) {
        message.guild.leave(guild.id)
      }
    }
  })
};

//${client.guilds.cache.size} - Guild member number