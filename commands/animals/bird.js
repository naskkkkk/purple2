const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const cooldown = new Set();
const axios = require('axios');
module.exports = {
  name: "bird",
  alias: [],

execute (client, message, args){
if(message.author.bot || message.channel.type === 'dm') return;
if (cooldown.has(message.author.id)) {
  message.channel.send(`${message.author}, awantate 7 segundos antes de volver a usar este comando`);
} else {
cooldown.add(message.author.id);
setTimeout(() => {
cooldown.delete(message.author.id);
}, 7000);

if(message.author.bot || message.channel.type === 'dm') return;

axios.get('https://some-random-api.ml/img/birb').then(res => {
  const embed = new Discord.MessageEmbed()
  .setTitle(' :bird: ')
  .setImage(res.data.link)
  .setFooter(`Pedido por ${message.author.username}`)
  .setColor('RANDOM');
  message.channel.send(embed)
})


 }

} 

}