const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "buy",
    alias: ["comprar"],
    description: "sim",
    timeout: 1000,
  async execute (client, message, args){


    let user = message.author; 

    let author = db.fetch(`ienes_${message.guild.id}_${user.id}`)

    let me = db.fetch(`waifus_${message.guild.id}_${user.id}`)

    let tu = db.fetch(`mangas_${message.guild.id}_${user.id}`)

    let ha = db.fetch(`animes_${message.guild.id}_${user.id}`)
 

    if (args[0] == 'saiyajin') {
          let Embed = new Discord.MessageEmbed()
          .setColor("#7500ff")
    .setTitle('Saldo Insuficente <:emoji_67:831362443656822854> ❌')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de 200₦ animes para comprar a função de *Saiyajin***`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
        if (ha < 200) return message.channel.send(Embed)
        
        db.set(`funcao_${message.guild.id}_${user.id}`, 'Saiyajin')

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`**Você comprou a função de *Saiyajin* por 400.000¥ ienes**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`animes_${message.guild.id}_${user.id}`, 200)
        message.channel.send(Embed2)
    } else if(args[0] == 'hashira') {
    let Embed = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Saldo Insuficente <:emoji_67:831362443656822854> ❌')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de 50₦ animes para comprar a função de *Hashira***`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (ha < 50) return message.channel.send(Embed)
        
        db.set(`funcao_${message.guild.id}_${user.id}`, 'Hashira')

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`**Você comprou a função de *Hashira* por 50₦ animes**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`animes_${message.guild.id}_${user.id}`, 50)
        message.channel.send(Embed2)
     } else if(args[0] == 'herói') {
    let hero2 = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Saldo Insuficente <:emoji_67:831362443656822854> ❌')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de 100₦ animes para comprar a função de *Herói***`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (ha < 100) return message.channel.send(hero2)
        
        db.set(`funcao_${message.guild.id}_${user.id}`, 'Herói')

        let hero = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`**Você comprou a função de *Herói* por 100₦ animes**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`animes_${message.guild.id}_${user.id}`, 100)
        message.channel.send(hero)
       } else if(args[0] == 'ninja') {
    let ni2 = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Saldo Insuficente <:emoji_67:831362443656822854> ❌')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de 150₦ animes para comprar a função de *Ninja***`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (ha < 150) return message.channel.send(ni2)
        
        db.set(`funcao_${message.guild.id}_${user.id}`, 'Ninja')

        let hero = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`**Você comprou a função de *Ninja* por 150₦ animes**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`animes_${message.guild.id}_${user.id}`, 150)
        message.channel.send(hero)
     } else if(args[0] == 'shinigami') {
    let gami = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Saldo Insuficente <:emoji_67:831362443656822854> ❌')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de 250₦ animes para comprar a função de *Shinigami***`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (ha < 250) return message.channel.send(gami)
        
        db.set(`funcao_${message.guild.id}_${user.id}`, 'Shinigami')

        let shini = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`**Você comprou a função de *Shinigami* por 250₦ animes**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`animes_${message.guild.id}_${user.id}`, 250)
        message.channel.send(shini)
    } else if(args[0] == 'amador') {
    let Embed = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Saldo Insuficente <:emoji_67:831362443656822854> ❌')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de  5000₦ animes para comprar a função de *Amador***`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (ha < 5000) return message.channel.send(Embed)
        
        db.set(`funcao_${message.guild.id}_${user.id}`, 'Amador')

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`**Você comprou a função de *Amador* por 10.000.000¥ ienes**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`animes_${message.guild.id}_${user.id}`,  5000)
        message.channel.send(Embed2)
    } else if(args[0] == 'waifu') {

            let emb34567 = new Discord.MessageEmbed()
            .setColor("#7500ff")
        .setTitle('Pagamento negado <:emoji_67:831362443656822854> ❌')
        .setDescription(`**Você precisa escrever quantas waifus\n quer comprar, exemplo: a!buy waifu 100**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

      if (!args[1]) return message.reply(emb34567)
 
      let mama1 = (args[1])

         let mama = mama1 * 3000
         
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Ienes Insuficientes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
        .setDescription(`<:purple_chorando:832002026145448047> **Você precisa de ${mama}¥ ienes para comprar ${mama1} Waifu(s).**`);

          if (author < (args[1])) return message.channel.send(Embed2)
       
        db.fetch(`waifus_${message.guild.id}_${user.id}`)
        db.add(`waifus_${message.guild.id}_${user.id}`, (args[1]))
        let replies = ['Hinata','Raphtalia','Akame','Shiro','Mikasa','Yuno', 'Zero Two']

        let result = Math.floor((Math.random() * replies.length));
        let Embed3 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`<:purple_oclin:832024271471247411> **Você gastou ${mama}¥ ienes na ${replies[result]} .**`)
        .setThumbnail('https://data.whicdn.com/images/328829944/original.gif')
         .setFooter(`Você comprou ${args[1]} waifu(s)・Purple's Commands`, message.author.displayAvatarURL({format: "png"}))


        db.subtract(`ienes_${message.guild.id}_${user.id}`, mama)
        message.channel.send(Embed3)
    } else if(args[0] == 'anime') {

          let emb23467 = new Discord.MessageEmbed()
          .setColor("#7500ff")
        .setTitle('Pagamento negado <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
        .setDescription(`**Você precisa escrever quantos animes\n quer comprar, exemplo: a!buy anime 100**`)
         .setFooter("・Purples's Commands", message.author.displayAvatarURL({format: "png"}))

      if (!args[1]) return message.reply(emb23467)
      
      let papa1 = (args[1])

         let papa = papa1 * 2000

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Ienes Insuficentes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
        .setDescription(isca`<:purple_chorando:832002026145448047> **Você precisa de ${papa}¥ ienes para comprar ${papa1} Anime(s).**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (author < (args[1])) return message.channel.send(Embed2)
       
        db.fetch(`animes_${message.guild.id}_${user.id}`)
        db.add(`animes_${message.guild.id}_${user.id}`, (args[1]))
      
        let replies1 = ['Tate no Yuusha','Shingeki No Kyojin','One Piece','Naruto','Noragami','Kakegurui']
        
        let result1 = Math.floor((Math.random() * replies1.length));
        

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`<:purple_uau:832003077883297843> **Você gastou ${papa}¥ ienes em ${replies1[result1]}**`)
        .setThumbnail('https://pa1.narvii.com/6830/fd6806ec2cdfc07f6849efc57dcea99e8ef74a14_hq.gif')
         .setFooter(`Você comprou ${args[1]} anime(s)・Purple's Commands`, message.author.displayAvatarURL({format: "png"}))

        db.subtract(`ienes_${message.guild.id}_${user.id}`, papa)
        message.channel.send(Embed3)
    } else if(args[0] == 'mangá') {
      let emb234567 = new Discord.MessageEmbed()
      .setColor("#7500ff")
        .setTitle('Pagamento negado <:emoji_67:831362443656822854>  ❌')
        .setDescription(`**Você precisa escrever quantos mangás\n quer comprar, exemplo: a!buy mangá 100**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

      if (!args[1]) return message.reply(emb234567)

         let pema1 = (args[1])

         let pepa = pema1 * 1000
         
     let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setTitle('Ienes Insuficente <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
        .setDescription(`<:purple_chorando:832002026145448047> **Você precisa de ${pepa}¥ ienes para comprar ${pema1} Mangá(s)**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (author < (args[1])) return message.channel.send(Embed2)
       
        db.fetch(`mangas_${message.guild.id}_${user.id}`)
        db.add(`mangas_${message.guild.id}_${user.id}`, (args[1]))
        
        let replies2 = ['Death Note','Fullmetal Alchemist','The Seven Deadly Sins','Cavaleiros do Zodíaco','Vinland Saga','Boku No Pico']

        
       if (author < pepa) return message.channel.send(Embed2)(Embed2)
       
        let result2 = Math.floor((Math.random() * replies2.length));
        let Embed3 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`<:purple_uau:832003077883297843> **Você gastou ${pepa}¥ ienes em mangá(s) de ${replies2[result2]}**`)
        .setThumbnail('https://thumbs.gfycat.com/AfraidJoyfulCicada-small.gif')
         .setFooter(`Você comprou ${args[1]} mangá(s)・Purples's Commands`, message.author.displayAvatarURL({format: "png"}))


        db.subtract(`ienes_${message.guild.id}_${user.id}`, pepa)
        message.channel.send(Embed3)
        } else if(args[0] == 'isca') {

            let embb34567 = new Discord.MessageEmbed()
            .setColor("#7500ff")
        .setTitle('Pagamento negado <:emoji_67:831362443656822854> ❌')
        .setDescription(`**Você precisa escrever quantas iscas\n quer comprar, exemplo: a!buy iscas 100**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

      if (!args[1]) return message.reply(embb34567)
 
      let caca1 = (args[1])

         let caca = caca1 * 2
         
        let Embedd2 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Ienes Insuficientes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
        .setDescription(`<:purple_chorando:832002026145448047> **Você precisa de ${caca}₪ Mangá(s) para comprar ${caca1} isca(s).**`);

          if (tu < (args[1])) return message.channel.send(Embedd2)
       
        db.fetch(`isca_${message.guild.id}_${user.id}`)
        db.add(`isca_${message.guild.id}_${user.id}`, (args[1]))
        let repliess = ['Hinata','Raphtalia','Akame','Shiro','Mikasa','Yuno', 'Zero Two']

        let resultt = Math.floor((Math.random() * repliess.length));
        let Embedd3 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`<:purple_oclin:832024271471247411> **Você gastou ${caca}₪ Mangá(s) na ${repliess[resultt]} .**`)
        .setThumbnail('https://data.whicdn.com/images/328829944/original.gif')
         .setFooter(`Você comprou ${args[1]} isca(s)・Purple's Commands`, message.author.displayAvatarURL({format: "png"}))


        db.subtract(`mangas_${message.guild.id}_${user.id}`, caca)
        message.channel.send(Embedd3)
    } else if(args[0] == 'carteira') {

        let mbd2 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Mangás Insuficentes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
        .setDescription(`<a:aganiScary:816355046899187713> **Você precisa de 10₪ mangás para comprar uma *Carteira De Trabalho***`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (tu < 10) return message.channel.send(mbd2)
        
        let un = db.fetch(`carteira_${message.guild.id}_${user.id}`)
        if (un) return message.reply("**Você já tem uma Carteira De Trabalho!**")

       

       db.fetch(`carteira_${message.guild.id}_${user.id}`);
       db.add(`carteira_${message.guild.id}_${user.id}`, 1)

        let mbd3 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`<a:aganiScary:816355046899187713> **Você comprou uma *Carteira De Trabalho***`)
        .setThumbnail('https://dourasoft.com.br/site/dourasoft2017/wp-content/uploads/2018/08/trabalho-4950788.jpg')
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`mangas_${message.guild.id}_${user.id}`, 10)
        message.channel.send(mbd3)
        } else if(args[0] == 'anel') {

        let mbed2 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Mangás Insuficentes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
        .setDescription(`<a:aganiScary:816355046899187713> **Você precisa de 100₪ mangás para comprar um *Anel De Noivado***`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (tu < 100) return message.channel.send(mbed2)
       

       db.fetch(`anel_${message.guild.id}_${user.id}`);
       db.add(`anel_${message.guild.id}_${user.id}`, 1)

        let mbd3 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`💍 **Você comprou um *Anel De Noivado***`)
        .setThumbnail('https://i1.wp.com/www.projetonoivinha.com.br/wp-content/uploads/2018/10/ANEL-NOIVADO.jpg?resize=570%2C380')
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`mangas_${message.guild.id}_${user.id}`, 100)
        message.channel.send(mbd3)
        } else if(args[0] == 'arma') {

        let mbd2 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Mangás Insuficentes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
        .setDescription(`<a:Pink_arminhaES:831675835420901446> **Você precisa de 50₪ mangás para comprar uma *Arma***`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (tu < 50) return message.channel.send(mbd2)

        let gun = db.fetch(`gun_${message.guild.id}_${user.id}`)
        if (gun) return message.reply("**Você já tem uma arma!**")

       

       db.fetch(`gun_${message.guild.id}_${user.id}`);
       db.set(`gun_${message.guild.id}_${user.id}`, "Sim")

        let mbed3 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setDescription(`<a:Pink_arminhaES:831675835420901446>  **Você comprou uma *Arma*!**`)
        .setThumbnail('https://media.tenor.com/images/bd308a3c4490186e6b2b2732d01a5561/tenor.gif')
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`mangas_${message.guild.id}_${user.id}`, 50)
        message.channel.send(mbed3)







            } else if(args[0] == 'perfilangelical') {
    let pang = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Ienes Insuficentes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de *500₩ waifus* para comprar o perfil de Angelical**`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (me < 50) return message.channel.send(pang)
        
        db.set(`perfil_${message.guild.id}_${user.id}`, 'https://i.imgur.com/9fcENik.png')

        let pan = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setThumbnail('https://64.media.tumblr.com/3737ea163225d288511708e94d283718/0ece1f10627d75b3-60/s540x810/341783e259b084775e7a64adc6e31e149602ab62.gifv')
        .setDescription(`**Você comprou o perfil de *Angelical* por 500₩ waifus**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`waifus_${message.guild.id}_${user.id}`, 50)
        message.channel.send(pan)

         } else if(args[0] == 'perfilamador') {
    let pang = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Waifus Insuficentes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de *10.000₩ waifus* para comprar o perfil de Amador**`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (me < 1000) return message.channel.send(pang)
        
        db.set(`perfil_${message.guild.id}_${user.id}`, 'https://i.imgur.com/GRncpIp.png')

        let pan = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setThumbnail('https://media.tenor.com/images/ef0dbad2fd4eb6e44eea8c5828c6f6d2/tenor.gif')
        .setDescription(`**Você comprou o perfil de *Amador* por 10.000₩ waifus**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`waifus_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(pan)


         } else if(args[0] == 'perfilsaiyajin') {
    let psai = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Waifus Insuficentes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de *3.000₩ waifus* para comprar o perfil de Saiyajin**`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (me < 400) return message.channel.send(psai)
        
        db.set(`perfil_${message.guild.id}_${user.id}`, 'https://i.imgur.com/nflTo2o.png')

        let psaiy = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setThumbnail('https://i.pinimg.com/originals/3c/12/d2/3c12d21db15adc211b61750e6ac1f404.gif')
        .setDescription(`**Você comprou o perfil de *Saiyajin* por 3.000₩ waifus**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`waifus_${message.guild.id}_${user.id}`, 400)
        message.channel.send(psaiy)
         } else if(args[0] == 'perfilherói') {
    let phero2 = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Waifus Insuficentes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de *3.000₩ waifus* para comprar o perfil de Herói**`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (me < 300) return message.channel.send(phero2)
        
        db.set(`perfil_${message.guild.id}_${user.id}`, 'https://i.imgur.com/Kk8xhHB.png')

        let phero = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setThumbnail('https://i.pinimg.com/originals/20/cf/c5/20cfc5833bcedb070c6e2e849a9c7823.gif')
        .setDescription(`**Você comprou o perfil de *Herói* por 3.000₩ waifus**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`waifus_${message.guild.id}_${user.id}`, 300)
        message.channel.send(phero)
    } else if(args[0] == 'perfilshinigami') {
    let pshi = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Waifus Insuficientes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de 5.000₩ waifus para comprar o perfil de *Shinigami***`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (me < 500) return message.channel.send(pshi)
        
        db.set(`perfil_${message.guild.id}_${user.id}`, 'https://i.imgur.com/UApPNdF.png')

        let phero = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setThumbnail('https://media.tenor.com/images/6ec5bda0bd2c38c8b32f69ba21822f29/tenor.gif')
        .setDescription(`**Você comprou o perfil de *Shinigami* por 5.000₩ waifus**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`waifus_${message.guild.id}_${user.id}`, 500)
        message.channel.send(phero)
    } else if(args[0] == 'perfilninja') {
    let pninj = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Waifus Insuficientes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de 2.000₩ waifus para comprar o perfil de *Ninja***`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (me < 200) return message.channel.send(pninj)
        
        db.set(`perfil_${message.guild.id}_${user.id}`, 'https://i.imgur.com/ugDcT2J.png')

        let pni = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setThumbnail('https://i.pinimg.com/originals/a9/5e/b1/a95eb1fc438f4d6cabb3df84da50b774.gif')
        .setDescription(`**Você comprou o perfil de *Ninja* por 2.000₩ waifus**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`waifus_${message.guild.id}_${user.id}`, 200)
        message.channel.send(pni)

         } else if(args[0] == 'perfilhashira') {
    let phash = new Discord.MessageEmbed()
    .setColor("#7500ff")
    .setTitle('Waifus Insuficentes <:emoji_67:831362443656822854> <a:grr:831992644317216778>')
    .setDescription(`<:dollarmoney:814776832779354132> **Você precisa de 1.000₩ waifus para comprar o perfil de *Hashira***`)
     .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        if (me < 100) return message.channel.send(phash)
        
        db.set(`perfil_${message.guild.id}_${user.id}`, 'https://i.imgur.com/YpLRhJK.png')

        let pha = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setTitle('Compra efetuada <:emoji_67:831362443656822854> <a:pr_check02:831327513094651924>')
        .setThumbnail('https://media.tenor.com/images/7d468252f37a625ccb992723ca5760d8/tenor.gif')
        .setDescription(`**Você comprou o perfil de *Hashira* por 1.000₩ waifus**`)
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))

        db.subtract(`waifus_${message.guild.id}_${user.id}`, 100)
        message.channel.send(pha)

    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("#7500ff")
        .setDescription('<:c_form:831976985227558960> **Use o comando p!lojinha e escreva um item para comprar**')
         .setFooter("・Purple's Commands", message.author.displayAvatarURL({format: "png"}))
        message.channel.send(embed3)
    }


}}