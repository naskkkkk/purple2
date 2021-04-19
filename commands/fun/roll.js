const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const cooldown = new Set();
module.exports = {
  name: "roll",
  alias: [],

execute (client, message, args){
if(message.author.bot || message.channel.type === 'dm') return;
  if (cooldown.has(message.author.id)) {
    message.channel.send(`${message.author}, awantate 5 segundos antes de volver a usar este comando`);
    } else {
      cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 5000);
const dados = [
  1,
  2,
  3,
  4,
  5,
  6
];

let img = '1';

const dado = dados[Math.floor(Math.random() * dados.length)];

if(dado == 1){
  img = 'https://i.imgur.com/IVFGdR4.png'
}

if(dado == 2){
  img = 'https://i.imgur.com/xahAo3F.png'
}

if(dado == 3){
  img = 'https://i.imgur.com/GJVAZJo.png'
}

if(dado == 4){
  img = 'https://i.imgur.com/fKD1MzJ.png'
}

if(dado == 5){
  img = 'https://i.imgur.com/n4ziYlf.png'
}

if(dado == 6){
  img = 'https://i.imgur.com/MTCei99.png'
}


const embed = new Discord.MessageEmbed()
.setTitle(`Cayo ${dado}!`)
.setImage(img)
.setFooter(`Dado tirado por ${message.author.username}`)
.setColor('RANDOM');

message.channel.send(embed)

 }

}
}