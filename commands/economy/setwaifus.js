const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "setwaifus",
    alias: ["setw", "setarw"],
    description: "sim",
    timeout: 1000,
async execute (client, message, args){
   
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(` ${message.author}, você tem que ter a permissão de **Administrador** para usar esse comando!`);
    };

    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(` ${message.author}, você precisa mencionar um usuário para adicionar Waifus!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(` ${message.author}, você precisa colocar um numero valido!`);
    };

    db.add(`waifus_${message.guild.id}_${user.id}`, args[1]);
    let bal = await db.fetch(`waifus_${message.guild.id}_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle("Waifus adcionados <:emoji_67:831362443656822854> <a:ut_realmoney:832062465269170177>")
    .setColor("#7500ff")
    .setDescription(`Foi adicionado **${args[1]}₩** waifus para ${user}!\n\n<:cart_purp:831338522459373628> waifus na carteira: **${bal}₩**`)
    .setFooter(`・Waifus foi adicionado!`);
    message.channel.send(moneyEmbed);
}
}