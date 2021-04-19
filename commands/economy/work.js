const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports = {
    name: "work",
    alias: ["trabalho", "trabalhar", 'worked'],
    description: "sim",
    timeout: 1000,
  async execute (client, message, args){
 

let anel = db.get(`carteira_${message.guild.id}_${message.author.id}`);
if(!anel) return message.channel.send(`**Você não tem uma Carteira de Trabalho, para obter uma use a!buy carteira!**`)

    let user = message.author;
    let author = await db.fetch(`trabalho_${message.guild.id}_${user.id}`)

    let timeout = 15000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle("Purple's Empresa <:emoji_67:831362443656822854> 💹")
        .setDescription(`**Que isso amigo?, vai dormir <:purple_dormindo:831812457709830154>\n\nVocê já trabalhou hoje, volte em ${time.minutes}m ${time.seconds}s**`)
        .setThumbnail('https://1.bp.blogspot.com/-nk6rA1tcjs8/T56DI2Gj4wI/AAAAAAAAeNQ/oCtMULHvnGU/s1600/23.gif')
        .setFooter('KK, o doido pensa que é político pra trabalhar tanto assim')
        message.channel.send(timeEmbed)
      } else {

        let replies = [' como Desenhista',' como Lolzeiro',' vendo Anime',' matando fã de gaby',' em seus sonhos',', quando voltou pra casa dormiu']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 10000) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle("Purple's Empresa <:emoji_67:831362443656822854> 💹")
        .setDescription(`**Você trabalhou${replies[result]}\ne recebeu ${amount}¥ ienes <:stonks:831676685484032020>**`)
        .setThumbnail('https://i.ytimg.com/vi/H3YsAf6NHT0/hqdefault.jpg')
         .setFooter("・Angelical's Commands", message.author.displayAvatarURL({format: "png"}))
        message.channel.send(embed1)
        
        db.add(`ienes_${message.guild.id}_${user.id}`, amount)
        db.set(`trabalho_${message.guild.id}_${user.id}`, Date.now())
    }; 
}}