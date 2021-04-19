const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const axios = require('axios')
const cooldown = new Set();

module.exports = {
  name: "ascii",
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
const argumentos = args.join('+')
if(argumentos.length > 25) return message.channel.send('Queres explotar la api? el limite de caracteres es 25');
const res = await axios.get(`https://artii.herokuapp.com/make?text=${args.join('+')}`)
message.channel.send("```"+res.data+"```")

 }

} 
}