const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const nekoslife = require('nekos.life');
const neko = new nekoslife();
const cooldown = new Set();

module.exports = {
  name: "slap",
  alias: [],

async execute (client, message, args){
if(message.author.bot || message.channel.type === 'dm') return;
if (cooldown.has(message.author.id)) {
  message.channel.send(`${message.author}, awantate 7 segundos antes de volver a usar este comando`);
} else {
cooldown.add(message.author.id);
setTimeout(() => {
cooldown.delete(message.author.id);
}, 7000);

const persona = message.mentions.users.first()
if(!persona) return message.channel.send('Y a quien le vas a dar una cachetada¿');
const img = await neko.sfw.slap()

const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} Le dio una bofetada a ${persona.username}!`)
.setImage(img.url)
.setColor('RANDOM');

message.channel.send(embed)

 }

} 

}