const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "removemoney",
    alias: ["removerienes", "removerdin"],
    description: "sim",
    timeout: 1000,
async execute (client, message, args){
       
   if(message.author.id !== '776855589987811368') {
   return message.reply(`Negado ${message.author.username}, Somente meu dono pode usar este comando!`);
    };

    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(` ${message.author}, você precisa mencionar um usuário para remover o Dinheiro!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(` ${message.author}, você precisa colocar um numero valido!`);
    };

    db.subtract(`ienes_${message.guild.id}_${user.id}`, args[1]);
    let bal = await db.fetch(`ienes_${message.guild.id}_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle(":dollar: **|** Money removido!")
    .setColor("#00001")
    .setDescription(`Foi removido **$${args[1]}** para ${user}!\n\n:dollar: Dinheiro Atual: **R$${bal}**`)
    .setFooter(`Money foi removido!`);
    message.channel.send(moneyEmbed);
}
}