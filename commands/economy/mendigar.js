const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "mendigar",
    alias: ["pedir", "implorar", "mendigar"],
    description: "sim",
    timeout: 1000,
  async execute (client, message, args){


  let user = message.author;

  let timeout = 180000;
  let amount = 400;

  let beg = await db.fetch(`pedir_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Hora da Mendigagem <:emoji_67:831362443656822854> 🙏')
    .setDescription(`<:grr_purple:831350372697767957> Você já mendigou recentemente\n\nVolte em ${time.minutes}m ${time.seconds}s `)
     .setFooter("・Purples's Commands", message.author.displayAvatarURL({format: "png"}))
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle('HORA DA MENDIGAGEM <:emoji_67:831362443656822854> 🙏')
  .setDescription(`**<:pr_yuriblush01:831331771752382484> Você implorou e consegui ${amount}¥ ienes.**`)
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
  message.channel.send(moneyEmbed)
  db.add(`ienes_${message.guild.id}_${user.id}`, amount)
  db.set(`pedir_${message.guild.id}_${user.id}`, Date.now())


  }
}}
