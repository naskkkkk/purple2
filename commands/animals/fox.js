const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const axios = require('axios');
const cooldown = new Set();

module.exports = {
  name: "fox",
  alias: ["zorro"],

execute (client, message, args){
if(message.author.bot || message.channel.type === 'dm') return;
  if (cooldown.has(message.author.id)) {
            message.channel.send(`${message.author}, awantate 7 segundos antes de volver a usar este comando`);
    } else {
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 7000);
axios.get('https://randomfox.ca/floof/').then(res => {
  const embed = new Discord.MessageEmbed()
  .setTitle(' :fox: ')
  .setImage(res.data.image)
  .setFooter(`Pedido por ${message.author.username}`)
  .setColor('RANDOM');
  message.channel.send(embed)
})


 }

} 
}