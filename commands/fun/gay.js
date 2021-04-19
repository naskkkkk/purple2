const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
    name: 'gay',
    alias: ["viado"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    
async execute (client, message, args){
        const user = message.mentions.users.first() || message.author;

        const avata = user.displayAvatarURL({ format: "png" })

        const rainbow = await Canvas.rainbow(avata)

        message.channel.send(
            new MessageAttachment(rainbow, `gay.png`)
        )
    }
}