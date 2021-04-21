const Discord = require('discord.js');
module.exports = {
  name: "ping",
  alias: ["pong", "ping"],


async execute (client, message, args){

 const ms = await message.channel.send("Ping?");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('📡 Seu ping é: ' + clientms + 'ms / 🖥 Ping do bot com Server:' + Math.floor(client.ping) + 'ms');
}
}
