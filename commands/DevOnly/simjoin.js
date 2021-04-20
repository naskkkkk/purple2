const Discord = require('discord.js');

module.exports = {
    name: "simjoin",
    alias: ["simm"],
    description: "simulates a join!",

 async execute (client, message, args){
        if(message.author.id != "776855589987811368") return;
        client.emit('guildMemberAdd', message.member);
    },
}

