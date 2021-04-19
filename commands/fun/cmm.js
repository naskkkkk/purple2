const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const canvacord = require('canvacord')
const cooldown = new Set();

module.exports = {
  name: "changemymind",
  alias: ["cmm"],

async execute (client, message, args){
if(message.author.bot || message.type == 'md') return;
  if (cooldown.has(message.author.id)) {
            message.channel.send(`${message.author}, awantate 7 segundos antes de volver a usar este comando`);
    } else {
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
 let texto = args.join(" ")
 if(!texto) return message.channel.send('Ingresa un texto capo');
 let image = await canvacord.Canvas.changemymind(texto);
 let attachment = new Discord.MessageAttachment(image, "cmm.png");
 return message.channel.send(attachment);

 }
}
} 