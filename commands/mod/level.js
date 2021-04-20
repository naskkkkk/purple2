const Discord = require('discord.js');
const canvacord = require('canvacord')
const Levels = require('discord-xp')
module.exports = {
    name: 'rank',
    aliases: ['level', 'xp'],
    category: 'server',
    utilisation: '{prefix}rank',

async execute(client, message, args) {



try {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        const neededXp = Levels.xpFor(parseInt(user.level) + 1);
 
        const rank = new canvacord.Rank()
        .setAvatar(message.author.displayAvatarURL({dynamic: false, format:'png'}))
        .setCurrentXP(user.xp)
        .setLevel(user.level)
        .setRequiredXP(neededXp)
        .setStatus(message.member.presence.status)
        .setProgressBar('WHITE', 'COLOR')
        .setUsername(message.author.username)
        .setDiscriminator(message.author.discriminator)
         rank.build()
           .then(data => {
            const attachment = new Discord.MessageAttachment
            (data, 'AxelRank.png')
             message.channel.send(attachment);
        })
    } catch (e) {
      console.log(e)
    }
}
};
