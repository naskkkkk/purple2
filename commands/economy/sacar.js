const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "sacar",
    alias: ["saque", "retirar", 'withdraw'],
    description: "sim",
    timeout: 1000,
  async execute (client, message, args){


  let user = message.author; 

  let member = db.fetch(`ienes_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`cofre_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`cofre_${message.guild.id}_${user.id}`)

    db.subtract(`cofre_${message.guild.id}_${user.id}`, money)
    db.add(`ienes_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle('Aguarde<a:Load:832072240626925622>')
  .setDescription(`**<a:carregando:832070658879127573> Imprimindo nota fiscal..\n\n<a:pr_check02:831327513094651924> Você sacou todas os ienes de seu cofre**`)
  .setThumbnail('https://media4.giphy.com/media/duKur2tdrsviJa03vk/giphy.gif')
  .setFooter("Shhh, cuidado com os ladrões!・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setDescription(`**<:pr_girlconfused02:831326992853893120> KK ué?, quanto você quer sacar?**`)
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle('Tentativa de Saque <:emoji_67:831362443656822854> <a:verm_negativ_TKG:832070793193193482>')
  .setDescription(`<a:grr:831992644317216778> **Você não pode sacar dinheiro negativo.**`)
  .setThumbnail("https://media.tenor.com/images/e5351e4fc67ebdf3ed1e598ae24ef3b8/tenor.gif")
  .setFooter("SEU LIXO・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle('Tentativa de Saque <:emoji_67:831362443656822854> <a:verm_negativ_TKG:832070793193193482>')
  .setDescription(`<:purple_chorando:832002026145448047> **Você não tem essa quantia no cofre :(**`)
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle('Auarde<a:Load:832072240626925622>')
  .setDescription(`**<a:carregando:832070658879127573> Imprimindo nota fiscal..\n\n <a:pr_check02:831327513094651924> Você sacou ${args[0]}¥ ienes do cofre**`)
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

  message.channel.send(embed5)
  db.subtract(`cofre_${message.guild.id}_${user.id}`, args[0])
  db.add(`ienes_${message.guild.id}_${user.id}`, args[0])
  }
}}
