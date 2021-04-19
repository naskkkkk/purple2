const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const nekoslife = require('nekos.life');
const neko = new nekoslife();
const cooldown = new Set();

module.exports = {
  name: "owoify",
  alias: ["neko"],

async execute (client, message, args){
if(message.author.bot || message.channel.type === 'dm') return;
if (cooldown.has(message.author.id)) {
  message.channel.send(`${message.author}, awantate 7 segundos antes de volver a usar este comando`);
} else {
cooldown.add(message.author.id);
setTimeout(() => {
cooldown.delete(message.author.id);
}, 7000);

const mensaje = args.join(' ')
if(!mensaje) return message.channel.send('Debes ingresar un texto');

let owo = await neko.sfw.OwOify({text: mensaje});

message.channel.send(owo.owo)

 }

} 

}