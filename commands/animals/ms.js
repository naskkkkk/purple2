const Discord = require('discord.js');
const client = new Discord.Client();
const ping = require('mc-hermes');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "mc",
  alias: [],

execute (client, message, args){

ping({
    type: 'pe',
    server: 'pe.mineplex.com'
}).then((data) =>{
        console.log(data)
    })
    .catch(console.error);

 }

} 
