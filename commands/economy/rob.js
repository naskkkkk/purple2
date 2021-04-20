const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "rob",
    alias: ["roubar", "roubo", "assalto", "assaltar"],
    description: "sim",
    timeout: 1000,
  async execute (client, message, args){


let user = message.mentions.members.first() 

let author = db.fetch(`roubo_${message.guild.id}_${message.author.id}`)
let author2 = db.fetch(`ienes_${message.guild.id}_${message.author.id}`)

let anel = db.get(`gun_${message.guild.id}_${message.author.id}`);
if(!anel) return message.channel.send(`**Você não tem uma Arma, para obter uma use a!buy arma!**`)


  let embd1 = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle('Assalto <:emoji_67:831362443656822854> <a:Pink_arminhaES:831675835420901446>')
  .setDescription(`**<:pr_girlconfused02:831326992853893120> Mencione alguém para roubar.**`)
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

  if (!user) {
      return message.channel.send(embd1)
  }



let timeout = 1200000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));
    

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Assalto <:emoji_67:831362443656822854> <a:Pink_arminhaES:831675835420901446>')
    .setDescription(`**<:grr_purple:831350372697767957> Você já roubou alguém!\n\nTente em ${time.minutes}m ${time.seconds}s**`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
    message.channel.send(timeEmbed)
  } else {

let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle('Assalto <:emoji_67:831362443656822854> <a:Pink_arminhaES:831675835420901446>')
  .setDescription(`**<:grr_purple:831350372697767957> Você precisa de 200¥ ienes para roubar alguém!**`)
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

if (author2 < 200) {
    return message.channel.send(moneyEmbed)

}

let targetuser = db.fetch(`ienes_${message.guild.id}_${user.id}`)
let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("#7500ff")
   .setTitle('Assalto <:emoji_67:831362443656822854> <a:Pink_arminhaES:831675835420901446>')
  .setDescription(`**<:pr_girlconfused02:831326992853893120> ${user} está com a carteira vazia**`)
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
if (targetuser < 300) {
    return message.channel.send(moneyEmbed2)
}



let vip = await db.fetch(`funcao_${message.guild.id}_${user.id}`)
if(vip === true) random = Math.floor(Math.random() * 10000) + 1;
if (vip === null) random = Math.floor(Math.random() * 5000) + 1;

let embed = new Discord.MessageEmbed()
.setTitle('Assalto <:emoji_67:831362443656822854> <a:Pink_arminhaES:831675835420901446>')
.setDescription(`**<a:Pink_arminhaES:831675835420901446> Você roubou ${user} e ganhou ${random}¥ ienes**`)
.setColor("#7500ff")
 .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
message.channel.send(embed)

db.subtract(`ienes_${message.guild.id}_${user.id}`, random)
db.add(`ienes_${message.guild.id}_${message.author.id}`, random)
db.set(`roubo_${message.guild.id}_${message.author.id}`, Date.now())
 }
}}
