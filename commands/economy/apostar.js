const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
  name: "apt",
  alias: ["aposta", 'apostar', "coinflip", "coinflip", "apost"],
  description : 'Mata o player e muta ele da call.',
  timeout: 1000,
   async execute (client, message, args){


  let money = (args[2])

  var array1 = ["cara", "coroa"];

  var rand = Math.floor(Math.random() * array1.length);

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
  

  let carteira = await db.fetch(`ienes_${message.guild.id}_${message.author.id}`)

  
let bot = "827106783465701377"

    let potata = new Discord.MessageEmbed()
.setColor("#7500ff")
.setTitle('APOSTA <:seta_roxa:830834529039941632> <:coin_fanny:830834280187953162>')
.setDescription(`**<:pr_girlconfused02:831326992853893120> Você quer se apostar Comigo? Amigo, acho que não...**`)
.setThumbnail('https://media0.giphy.com/media/lgBQpM00TB8n6/source.gif')
 .setFooter("・Purple Commands", message.author.displayAvatarURL({format: "png"}))
   if (user == bot) return message.reply(potata);


let que = new Discord.MessageEmbed()
.setColor("#7500ff")
.setTitle('APOSTA <:seta_roxa:830834529039941632> <:coin_fanny:830834280187953162>')
.setDescription(`**<:pr_yuriblush01:831331771752382484> Escreva o comando como o exemplo abaixo:**\n*a!apostar (cara/coroa) @user <quantia>*.`)
 .setFooter("・Purple Commands", message.author.displayAvatarURL({format: "png"}))

    if (!(args[2])) return message.reply(que);




let pobre = new Discord.MessageEmbed()
.setColor("#7500ff")
.setDescription(`**<:grr_purple:831350372697767957> Você acha que eu sou burra?,\n não aposte coisas que você não tem!**`)
 .setFooter("・Purple Commands", message.author.displayAvatarURL({format: "png"}))

   if (money > carteira) return message.channel.send(pobre)


let carteirauser = await db.fetch(`ienes_${message.guild.id}_${user.id}`)

let moneyEmbed2 = new Discord.MessageEmbed()
.setColor("#7500ff")
   .setTitle('APOSTA <:seta_roxa:830834529039941632> <:coin_fanny:830834280187953162>')
  .setDescription(`**<:1296_FeelsStrongMen:814830121222406184> ${user} não tem dinheiro para essa aposta!**`)
   .setFooter("・Purple Commands", message.author.displayAvatarURL({format: "png"}))
if (money > carteirauser) {
    return message.channel.send(moneyEmbed2)
}





const embed = new Discord.MessageEmbed()
.setColor("#7500ff")
   .setTitle('APOSTA <:seta_roxa:830834529039941632> <:coin_fanny:830834280187953162>')
  .setDescription(`**${user}\nO usuário ${message.author.tag} te convidou\n para uma aposta, aceita?!**`)
  .setThumbnail("https://64.media.tumblr.com/1891a2b574c77cfa8abb7356324bc4f5/tumblr_mlaskrk7vy1soqb33o1_250.gifv")
   .setFooter("・Purple Commands", message.author.displayAvatarURL({format: "png"}))
message.channel.send(embed).then(msg => {
  msg.react('831327513094651924');

  let filtro = (reaction, usuario) => reaction.emoji.name === 'pr_check02' && usuario.id === user.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});



  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
let baka = new Discord.MessageEmbed()
.setColor("#7500ff")
.setTitle('APOSTA <:seta_roxa:830834529039941632> <:coin_fanny:830834280187953162>')
.setDescription(`**<:pr_yuriblush01:831331771752382484> Escreva o comando como o exemplo abaixo:**\n*a!apostar (cara/coroa) @user <quantia>*.`)
 .setFooter("・Purple Commands", message.author.displayAvatarURL({format: "png"}))
    message.reply(baka);

    let falabad = new Discord.MessageEmbed()
.setColor("#7500ff")
.setTitle('APOSTA <:seta_roxa:830834529039941632> <:coin_fanny:830834280187953162>')
.setDescription(`**<:pr_girlconfused02:831326992853893120> Não esqueça de mencionar a pessoa com quem você quer apostar.**`)
 .setFooter("・Purple Commands", message.author.displayAvatarURL({format: "png"}))

  if (!user) return message.channel.send(falabad);

    
  } coletor.on("collect", r => {
    r.remove(message.author.id);
      if (args[0].toLowerCase() == array1[rand]) {
        db.subtract(`ienes_${message.guild.id}_${user.id}`, money)
        db.add(`ienes_${message.guild.id}_${message.author.id}`, money)
     let moneyEmbed1 = new Discord.MessageEmbed()
     .setColor("#7500ff")
        .setTitle('APOSTA <:seta_roxa:830834529039941632> <:coin_fanny:830834280187953162>')
        .setDescription(`**Deu ${array1[rand]}! \n<a:whatever:791918670191656961> ${message.author} ganhou ${money}¥ ienes.**`)
        .setThumbnail('https://media0.giphy.com/media/1fkzQQWiixH7mvhOtK/giphy.gif')
         .setFooter("・Purple Commands", message.author.displayAvatarURL({format: "png"}))
        message.channel.send(moneyEmbed1)
        
  } 
else if (args[0].toLowerCase() != array1[rand]) {
   db.subtract(`ienes_${message.guild.id}_${message.author.id}`, money)
   db.add(`ienes_${message.guild.id}_${user.id}`, money)
    let moneyEmbed4 = new Discord.MessageEmbed()
    .setColor("#7500ff")
        .setTitle('APOSTA <:seta_roxa:830834529039941632> <:coin_fanny:830834280187953162>')
        .setDescription(`**Deu ${array1[rand]}!\n <a:whatever:791918670191656961> ${user} ganhou ${money}¥ ienes!!**`)
        .setThumbnail('https://data.whicdn.com/images/34517913/original.gif')
         .setFooter("・Purple Commands", message.author.displayAvatarURL({format: "png"}))
        message.channel.send(moneyEmbed4)
       
  }

  })

})
}}