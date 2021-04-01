const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    let reddit = [
        "meme",
        "memes",
        "AnimeFunny",
        "dankmemes",
        "dankmeme",
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rm'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'meme',
    description: 'Sends a random memes',
    usage: 'meme'
  };
