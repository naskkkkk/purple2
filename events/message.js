const mongoose = require('mongoose');
const Guild = require('../schema/guild');

module.exports = async (client, message) => {
    if (message.author.bot) return;

    const settings = await Guild.findOne({
        guildID: message.guild.id
    }, (err, guild) => {
        if (err) console.error(err)
        if (!guild) {
            const newGuild = new Guild({
                _id: mongoose.Types.ObjectId(),
                guildID: message.guild.id,
                guildName: message.guild.name,
                prefix: process.env.PREFIX,
                logChannelID: null
            })

            newGuild.save()
            .then(result => console.log(result))
            .catch(err => console.error(err));

            return message.channel.send('This server was not in our database! We have now added and you should be able to use bot commands.').then(m => m.delete({timeout: 10000}));
        }
    });

    const prefix = settings.prefix;

    if (!message.content.startsWith(prefix)) return;
    blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) {
            if (!message.guild) return;
            if (!message.member) message.member = await message.guild.fetchMember(message);
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase();
            if (cmd.length == 0) return;
            let command = client.commands.get(cmd)
            if (!command) command = client.commands.get(client.aliases.get(cmd));
            if (command) command.runq(client, message, args)
        } else {
            message.channel.send('You are blacklisted!')
        }
    })}

    
