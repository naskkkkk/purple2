const Discord = require('discord.js')
const profileSchema = require('../../schema/profileSchema');

module.exports = {
    name: "balancee",
    alias: ['saldoo'],
    description: "shows your actual balance!",
  async execute (client, message, args){

        const userTarget = message.mentions.users.first() || message.author;

        const profileData = await profileSchema.findOne({
            userID: userTarget.id,
            guildID: message.guild.id
        })
        if(!profileData || profileData === null) {
            message.channel.send("ten użytkownik nie jest zarejestrowany w bazie danych.");
            return;
        }

        message.channel.send(`Balans użytkownika ${userTarget}:\n\nPortifólio: ${profileData.coins}\nBanco: ${profileData.bank}`)
    }
}
