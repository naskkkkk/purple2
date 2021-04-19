const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
  name: "casamento",
  alias: ["marry", 'casar', "case", "marr", "namorar"],
  description : 'Mata o player e muta ele da call.',
  timeout: 1000,
  async execute (client, message, args){
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);




let falabad = new Discord.MessageEmbed()
.setColor("#7500ff")
.setTitle('Casamento <:emoji_67:831362443656822854> 👰')
.setDescription(`**<:pr_girlconfused02:831326992853893120> Você quer se casar...\n hmm? Com o Vento?.**`)
 .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
  if (!user) return message.channel.send(falabad);


    let potato = new Discord.MessageEmbed()
.setColor("#7500ff")
.setTitle('Casamento <:emoji_67:831362443656822854> 👰')
.setDescription(`**<:pr_girlconfused02:831326992853893120> Você quer se casar...\n hmm? Com o Você? kkk autoestima é tudo.**`)
 .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
   if (user == message.member) return message.reply(potato);

let bot = "827106783465701377"

    let potata = new Discord.MessageEmbed()
.setColor("#7500ff")
.setTitle('Casamento <:emoji_67:831362443656822854> 👰')
.setDescription(`**<:pr_girlconfused02:831326992853893120> Você quer se casar Comigo? Desculpe,\n eu só tenho olhos pro Nask🖤.**`)
.setThumbnail('https://media0.giphy.com/media/lgBQpM00TB8n6/source.gif')
 .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
   if (user == bot) return message.reply(potata);

   let pika = db.fetch(`marry_${user.id}`)
   let hm = new Discord.MessageEmbed()
.setColor("#7500ff")
.setTitle('Casamento <:emoji_67:831362443656822854> 👰')
.setDescription(`**<:purple_chorando:832002026145448047> Esse carinha já está casado :/**`)
.setThumbnail('https://physiopilates.com/wp-content/uploads/2019/08/blog-pilates_e_depressao_sera_que_essa_combinacao_esta-certa-1024x768.jpg')
 .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
   if (pika) return message.reply(hm)

     let pikua = db.fetch(`marry_${message.author.id}`)
   let hmu = new Discord.MessageEmbed()
.setColor("#7500ff")
.setTitle('Casamento <:emoji_67:831362443656822854> 👰')
.setDescription(`**<a:grr:831992644317216778> Você já está casado :/**`)
.setThumbnail('https://physiopilates.com/wp-content/uploads/2019/08/blog-pilates_e_depressao_sera_que_essa_combinacao_esta-certa-1024x768.jpg')
 .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
   if (pikua) return message.reply(hmu)


let anel = db.get(`anel_${message.guild.id}_${message.author.id}`);
if(!anel) return message.channel.send(`**Você não tem um Anel de noivado, use a!buy anel para obter um 💍**`)

  const embed = new Discord.MessageEmbed()
  .setColor("#7500ff")
  .setTitle('Casamento <:emoji_67:831362443656822854> 👰')
  .setDescription(`**${user}\nO usuário ${message.author.tag} quer\n casar com você, aceitas?!**`)
  .setThumbnail("https://media1.giphy.com/media/da7ZYumuyTEnl6Vl2n/giphy.gif")
   .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
   message.channel.send(embed).then(msg => {
  msg.react('831327513094651924');

  let filtro = (reaction, usuario) => reaction.emoji.name === 'pr_check02' && usuario.id === user.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});


  coletor.on("collect", r => {
    r.remove(message.author.id);
let aceitar = new Discord.MessageEmbed()
.setColor("#7500ff")
.setTitle('Casamento <:emoji_67:831362443656822854> 👰')
.setDescription(`**<:pr_girlwow02:832033590769483846> *FELICIDADES!!!*\n ${user} e ${message.author} estão casados.**`)
.setThumbnail("https://thumbs.gfycat.com/ColdDismalAngelwingmussel-size_restricted.gif")
 .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
 message.channel.send(aceitar)
db.set(`marry_${user.id}`, message.author.username)
db.set(`marry_${message.author.id}`, user.user.username)
let ring = db.delete(`anel_${message.author.id}`, 1)
   })



  })
  
}}