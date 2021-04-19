const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require('axios');
const Canvas = require('canvas');
const cooldown = new Set();

module.exports = {
  name: "gdprofile",
  alias: ["profil"],

async execute (client, message, args){

if(message.author.bot || message.channel.type === 'dm') return;
if (cooldown.has(message.author.id)) {
  message.channel.send(`${message.author}, awantate 5 segundos antes de volver a usar este comando`);
} else {
cooldown.add(message.author.id);
setTimeout(() => {
cooldown.delete(message.author.id);
}, 5000);

if(message.author.bot || message.channel.type === 'dm') return;

const profile = args[0]

axios.get(`https://gdbrowser.com/api/profile/${profile}`).then(async res => {

  if(res.data == '-1') return message.channel.send('El usuario no ha sido encontrado o hay un problema en los servidores');

  //Iconlist

  const canvas = Canvas.createCanvas(850, 130);
	const ctx = canvas.getContext('2d');

  const cube = await Canvas.loadImage(`https://gdbrowser.com/icon/${profile}?size=70&form=cube`);

  const ship = await Canvas.loadImage(`https://gdbrowser.com/icon/${profile}?size=70&form=ship`);

  const ball = await Canvas.loadImage(`https://gdbrowser.com/icon/${profile}?size=70&form=ball`);

  const ufo = await Canvas.loadImage(`https://gdbrowser.com/icon/${profile}?size=70&form=ufo`);

  const wave = await Canvas.loadImage(`https://gdbrowser.com/icon/${profile}?size=70&form=wave`);

  const robot = await Canvas.loadImage(`https://gdbrowser.com/icon/${profile}?size=70&form=robot`);

  const spider = await Canvas.loadImage(`https://gdbrowser.com/icon/${profile}?size=70&form=spider`);

  ctx.drawImage(cube, 10, 20, 70, 70);
  ctx.drawImage(ship, 100, 10, 100, 100);
  ctx.drawImage(ball, 220, 20, 70, 70);
  ctx.drawImage(ufo, 310, 20, 70, 70);
  ctx.drawImage(wave, 410, 20, 70, 70);
  ctx.drawImage(robot, 510, 20, 70, 70);
  ctx.drawImage(spider, 610, 30, 70, 70);


  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'iconlist.png');

  const embed = new Discord.MessageEmbed()
  .setTitle(`Perfil del usuario **${profile}**`)
  .addField(`Estrellas: `, `${res.data.stars}`)
  .addField(`Diamantes: `, `${res.data.diamonds}`)
  .addField(`Coins: `, `${res.data.coins}`)
  .addField(`User Coins: `, `${res.data.userCoins}`)
  .addField(`Demons: `, `${res.data.demons}`)
  .addField(`Creator points: `, `${res.data.cp}`)
  .addField(`User Coins: `, `${res.data.userCoins}`)
  .setColor('RANDOM')
  .attachFiles(attachment)

  message.channel.send(embed)

})

 }

} 

}