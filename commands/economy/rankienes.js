const Discord = require('discord.js')
const db = require('quick.db')
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "rankienes",
    alias: ["rank ienes", "rankinglocal", "toploca"],
    description: "sim",
    timeout: 1000,
async execute (client, message, args){

        let money = db.all().filter(lb => lb.ID.startsWith(`ienes_${message.guild.id}`)).sort((a, b) => b.data- a.data)
        let ienes = money.slice(0, 10)
        console.log(ienes)
        let content = " ";

        for(let i = 0; i < ienesBalance.length; i++) {
            let user = bot.users.cache.get(ienes[i].ID.split('_')[2])

            content += `${i+1}. ${user} - \$${ienes[i].data} \n`

        }

        const embed = new MessageEmbed()
        .setColor("#000001")
        .setTitle(`${message.guild.name}\' RANK`)
        .setDescription(`** ${content} **`)
        .setTimestamp()

        message.channel.send(embed)
}
}
