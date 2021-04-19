const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const translate = require('@k3rn31p4nic/google-translate-api')
const axios = require('axios')
const cooldown = new Set();

module.exports = {
  name: "dogfact",
  alias: [],

async execute (client, message, args){
if (cooldown.has(message.author.id)) {
  message.channel.send(`${message.author}, awantate 7 segundos antes de volver a usar este comando`);
} else {
cooldown.add(message.author.id);
setTimeout(() => {
cooldown.delete(message.author.id);
}, 7000);
if(message.author.bot || message.channel.type === 'dm') return;
axios.get('https://some-random-api.ml/facts/dog').then(async res => {
  translate(res.data.fact, {
    to: 'es'
  }).then(result => {
    const embed = new Discord.MessageEmbed()
    .setTitle('Hecho sobre los perros')
    .setDescription(result.text)
    .setColor('RANDOM')
    .setFooter('Si, ya se que la traduccion es una mrda');
    message.channel.send(embed)
  })
})

 }
}
} 