const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "store",
    alias: ["loja", "lojinha", 'lojin'],
    description: "sim",
    timeout: 1000,
  execute (client, message, args) {
 


        const member = message.member
        let embed = new Discord.MessageEmbed()
            .setColor("#7500ff")
            .setTitle(`Purple's Store  <:emoji_67:831362443656822854> <a:Dima_purple:831763668944551966>`)
            .setDescription(`**__Bem vindo(a) ${member} a Purple's Store!__**\n**A loja que vai realizar seus sonhos**<:pr_girllove01:831775924956954625>\n_Para encomendar seu pedido, basta olhar nossas prateleiras abaixo e escolher._\nUse \`p!buy <item>\` *para comprá-lo*\n\n**Aperte em <a:CoroaES:831770970833813524> para ver os itens sagrados.\nAperte em <:P_BOLINHO_PV:831770912125747221> para ver os itens utilitários.\nAperte em <:developer_badge:831774020097146940> para ver as funções disponíveis para comprar.\nClique em <:galaxy:831773973737242666> para comprar os perfis.**\n_e para ver isto novamente aperte em_ <a:purple_lua:831766186387046410>.`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setURL(`https://www.instagram.com/nask_tv/`)
            .setFooter(`Clique no título para acessar meu insagram.`)  
        message.channel.send(message.author, embed).then(msg => { //quando enviar a mensagem...
            msg.react(`831766186387046410`).then(() => { //quando reagir o primeiro emoji...
            msg.react(`831770970833813524`);
            msg.react(`831770912125747221`);
            msg.react(`831774020097146940`);
            msg.react(`831773973737242666`);
            })


            const info = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `purple_lua` && user.id == message.author.id, {time: 60000})

            const diversao = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `CoroaES` && user.id == message.author.id, {time: 60000}) 

            const fun = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `P_BOLINHO_PV` && user.id == message.author.id, {time: 60000}) 

            const musica = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `developer_badge` && user.id == message.author.id, {time: 60000}) 

            const voltar = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `galaxy` && user.id == message.author.id, {time: 60000})



           info.on(`collect`, r =>{  
                let emtwo = new Discord.MessageEmbed()
        .setColor("#7500ff")
            .setTitle(`Purple's Store  <:emoji_67:831362443656822854> <a:Dima_purple:831763668944551966>`)
  .setDescription(`**__Bem vindo(a) ${member} a Purple's Store!__**\n**A loja que vai realizar seus sonhos**<:pr_girllove01:831775924956954625>\n_Para encomendar seu pedido, basta olhar nossas prsteleiras abaixo e escolher._\nUse \`p!buy <item>\` *para comprá-lo*\n\n**Aperte em <a:CoroaES:831770970833813524> para ver os itens sagrados.\nAperte em <:P_BOLINHO_PV:831770912125747221> para ver os itens utilitários.\nAperte em <:developer_badge:831774020097146940> para ver as funções disponíveis para comprar.\nClique em <:galaxy:831773973737242666> para comprar os perfis.**\n_e para ver isto novamente aperte em_ <a:purple_lua:831766186387046410>.`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setURL(`https://www.instagram.com/nask_tv/`)
            .setFooter(`Clique no título para acessar meu instagram.`)  
                msg.edit(emtwo)
            })

            diversao.on(`collect`, r =>{  
                let embed_two = new Discord.MessageEmbed()
                .setColor("#7500ff")
                    .setTitle(`Purple's Store  <:emoji_67:831362443656822854> <a:Dima_purple:831763668944551966>`)
                        .setThumbnail('https://cf.shopee.com.br/file/6fc5d8a2782deb64b7245b097ce81b4a')
                    .setDescription(`**Itens Sagrados**\n\n <:um:831983209029959690>. **Waifus** - [3.000¥ ienes]\n\`use a!buy waifu <quantidade> para comprar  uma waifu\`\n<:dois:831983266537799680>. **Animes** - [2.000¥ ienes]\n\`use a!buy anime <quantidade> para comprar um anime\`\n<:tres:831983323520827412>. **Mangás** - [1.000¥ ienes]\n\`use a!buy mangá <quantidade> para comprar um mangá\``)
                msg.edit(embed_two)
            })

            fun.on(`collect`, r =>{  
                let embd_two = new Discord.MessageEmbed()
                .setColor("#7500ff")
                    .setTitle(`Purple's Store  <:emoji_67:831362443656822854> <a:Dima_purple:831763668944551966>`)
                        .setThumbnail('https://cf.shopee.com.br/file/6fc5d8a2782deb64b7245b097ce81b4a')
                    .setDescription('**Utilitários:**\n*Anel De Noivado:100**₪** mangás [#buy anel]\nArma:50**₪** mangás [#buy arma]\nIsca: 2**₪** mangás [#buy isca]\nCarteira De Trabalho: 10**₪** mangás [#buy carteira]*')
                msg.edit(embd_two)
            })


            musica.on(`collect`, r =>{ 
                let embed_three = new Discord.MessageEmbed()
                .setColor("#7500ff")
                    .setTitle(`Purple's Store  <:emoji_67:831362443656822854> <a:Dima_purple:831763668944551966>`)
                        .setThumbnail('https://cf.shopee.com.br/file/6fc5d8a2782deb64b7245b097ce81b4a')
                    .setDescription('**Funções**\n*Amador: 5000₦ animes [#buy amador]\nShinigami: 250₦ animes [#buy shinigami]\nSaiyajin: 200₦ animes [#buy saiyajin]\nNinja: 150₦ animes [#buy ninja]\nHerói: 100₦ animes [#buy herói]\nHashira: 50₦ animes [#buy hashira]*')
                msg.edit(embed_three)
            })


            voltar.on(`collect`, r =>{ 
                let embed_five = new Discord.MessageEmbed()
        .setColor("#7500ff")
            .setTitle(`Purple's Store  <:emoji_67:831362443656822854> <a:Dima_purple:831763668944551966>`)
            .setDescription('**Perfis:**\n*Angelical: 50₩ waifus [#buy perfilangelical]\nHashira: 100₩ waifus [#buy perfilhashira]\nNinja: 200₩ waifus [#buy perfilninja]\nHerói: 300₩ waifus [#buy perfilherói]\nSaiyajin: 400₩ waifus [#buy perfilsaiyajin]\nShinigami: 500₩ waifus [#buy perfilshinigami]\nAmador: 1.000₩ waifus [#buy perfilamador]*')
            .setImage('https://i.imgur.com/5pwrGXx.png')
        msg.edit(embed_five)
            })
        })
    }}
