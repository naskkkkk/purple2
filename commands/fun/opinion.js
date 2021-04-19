const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const canvacord = require('canvacord')

module.exports = {
  name: "opinion",
  alias: [],

async execute (client, message, args){
if(message.author.bot || message.type === 'dm') return;
  let texto = args.join(" ")
 if(!texto) return message.channel.send('Ingresa un texto capo');
 let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
 let image = await canvacord.Canvas.opinion(avatar, texto);
 let attachment = new Discord.MessageAttachment(image, "opinion.png");
 return message.channel.send(attachment);

 }

} 