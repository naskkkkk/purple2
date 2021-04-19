const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "warna",
    alias: ["aviso", 'balance', "money", "bolso", "saldo", "carteira", "wallet", "banco", "ienes"],
    description: "sim",
    timeout: 1000,
  async execute (client, message, args){

  if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send({embed: {
    description: "**<:Cross:807129838879375361> | Você precisa da permissão de `Gerenciar Cargos` para executar este comando**",
    color: "RANDOM"
  }})
  
  let member = message.mentions.users.first() 
  if(!member) return message.channel.send({embed: {
    description: "**<:Cross:807129838879375361> | Você deve mencionar um usuário a ser Avisado**",
    color: "RANDOM"
  }})
  
  if(member.id === message.author.id) return message.channel.send({embed: {
    description: "**<:Cross:807129838879375361> | Não podes dar warn em você mesmo**",
    color: "RANDOM"
  }})
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) return message.channel.send({embed: {
    description: "**<:Cross:807129838879375361> | Você precisa setar um motivo para avisar o usuario**",
    color: "RANDOM"
  }})
  
  const aviso = new Discord.MessageEmbed()
  .setTitle("⛔ Usuário avisado")
   .addField("<:IconMembers2:809717549796425748> Avisado", `\`${member.tag}\``)
  .addField("<:staff:821252503177527319> Avisado por", `\`${message.author.tag}\``)
  .addField("<:warning2:812795034859470900> Motivo", `\`${motivo}\``)
  .setImage("https://media.discordapp.net/attachments/821925249154154498/822070943077367828/image0.gif")
  .setThumbnail('https://media.discordapp.net/attachments/805073314112077854/818699365689327626/1692_Sirenevermelha.gif?width=80&height=80')
  .setFooter(`Warn Efetuado`, message.author.displayAvatarURL())
  .setColor("RANDOM")
  message.channel.send(aviso)
  
  db.add(`warnsCount_${message.guild.id}-${member.id}`, 1)
  
  let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))
  if(!channel) {
    return
  } else {
  const embed2 = new Discord.MessageEmbed()
  .setAuthor("Membro avisado", member.displayAvatarURL())
  .addField("<:IconMembers2:809717549796425748> Avisado", `\`${member.tag}\``)
  .addField("<:staff:821252503177527319> Avisado por", `\`${message.author.tag}\``)
  .addField("<:warn:807128067121479711> Motivo", `\`${motivo}\``)
  .setThumbnail('https://media.discordapp.net/attachments/805073314112077854/818699365689327626/1692_Sirenevermelha.gif?width=80&height=80')
  .setColor("RANDOM")
  .setTimestamp()
  channel.send(embed2)
  }
}
}