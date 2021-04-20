const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  alias: ["teste1"],

execute (client, message, args){
if(message.author.bot || message.channel.type === 'dm') return;
  
  const embed = new Discord.MessageEmbed()
  .setTitle('Ayuda')
  .setDescription(`Hola capo, bienvenido al apartado de ayuda, estas son las categorias de comandos, reacciona a este mensaje para ir a la categoria que desees`)
  	.addFields(
		{ name: '😂 | Diversion', value: 'Comandos de diversion ', inline: true },
		{ name: '🔨 | Moderacion', value: 'Comandos de Moderacion ', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '🦊 | Animales', value: 'Comandos de animales', inline: true },
		{ name: '🔞 | NSFW', value: 'Comandos NSFW', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '  🚶 | Interaccion', value: 'Comandos de interaccion o roleo', inline: true },
    { name: '🌍 | Menu', value: 'Muestra este menu', inline: true },
	)

  .setColor('RANDOM');

  const diversionembed = new Discord.MessageEmbed()
  .setTitle('😂 | Diversão')
  .setDescription('Estos son los comandos de diversion')
  .addField('N!affect', 'Esto no afectara a mi bebe...')
  .addField('U/ascii', 'Convierte el texto que ingreses a ASCII')
  .addField('U/beautiful', 'Esto... Es hermoso!')
  .addField('U/changemymind', 'Muestra el texto ingresado sobre la imagen ChangeMyMind')
  .addField('U/delete', 'Delete')
  .addField('U/opinion', 'Se supone que debes respetar la opinion de los demas...')
  .addField('U/roll', 'Tira el dado!')
  .addField('U/skin', 'Muestra la skin de un usuario de Minecraft Java, o un niño rata')
  .addField('U/trash', 'Lo que realmente eres...')
  .addField('U/triggered', 'Muestra tu avatar con el efecto trigerred')
  .addField('U/say', 'El bot dice lo que escribes')
  .addField('U/owoify', 'Owoifica el texto que ingreses')
  .setColor('RANDOM');


const moderacionembed = new Discord.MessageEmbed()
.setTitle('🔨 | Moderacion')
.setDescription('Estos son los comandos de moderacion')
.addField('U/encuesta', 'Crea una encuesta')
.addField('U/warn', 'Warnea a un usuario')
.addField('U/unwarn', 'Deswarnea a un usuario')
.addField('U/warns', 'Mira los warns de alguien')
.addField('U/saychannel', 'Envia un mensaje a el canal que menciones')
.setColor('RANDOM');

const animalesembed = new Discord.MessageEmbed()
.setTitle('🦊 | Animales')
.setDescription('Estos son los comandos de animales')
.addField('U/cat', 'Muestra la imagen de un gato')
.addField('U/dog', 'Muestra la imagen de un perro')
.addField('U/fox', 'Muestra la imagen de un zorro')
.addField('U/panda', 'Muestra una imagen aleatoria de un panda')
.addField('U/catfact', 'Muesta un hecho aleatorio de los gatos')
.addField('U/dogfact', 'Muestra un hecho aleatorio sobre los perros')
.addField('U/foxfact', 'Muestra un hecho aleatorio sobre los zorros')
.setColor('RANDOM');

const nsfwembed = new Discord.MessageEmbed()
.setTitle('🔞 | NSFW')
.setDescription('Estos son los comandos NSFW')
.addField('U/anal', 'Sin comentarios')
.addField('U/ass', 'Guatafac')
.addField('U/boobs', '...')
.addField('U/hentai', 'A')
.addField('U/neko', 'Lewd')
.addField('U/pussy', 'owo xd')
.addField('U/tits', '. . .')
.addField('U/yuri', 'A')
.setColor('RANDOM');

const interactionembed = new Discord.MessageEmbed()
.setTitle('🚶 | Interaccion')
.setDescription('Estos son los comandos de moderacion')
.addField('U/sad', 'Estas triste?, pues deja de llorar')
.addField('U/hug', 'Abraza a alguien que no sea a mi, no soy marikon')
.setColor('RANDOM');

  message.channel.send(embed).then(mensaje => {
    mensaje.react('831409651793788978')
    mensaje.react('831409450320527410')
    mensaje.react('🦊')
    mensaje.react('🔞')
    mensaje.react('🚶')
    mensaje.react('🌍')

    mensaje.awaitReactions((reaction, user) => {
      if(message.author.id !== user.id) return;

      if(reaction.emoji.name === 'a:five'){
        mensaje.edit(diversionembed)
        reaction.users.remove(message.author.id);
      }

      if(reaction.emoji.name === 'a:quatro'){
        mensaje.edit(moderacionembed)
        reaction.users.remove(message.author.id);
      }

      if(reaction.emoji.name === '🦊'){
        mensaje.edit(animalesembed)
        reaction.users.remove(message.author.id);
      }

      if(reaction.emoji.name === '🔞'){
        mensaje.edit(nsfwembed)
        reaction.users.remove(message.author.id);
      }
      
      if(reaction.emoji.name === '🌍'){
        mensaje.edit(embed)
        reaction.users.remove(message.author.id);
      }

      if(reaction.emoji.name === '🚶'){
        mensaje.edit(interactionembed)
        reaction.users.remove(message.author.id);
      }
    })
  })

 }

} 
