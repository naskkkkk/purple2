const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: "daily",
    alias: ["diario", 'diário', "diaria", "diária"],
    description: "sim",
    timeout: 1000,
async execute (client, message, args){


  let user = message.author;

  let timeout = 86400000;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);


  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));

  
  let hage = ('https://i.pinimg.com/originals/63/68/6a/63686a4c17d5304d8ea387516302c715.gif')

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Daily da Purple <:emoji_67:831362443656822854> <a:ut_realmoney:832062465269170177>')
    .setDescription(`<:hmmmm:830835955358760970> **Você já coletou seu dinheirinho hoje.\n\nPegue mais em ${time.hours}h ${time.minutes}m ${time.seconds}s<:relogio:830835869240786996>**`)
    .setThumbnail("https://lh3.googleusercontent.com/proxy/p5wLVZvWWkMulW9BJgWwGh4TMQSzfOUMLlz2jgXzdf9vr2qNPhQpK97cjGqpEY8bVE97GbIgPTCo8nsea2RFQeGZIZr4c3qjK9vCyqT81ElN-REVE-2ge4D2odLLqkM")
    .setFooter('Purple: "ai ai, essa gente acha que eu sou besta"・Fanny Commands', hage)
    message.channel.send(timeEmbed)
  } else {

  let mon = Math.floor(Math.random() * 10000) + 1;
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle('Daily da Purple <:emoji_67:831362443656822854> <a:ut_realmoney:832062465269170177>')
  .setDescription(`<:hmmmm:830835955358760970> **_Você coletou seu daily e ganhou ${mon}¥ ienes__**`);
  message.channel.send(moneyEmbed)
  db.add(`ienes_${message.guild.id}_${user.id}`, mon)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


  }
}}
