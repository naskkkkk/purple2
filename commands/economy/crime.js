const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports = {
    name: "crime",
    description: "sim",
    timeout: 1000,
  async execute (client, message, args){

    let user = message.author;
    let author = await db.fetch(`crime_${message.guild.id}_${user.id}`)

    let timeout = 1800000;
    
let anel = db.get(`gun_${message.guild.id}_${message.author.id}`);
if(!anel) return message.channel.send(`**Você não tem uma Arma, para obter uma use a!buy arma!**`)


    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle("Criminalidade <:emoji_67:831362443656822854> <a:Pink_arminhaES:831675835420901446>")
        .setDescription(`**roubar dnv?, quer ser preso? <:pr_girlconfused02:831326992853893120>\n\nvolte em** _${time.minutes}m ${time.seconds}s_ <:relogio:830835869240786996>`)
        .setThumbnail('https://www.folhadosulonline.com.br/arquivos/noticias/38857/large/ladraoarmado.jpg')
        .setFooter('ta me tirando o bandido')
        message.channel.send(timeEmbed)
      } else {

        let replies = [' assaltou um banco',' xingou otaku',' não odeia o Nask',' não é tatakae',' bateu em uma velhinha',' matou um guri']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 30000) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle("Criminalidade <:emoji_67:831362443656822854> <a:Pink_arminhaES:831675835420901446>")
        .setDescription(`**Você${replies[result]}\ne conseguiu ${amount}¥ ienes <:stonks:831676685484032020>**`)
        .setThumbnail('https://st.depositphotos.com/1001033/3510/i/600/depositphotos_35101833-stock-photo-thief-stealing-a-laptop-computer.jpg')
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
        message.channel.send(embed1)
        
        db.add(`ienes_${message.guild.id}_${user.id}`, amount)
        db.set(`crime_${message.guild.id}_${user.id}`, Date.now())
    }; 
}}