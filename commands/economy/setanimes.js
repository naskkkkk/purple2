const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "setanime",
    alias: ["setanimes", "setan"],
    description: "sim",
    timeout: 1000,
async execute (client, message, args){
   
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(` ${message.author}, você tem que ter a permissão de **Administrador** para usar esse comando!`);
    };

    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(` ${message.author}, você precisa mencionar um usuário para adicionar o Dinheiro!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(` ${message.author}, você precisa colocar um numero valido!`);
    };

    db.add(`animes_${message.guild.id}_${user.id}`, args[1]);
    let bal = await db.fetch(`animes_${message.guild.id}_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle(":dollar: **|** Money adcionado!")
    .setColor("#000001")
    .setDescription(`Foi adicionado **$${args[1]}** para ${user}!\n\n:dollar: Dinheiro Atual: **R$${bal}**`)
    .setFooter(`Money foi adicionado!`);
    message.channel.send(moneyEmbed);
}
}