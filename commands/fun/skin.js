const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "skin",
  alias: [],

async execute (client, message, args){
if(message.author.bot || message.type === 'dm') return;
const text = args.join(' ')
if(!text) return message.channel.send('Ingresa el nombre de un usuario de Minecraft, o un niño rata...');
let cuerpo = await `https://minotar.net/armor/body/${text}/100.png`;
const embed = new Discord.MessageEmbed()
.setTitle(`Skin del usuario ${text}`)
.setImage(cuerpo)
.setColor('RANDOM')
message.channel.send(embed);

 }

} 