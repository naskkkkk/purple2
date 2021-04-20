const mySecret = process.env['TOKEN']
const Discord = require('discord.js');
const Kitsu = require('kitsu.js');
const mongoose = require('mongoose');
const config = require("./config.json");
// //Defines mongoose
const blacklist = require('./schema/blacklist')

const client = new Discord.Client()



client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();

const Levels = require('discord-xp');
Levels.setURL(process.env.MONGOOSE)

const prefix = config.prefix;
// after client initialisation

client.kitsu = new Kitsu();
// after client initialisation
client.mongoose = require('./utils/mongoose');
//config({

//handler

//inicio de tudo
 
const fs = require('fs'); //Definimos fs

//Definimos readdirSync que também vai ser usado


//eventssssss


//Command Handler



client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const animalscommandFiles = fs.readdirSync('./commands/animals').filter(file => file.endsWith('.js'));

const configcommandFiles = fs.readdirSync('./commands/config').filter(file => file.endsWith('.js'));

const DevOnlycommandFiles = fs.readdirSync('./commands/DevOnly').filter(file => file.endsWith('.js'));


const economycommandFiles = fs.readdirSync('./commands/economy').filter(file => file.endsWith('.js'));

const funcommandFiles = fs.readdirSync('./commands/fun').filter(file => file.endsWith('.js'));

const gdcommandFiles = fs.readdirSync('./commands/gd').filter(file => file.endsWith('.js'));

const interactioncommandFiles = fs.readdirSync('./commands/interaction').filter(file => file.endsWith('.js'));

const LevelcommandFiles = fs.readdirSync('./commands/Level').filter(file => file.endsWith('.js'));

const modcommandFiles = fs.readdirSync('./commands/mod').filter(file => file.endsWith('.js'));

const warnscommandFiles = fs.readdirSync('./commands/warns').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of animalscommandFiles) {
    const command = require(`./commands/animals/${file}`);
    client.commands.set(command.name, command);
  
}

for (const file of configcommandFiles) {
    const command = require(`./commands/config/${file}`);
    client.commands.set(command.name, command);
  
}
for (const file of DevOnlycommandFiles) {
    const command = require(`./commands/DevOnly/${file}`);
    client.commands.set(command.name, command);
}
for (const file of economycommandFiles) {
    const command = require(`./commands/economy/${file}`);
    client.commands.set(command.name, command);
  
}

for (const file of funcommandFiles) {
    const command = require(`./commands/fun/${file}`);
    client.commands.set(command.name, command);
}

for (const file of gdcommandFiles) {
    const command = require(`./commands/gd/${file}`);
    client.commands.set(command.name, command);
}

for (const file of interactioncommandFiles) {
    const command = require(`./commands/interaction/${file}`);
    client.commands.set(command.name, command);
}

for (const file of LevelcommandFiles) {
    const command = require(`./commands/Level/${file}`);
    client.commands.set(command.name, command);
}

for (const file of modcommandFiles) {
    const command = require(`./commands/mod/${file}`);
    client.commands.set(command.name, command);
}
for (const file of warnscommandFiles) {
    const command = require(`./commands/warns/${file}`);
    client.commands.set(command.name, command);
  
}
 
 //Entrada



//
const states = [
  'Nask 🤑',
  'p!help'
]

client.on('ready', () => {

  setInterval(() => {
    function presence(){
      client.user.setPresence({
        status: 'on',
        activity: {
          name: states[Math.floor(Math.random() * states.length)],
          type: 'LISTENING',
        }
      })
    }
    presence()
  }, 10000)

})

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
} 





client.on("message", message => {
if (message.author.bot) return;
if (message.channel.type == 'dm')
return
if(message.content == '<@827106783465701377>' || message.content == '<@!827106783465701377>') {
return message.channel.send(`<a:partyGirl:830816605725917205>**|** Olá ${message.author}! Meu prefixo é  \`N!\`, para saber meus comandos digite \`N!help\``)
}
});

