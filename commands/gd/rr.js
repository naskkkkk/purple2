const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "autorol", 
  alias: ["rr"], 

async execute (client, message, args){

  message.channel.send('Esperamos que comprendas y aceptes las anteriores reglas, si es así clickea o pulsa en el ":positive:" de aquí abajito. (Al verificarte estarás desbloqueando las diferentes categorías y los diferentes canales del servidor).👇').then(msg => {
    msg.react('827593577152249906');
    msg.awaitReactions((reaction, user) => {
      if (reaction.emoji.id == '827593577152249906') {
        const User = message.guild.members.cache.get(user.id);
        User.roles.add('829162575966896128')
        User.roles.remove('829162725405753365')
      }


    });

  });
 }

}