const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  alias: [],


 execute (client, message, args){

    const m = await message.reply('...')

    const pingEmbed = {
        title: '🏓 Pong!',
        description: `**:stopwatch:Gateway Ping** \`${m.createdTimestamp - message.createdTimestamp}ms\`.\n**:zap:API Ping** \`${Math.round(client.ws.ping)}ms\`.`,
         color: '0xe91e63',
    } 

    m.edit(message.author, {embed: pingEmbed})
}
}