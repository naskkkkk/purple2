const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "deposite",
    alias: ["dep", "depositar", "deposita", 'guardar'],
    description: "sim",
    timeout: 1000,
  async execute (client, message, args){


  let user = message.author; 

  let member = db.fetch(`ienes_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`cofre_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`ienes_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`cofre_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle("Purple's Cofre <:emoji_67:831362443656822854> :bank:")
    .setDescription("**<a:pepe_chorando:814787504435625994> Você não tem dinheiro \npara depositar :(**")
    .setThumbnail('http://post.asgardproject.com.br/RDQH4T/02-pulp-fiction-john-travolta-perdido-na-carteira.gif')
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

    if(money === 0) return message.channel.send(embedbank)

    db.add(`cofre_${message.guild.id}_${user.id}`, money)
    db.subtract(`ienes_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle("Purple's Cofre <:emoji_67:831362443656822854> :bank:")
  .setDescription(`**<a:pr_check02:831327513094651924> Você guardou seus ienes no cofre com sucesso!**`)
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle("Purple's Cofre <:emoji_67:831362443656822854> :bank:")
  .setDescription(`**<:pr_girlconfused02:831326992853893120> Ué?, Quanto você quer depositar?**`)
  .setFooter("KK, gente nóia・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle("Purple's Cofre <:emoji_67:831362443656822854> :bank:")
  .setDescription(`**<:grr_purple:831350372697767957> Você não pode depositar ienes negativos**`)
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle("Purple's Cofre <:emoji_67:831362443656822854> :bank:")
  .setDescription(`**<:grr_purple:831350372697767957> Você não tem essa quantia :/**\n\n __SEU POBRE AHAHHAHAH__`)
  .setFooter('Dsclp kk, use p!work, p!pedir ou p!daily para ganhar mais ienes.')
  .setThumbnail('https://media.tenor.com/images/2794572ebabbb26fd7407f810b513ae7/tenor.gif')

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle("Purple's Cofre <:emoji_67:831362443656822854> :bank:")
  .setDescription(`**<a:pr_check02:831327513094651924> Você depositou ${args[0]}¥ ienes no cofre.**`)
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

  message.channel.send(embed5)
  db.add(`cofre_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`ienes_${message.guild.id}_${user.id}`, args[0])
  }
}}
