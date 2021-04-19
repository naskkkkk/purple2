const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const { Client, MessageEmbed } = require('discord.js'); 
const { memeAsync } = require('memejs');

module.exports = { 
  name: "meme",
  alias: [],

async execute (client, message, args){

memeAsync().then(r => {
  const embed = new Discord.MessageEmbed()
  .setTitle('Meme')
  .setImage(r.url)
  .setColor('RANDOM');
  message.channel.send(embed)
})


}
}