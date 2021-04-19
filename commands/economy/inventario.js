const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
  name: "inventario",
  alias: ["inv"],
  description : 'Mata o player e muta ele da call.',
  timeout: 1000,
  async execute (client, message, args){


        let items = await db.fetch(message.author.id);
        if(items === null) items = "Você ainda nao comprou nada, digite .shop"

        const Embed = new Discord.MessageEmbed()
        .setColor('Coloque uma cor aqui!')
        .addField('Invetario', items)

        message.channel.send(Embed);
}
}