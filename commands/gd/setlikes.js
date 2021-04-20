const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "setlikes",
    alias: ["setlike", "setlike"],
    description: "sim",
    timeout: 1000,
async execute (client, message, args){
   
   if(message.author.id !== '776855589987811368') {
   return message.reply(`Negado ${message.author.username}, Somente meu dono pode usar este comando!`);
    };

    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(` ${message.author}, você precisa mencionar um usuário para adicionar o Dinheiro!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(` ${message.author}, você precisa colocar um numero valido!`);
    };
  

    db.add(`like_${user.id}`, args[1]);
    let bal = await db.fetch(`like_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle(":dollar: **|** Money adcionado!")
    .setColor("#000001")
    .setDescription(`Foi adicionado **$${args[1]}** para ${user}!\n\n:dollar: Dinheiro Atual: **R$${bal}**`)
    .setFooter(`Money foi adicionado!`);
    message.channel.send(moneyEmbed);
}
}
