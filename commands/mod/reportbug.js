const Discord = require('discord.js')
const  { MessageEmbed } = require("discord.js")

module.exports = {
name:"reportbug",
alias:["bug"],
async execute (client, message, args) {

let dono = client.users.cache.get("776855589987811368")
let canal = client.channels.cache.get("827265895268876348")
let autor = message.author;
let server = message.guild;
let bot = client.user;
let bug = args.join(" ")


if(!bug) return message.channel.send("**Digite algo para reportar")
if(bug.length > 1000) return message.channel.send("me dê uma mensagem menor a ser reportada")

//console
console.log(`Bug report\nBug: ${bug}\nUser: ${autor.tag}(${autor.id})\nServidor: ${server.name}`)

//canal
const embed = new MessageEmbed()
.setAuthor(`Bug Report ${bot.username}`, bot.displayAvatarURL())
.setFooter(`Bug ${server.name}`)
.setTimestamp()
.addField("Autor:", `${autor.tag}(${autor.id})`)
.addField("Server", `${server.name}`)
.addField("Bug", `${bug}`)
canal.send(embed)

//dono
const embed1 = new MessageEmbed()
.setAuthor(`Bug Report ${bot.username}`, bot.displayAvatarURL())
.setFooter(`Bug ${server.name}`)
.setColor("#ff0000")
.setTimestamp()
.addField("Autor:", `${autor.tag}(${autor.id})`)
.addField("Server", `${server.name}`)
.addField("Bug", `${bug}`)
dono.send(embed1)

//mensagem na canal que foi executado o comando
message.channel.send({embed: {
description: `${autor} bug reportado e enviado para a equipe com sucesso!`,
color: "#ff0000"
}})

//envia a mensagem na dm do autor 
message.author.send({embed: {
description: `${autor} bug reportado e enviado para a equipe com sucesso!`,
color: "#ff0000"
}})
}
}
