const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const canvacord = require('canvacord')

module.exports = {
  name: "affect",
  alias: ["efeito"],

async execute (client, message, args){
if(message.author.bot || message.channel.type === 'dm') return;
  const persona = message.mentions.users.first() || message.author;
 let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png' });
 let image = await canvacord.Canvas.affect(avatar);
 let attachment = new Discord.MessageAttachment(image, "affect.png");
 return message.channel.send(attachment);

 }

}