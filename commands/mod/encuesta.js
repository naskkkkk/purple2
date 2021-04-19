const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "encuesta",
  alias: ["pregunta"],

execute (client, message, args){
if(message.author.bot || message.type === 'dm') return;
const perms = message.member.hasPermission('MANAGE_MESSAGES')
if(!perms) return message.channel.send('No tenes los permisos nesesarios');
  const texto = args.join('  ')
  const autor = message.author;
  if(!texto) return message.channel.send('Ingresa un texto capo');

  const embed = new Discord.MessageEmbed()
  .setTitle('Encuesta')
  .setDescription(texto)
  .setThumbnail('https://i.ibb.co/k1vsw39/signo-interrogacion-moderno-pagina-ayuda-soporte-1017-27395.jpg')
  .setFooter(`Encuesta hecha por ${autor.username}`)
  .setColor('RANDOM')

  message.channel.send(embed).then(msg => {
    message.delete()
    msg.react('<a:si:827593577152249906>')
    msg.react('<a:no:827593656550555729>')
  })

 }

} 