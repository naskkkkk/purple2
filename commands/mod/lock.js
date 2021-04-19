const Canvas = require('canvas')
const Discord = require('discord.js')

module.exports = {
  name: "lock",
  alias: ["trancar"],
async execute (client, message, args){

  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "Motivo não Informado"
      let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, Você não tem permissão para usar este comando.`)
        return message.channel.send(embed);
      }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: true
    })
    const embed = new Discord.MessageEmbed()
    .setTitle('CHAT TRANCADO!')
    .setDescription(`Este chat foi mutado.`)
    .addField('Destrancar:', '(d!unlock)', true)
    .addField('Trancado Por:', `${message.author}`, true)
    .addField('Motivo:', motivo)
    .setTimestamp()
    .setThumbnail(avatar)
    .setColor('#7500ff')
    message.channel.send(embed);
          
}
}