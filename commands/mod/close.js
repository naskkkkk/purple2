const Discord = require ('discord.js')
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
  
module.exports = {
  name: "close", 
  alias: [],

async execute (client, message, args) {

 if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("No tengo permisos.");
    let ticketsupport = message.guild.roles.cache.find(
      r => r.name == "Ticket Support"
    ); //buscamos el rol 
    if (!ticketsupport)
      return message.channel.send("No existe el rol ticket Support");
      //Sí no existe hacemos una respuesta
    if (!message.member.roles.cache.has(ticketsupport.id))
      return message.channel.send(
        ":x: Error | No tienes Permisos Para Eliminar El ticket :x:."
      );//Si no tienes elaboramos otra respuesta
      let cate = message.guild.channels.cache.find(
      c => c.name == "tickets" && c.type == "category"
      ); //Que busque una categoria llamada Tickets
      if (!cate)
        message.channel.send(
          ":x: Error | No Hay Ningun Ticket Abierto :x:"
        ); //Así mismo pero puedes agregarie wue necessitan permisos X para eliminar ticket
      if (!message.channel.parent || message.channe.parent.id != cate.id)
        return message.channel.send(
          ":x: Error | Este Canal No Es Un Ticket :x:."
        ); //Sí el canal no es un ticket que no pase nada y que mande essa repuesta 
      return message.channel
        .delete()
        .catch(e => message.channel.send(`Parece que hubo un error`));
      //Si ocurre un error que lo mande al canal
  }
}