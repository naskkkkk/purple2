const db = require('../../schema/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name :'warn',
    /**
     * @param {Message} message
     */
   async execute (client, message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('Usuário não encontrado.')
        const motivo = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                            moderador : message.author.id,
                            motivo : motivo
                        }
                    ]
                })
            } else {
                const obj = {
                    moderador: message.author.id,
                    motivo : motivo
                }
                data.content.push(obj)
            }
            data.save()
        });
        user.send(new MessageEmbed()
            .setDescription(`Você levou um aviso pelo seguinte motivo: ${motivo}`)
            .setColor("RED")
        )
        message.channel.send(new MessageEmbed()
            .setDescription(`aviso em ${user}\n\n:bank: Motivo: ${motivo}`).setColor('BLUE')
        )
    }
}