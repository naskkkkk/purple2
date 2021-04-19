const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "colors",
  alias: [],

async execute (client, message, args){
if(message.author.bot || message.channel.type === 'dm') return;
const perms = message.member.hasPermission('ADMINISTRATOR');
if(!perms) return message.channel.send('No sos admin jaja');

const guild = message.guild;
const mensaje = await message.channel.send('Creando roles...')
guild.roles.create({
  data: {
    name: '「🍎」 Rojo',
    color: 'RED',
  },
  reason: 'red rol',
})

guild.roles.create({
  data: {
    name: '「🍊」 Naranja',
    color: 'ORANGE',
  },
  reason: 'orange rol',
})

guild.roles.create({
  data: {
    name: '「🍌」 Amarillo',
    color: 'YEELOW',
  },
  reason: 'yellow rol',
})

guild.roles.create({
  data: {
    name: '「🌱」 Verde Claro',
    color: '#49ca75',
  },
  reason: 'green rol',
})

guild.roles.create({
  data: {
    name: '「🌲」 Verde Oscuro',
    color: '#104c24',
  },
  reason: 'green2 rol',
})

guild.roles.create({
  data: {
    name: '「💎」 Celeste',
    color: '#00ffff',
  },
  reason: 'cyan rol',
})

guild.roles.create({
  data: {
    name: '「🐟」 Azul',
    color: '#0040ff',
  },
  reason: 'blue rol',
})

guild.roles.create({
  data: {
    name: '「💜」 Morado',
    color: '#9f00ff',
  },
  reason: 'purple rol',
})

guild.roles.create({
  data: {
    name: '「❇️」 Rosado',
    color: '#ff00cd',
  },
  reason: 'rose rol',
}).then(mensaje.edit('Se han creado correctamente los roles de colores!'))
 }

} 