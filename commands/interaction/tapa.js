const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "tapa",
  alias: ["tapa"],

async execute (client, message, args){

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

   var list = [
      'https://media1.giphy.com/media/y6dyjA5vmkUgw/200.gif',
      'https://media1.giphy.com/media/26uf3m46sDFVPedig/source.gif',
      'https://media4.giphy.com/media/l41YtWUr1CGntlR1C/200.gif',
      'https://media3.giphy.com/media/xT9IgzTnZHL9zp6IPS/source.gif',
      'https://bolojawan.com/wp-content/uploads/2017/08/giphy-2.gif',
      'https://media4.giphy.com/media/3oEduOWVxygmeDIKPu/giphy.gif',
      'https://i.pinimg.com/originals/2e/44/23/2e4423dbcf1fecc0122694be3df8193f.gif',
      'https://i.pinimg.com/originals/3f/60/e2/3f60e24494f073fd5d66bb55b23dbb9e.gif',
      'https://i.pinimg.com/originals/76/40/19/764019e5c443da1759d64b40abf99944.gif',
      'https://uploads.spiritfanfiction.com/fanfics/capitulos/201504/fanfiction-originais-story-of-my-life-3341418,040420151936.gif',
      'https://uploads.spiritfanfiction.com/fanfics/capitulos/201606/fanfiction-originais-mudanca-de-vida-do-dia-para-a-noite-5737270-070620162054.gif',
      'https://i2.wp.com/parafraseandolivros.com.br/wp-content/uploads/2014/02/Tapa-na-cara.gif?fit=500%2C282&ssl=1',
      'http://s.glbimg.com/et/tv/f/original/blog/a9132b1e-1765-496a-aaac-f7687eb179c5_tapas.gif',
      'http://s.glbimg.com/et/tv/f/original/blog/bb3444b0-a099-4013-abea-b0e5584b67ad_thales_tapa.gif',
      'https://media3.giphy.com/media/gkx6ZCzw0iqyCW1doN/200w.gif?cid=82a1493blzx318ri71ycjqe0rpbvqpxeob2cfoca1izu7yur&rid=200w.gif',
      'https://thumbs.gfycat.com/WhisperedPerkyCock-size_restricted.gif',
      'https://i.pinimg.com/originals/7c/33/e4/7c33e4fcbdaaae43ce6e967aabfb81f7.gif',
      'https://lh6.ggpht.com/-RQ6uJGf-dg8/TwmaBBXQ-zI/AAAAAAAACqw/3p7aLXSRsmo/s210/debxzumiragif2.gif',
      'https://lh3.googleusercontent.com/-O8u8EpvKE5E/VYKcnHDQFKI/AAAAAAAAEQo/8H6nwogLgIQ/s245-Ic42/tumblr_mmy1xxGckb1qd1kvjo2_250.gif',
      'https://paneladeseries.com.br/wp-content/uploads/2016/03/tapa.gif'
   ]

   var list1 = [
      'https://media1.giphy.com/media/y6dyjA5vmkUgw/200.gif',
      'https://media1.giphy.com/media/26uf3m46sDFVPedig/source.gif',
      'https://media4.giphy.com/media/l41YtWUr1CGntlR1C/200.gif',
      'https://media3.giphy.com/media/xT9IgzTnZHL9zp6IPS/source.gif',
      'https://bolojawan.com/wp-content/uploads/2017/08/giphy-2.gif',
      'https://media4.giphy.com/media/3oEduOWVxygmeDIKPu/giphy.gif',
      'https://i.pinimg.com/originals/2e/44/23/2e4423dbcf1fecc0122694be3df8193f.gif',
      'https://i.pinimg.com/originals/3f/60/e2/3f60e24494f073fd5d66bb55b23dbb9e.gif',
      'https://i.pinimg.com/originals/76/40/19/764019e5c443da1759d64b40abf99944.gif',
      'https://uploads.spiritfanfiction.com/fanfics/capitulos/201504/fanfiction-originais-story-of-my-life-3341418,040420151936.gif',
      'https://uploads.spiritfanfiction.com/fanfics/capitulos/201606/fanfiction-originais-mudanca-de-vida-do-dia-para-a-noite-5737270-070620162054.gif',
      'https://i2.wp.com/parafraseandolivros.com.br/wp-content/uploads/2014/02/Tapa-na-cara.gif?fit=500%2C282&ssl=1',
      'http://s.glbimg.com/et/tv/f/original/blog/a9132b1e-1765-496a-aaac-f7687eb179c5_tapas.gif',
      'http://s.glbimg.com/et/tv/f/original/blog/bb3444b0-a099-4013-abea-b0e5584b67ad_thales_tapa.gif',
      'https://media3.giphy.com/media/gkx6ZCzw0iqyCW1doN/200w.gif?cid=82a1493blzx318ri71ycjqe0rpbvqpxeob2cfoca1izu7yur&rid=200w.gif',
      'https://thumbs.gfycat.com/WhisperedPerkyCock-size_restricted.gif',
      'https://i.pinimg.com/originals/7c/33/e4/7c33e4fcbdaaae43ce6e967aabfb81f7.gif',
      'https://lh6.ggpht.com/-RQ6uJGf-dg8/TwmaBBXQ-zI/AAAAAAAACqw/3p7aLXSRsmo/s210/debxzumiragif2.gif',
      'https://lh3.googleusercontent.com/-O8u8EpvKE5E/VYKcnHDQFKI/AAAAAAAAEQo/8H6nwogLgIQ/s245-Ic42/tumblr_mmy1xxGckb1qd1kvjo2_250.gif',
      'https://paneladeseries.com.br/wp-content/uploads/2016/03/tapa.gif'
   ]

   var rand = list[Math.floor(Math.random() * list.length)]
   var rand1 = list1[Math.floor(Math.random() * list1.length)]
   let user = message.mentions.users.first()

   if (!user) {
      let prefix = db.get(`prefix_${message.guild.id}`)
      if (prefix === null) prefix = "p!"

      const nouser = new Discord.MessageEmbed()
         .setColor('#7500ff')
         .setTitle('Erooou!!')
         .setDescription('` use p!tapa @user`')
      return message.reply(nouser)
   }

   if (user.id === '829506463298879588') {
      return message.channel.send('Não bate em mim!!!')
   }

   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#7500ff')
      .setDescription(`${message.author} está dando tapas em ${user}`, avatar)
      .setImage(rand)
      .setFooter('Clique em 🔁 para atacar!')

   const embed2 = new Discord.MessageEmbed()
      .setColor('#7500ff')
      .setDescription(`${user} bateu em ${message.author} `, avatar1)
      .setImage(rand1)

   await message.channel.send(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2)
         }
      })
   })
}
}