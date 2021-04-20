const slotItems = ["<:pr_girlangel01:832045472163692564>","<:purple_oclin:832024271471247411>","<:purple_dormindo:831812457709830154>","<a:pr_nekouwu01:831327481457410079>","<:pr_girlwow02:832033590769483846>","<:pr_girllove01:831775924956954625>","<:pr_girlconfused02:831326992853893120>"];
const db = require("quick.db");
const Discord = require('discord.js');
const ms = require("parse-ms");

module.exports = {
    name: "slots",
    alias: ["waifuflip", "feira", 'feirinha', 'girarwaifu'],
    description: "sim",
    timeout: 1000,
  async execute (client, message, args){

 


    let user = message.author;
    let moneydb = await db.fetch(`ienes_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

  let timeout = 4000;
  let daily = await db.fetch(`waiflip_${message.guild.id}_${user.id}`);

    let moneymore = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setDescription(`<:pr_girlconfused02:831326992853893120> **Você está apostando mais do que tem!**`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setDescription(`<:pr_girlconfused02:831326992853893120> **Ué, quanto você quer apostar?**`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);






    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 3
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 1.5
        win = true;

    }   if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
     let bad = new Discord.MessageEmbed()
    .setColor('#ff1900')
    .setDescription(`**Alerta Anti-Spam!<a:grr:831992644317216778>\n Aguarde 4s para tentar novamente.**`)
    .setFooter("・ Purple's Commands", message.author.displayAvatarURL({format: "png"}))
    message.channel.send(bad)
    } else if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
        .setTitle('Feira De Waifus <:emoji_67:831362443656822854> <:purple_uau:832003077883297843>')
            .setDescription(`${slotItems[number[0]]} <:l_setaroxa:831338736603365445> ${slotItems[number[1]]} <:l_setaroxa:831338736603365445> ${slotItems[number[2]]}\n\n**Você ganhou ${money}¥ ienes na feira de waifus**`)
            .setThumbnail('https://thumbs.gfycat.com/AffectionateCheapFeline-small.gif')
              .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
            .setColor("#7500ff")
        message.channel.send(slotsEmbed1)

db.add(`ienes_${message.guild.id}_${message.author.id}`, money)
    } else {
      money *= 1.2
        let slotsEmbed = new Discord.MessageEmbed()
          .setTitle('Feira de Waifus <:emoji_67:831362443656822854> <:purple_chorando:832002026145448047>')
            .setDescription(`${slotItems[number[0]]} <:l_setaroxa:831338736603365445> ${slotItems[number[1]]} <:l_setaroxa:831338736603365445> ${slotItems[number[2]]}\n\n**Você perdeu ${money}¥ ienes na feira de waifus**`)
            .setThumbnail('https://i.pinimg.com/originals/fa/52/67/fa5267cece9d0eb4783e035ad04d9d66.gif')
            .setColor("#7500ff")
             .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
        message.channel.send(slotsEmbed)
        db.subtract(`ienes_${message.guild.id}_${user.id}`, money)
    }
     db.set(`waiflip_${message.guild.id}_${user.id}`, Date.now())

}}
