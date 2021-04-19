const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "bal",
    alias: ["atm", 'balance', "money", "bolso", "saldo", "carteira", "wallet", "banco", "ienes"],
    description: "sim",
    timeout: 1000,
  async execute (client, message, args){

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`ienes_${message.guild.id}_${user.id}`)
  if (bal === null) bal = 0;

  let bank = await db.fetch(`cofre_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let dolar = ("https://i.imgur.com/PAjzSI8.gif")
  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setThumbnail('https://media.discordapp.net/attachments/825776275649331223/831345409485570068/Nask_-_Imgur.png')
  .setTitle('Economia Purple  <:emoji_67:831362443656822854> <:coin_fanny:830834280187953162>')
  .setDescription(`<a:tl1SparklesPurple:831346527434833930>**__Saldo de ${user.tag}__.**<a:tl1SparklesPurple:831346527434833930>\n<:cart_purp:831338522459373628> <:l_setaroxa:831338736603365445>***Carteira: ${bal}¥***\n:bank: <:l_setaroxa:831338736603365445> ***Purple's Cofre: ${bank}¥***`)
  .setFooter("Ei, Não mexa na minha carteira・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

  message.channel.send(moneyEmbed)
  

}};