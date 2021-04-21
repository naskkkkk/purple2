const Discord = require('discord.js');
module.exports = {
  name: "ping",
  alias: ["pong", "ping"],


 Async execute (client, message, args){

    const m = await message.reply('...')

    const pingEmbed = {
        title: '🏓 Pong!',
        description: `**:stopwatch:Gateway Ping** \`${m.createdTimestamp - message.createdTimestamp}ms\`.\n**:zap:API Ping** \`${Math.round(client.ws.ping)}ms\`.`,
         color: '0xe91e63',
    } 

    m.edit(message.author, {embed: pingEmbed})
}
}
