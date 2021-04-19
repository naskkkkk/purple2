const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');


module.exports = {
  name: "saychannel",
  alias: ["say-channel"],

execute (client, message, args){

if(message.author.bot || message.channel.type === 'dm') return;
const perms = message.member.hasPermission('MANAGE_MESSAGES');
if(!perms) return message.channel.send("```N o  t e n e s  p e r m i s o s  j a j a```");

const canal = message.mentions.channels.first();
if(!canal) return message.channel.send('Menciona el canal al que queres enviar el mensaje');
const mensaje = args.slice(1).join(' ')
if(!mensaje){
  message.channel.send('Y que wo a decir?');
  return;
}

if(mensaje > 400) return message.channel.send('Capo vos estas escribiendo la wikipedia entera en un mensaje de discord, el limite de palabras es 400');

canal.send(mensaje)
message.delete()

 }

}