//evento de mensagem



client.on('message', (message) => { //Abrimos un evento message, isto é muito importante porque é onde estarão os comandos

// replace the files accordingly
    if (!message.content.startsWith(prefix)) return;
    blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) {
            if (!message.guild) return;
            if (!message.member) message.member = await message.guild.fetchMember(message);
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase();
            if (cmd.length == 0) return;
            let command = client.commands.get(cmd)
            if (!command) command = client.commands.get(client.aliases.get(cmd));
            if (command) command.run(client, message, args)
        } else {
            message.channel.send('You are blacklisted!')
        }
    })
  
  
//Definimos un prefix para usar //Definimos un prefix para usar


if(message.author.bot) return; //com isso, fazemos com que o bot não responda às mensagens de outros bots, o que o impedirá de entrar em loopsbucles
if(!message.content.startsWith(prefix)) return; //Aqui fazemos isso se a mensagem não começar com o prefixo, o bot não responderesponda

let usuario = message.mentions.members.first() || message.member; //Definimos usuario
const args = message.content.slice(prefix.length).trim().split(/ +/g); //Definimos o argumentos
const command = args.shift().toLowerCase(); //Definimos o comando


//Aquí irían los comandos que pondremos más adelante

//HANDLER

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)

}

});





fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));
    });
});

['command'].forEach(handler=>{
    require(`./handler/${handler}`)(client);
})

client.on('ready', () => {
    client.user.setActivity(`${prefix}help`)
    console.log(`${client.user.username} ✅`)
})
client.on('message', async message =>{
    
   
    //Levels
    const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`${message.author}, Parabéns! Você upo para o level **${user.level}**!`);
    }
    //
 

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    
   //blacklist aqui   
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

//--------------------------------------------------------------------------------------------------------------------\\







const WelcomeSchema = require('./schema/welcome-schema');

client.on("guildMemberAdd", async (member, guild) => {
    WelcomeSchema.findOne({ guildId: member.guild.id }, async (err, data) => {
        if(!data) return;

        const user = member.user;
        const channel = member.guild.channels.cache.get(data.channelId);
        const welcomemsg = data.welcomeMsg;

        channel.send(`<:Nask_enter:819931393919942676>**|** ${user} ` + welcomemsg)
    })
})



//-------------------------------------


try{   
     mongoose.connect(config.mongoPass,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    const Data = require("./schema/guilddata")
client.on("ready",()=>{
    console.log("Tutorial Bot is online")
})


client.on("message",async message =>{
try{
    if(message.channel.type !=="dm"){
        Data.findOne({
            guild:message.guild.id
        },(err,data) =>{
            if(err) console.log(err)
            if(!data){
                const newData = new Data({
                    guild:message.guild.id,
                    guildname:message.guild.name,
                    guildprefix:"!",
                })
                newData.save().catch(err=>console.log(err))
            }else{
                try{
                    let prefix = data.guildprefix;
                    if(!message.content.startsWith(prefix) || message.author.bot) return
                    const args = message.content.slice(prefix.length).trim().split(/ +/g)
                    const cmd = args.shift().toLowerCase()
                    if(cmd.length ===0) return;

                    let command = client.commands.get(cmd)
                    if(command)
                    if(!command) return
                    command.run(client,message,args)
                } catch(err) {console.log(err)}
            }
        })
    }else{
        let prefix = "!"
        if(!message.content.startsWith(prefix) || message.author.bot) return
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmd = args.shift().toLowerCase()
        if(cmd.length ===0) return;

        let command = client.commands.get(cmd)
        if(command)
            command.run(client,message,args)
        
        }
}catch(err){console.log(err)}
})}catch(err){console.log(err)}




client.on("guildMemberAdd", async (member) => {
    console.log(member.user.tag);
})
//Encerramento de evento
client.mongoose.init();
client.login(process.env.TOKEN)
