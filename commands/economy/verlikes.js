const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "verlikes",
    alias: ["likes", 'curtidas', "likezao"],
    description: "sim",
    timeout: 1000,
async execute (client, message, args){

  let autor = message.author;



  let user = message.mentions.users.first() || client.users.cache.get(args[0]);

   if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send({embed: {
    description: "**<:Cross:807129838879375361> | Você precisa da permissão de `Gerenciar Cargos` para executar este comando**",
    color: "RANDOM"
  }})
  
    
  let member = message.mentions.users.first() 
  if(!member) return message.channel.send({embed: {
    description: "**<:Cross:807129838879375361> | Você deve mencionar um usuário para ver os likes**",
    color: "#7500ff"
  }})
  
  let likes = db.fetch(`like_${message.guild.id}-${member.id}`);
  if(likes === null) like = 0;
  


  
  const embed = new Discord.MessageEmbed()
  .setTitle('💖 Likes!')
  .setDescription(`${member.tag} tem ${likes} likes!`)
  .setColor('#7500ff')
  message.channel.send(embed)
}
}
