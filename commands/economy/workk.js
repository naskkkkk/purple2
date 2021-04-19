const Discord = require('discord.js')
const profileSchema = require('../../schema/profileSchema');

module.exports = {
    name: "workk",
    alias: [],
    description: "work for coins!",
  async execute (client, message, args){

   
        const randomNumber = Math.floor(Math.random() * 500) + 1;

        await profileSchema.findOneAndUpdate({
            userID: message.author.id,
            guildID: message.guild.id
        }, {
            $inc: {
                coins: randomNumber
            }
        }, {
            upsert: true
        })

        message.channel.send(`Pracowałeś i zarobiłeś \`${randomNumber}$\``)
    }
}