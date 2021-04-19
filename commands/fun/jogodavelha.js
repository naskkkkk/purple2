const TicTacToe = require('discord-tictactoe'); 
const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const Jogo = new TicTacToe({ language: 'pt' }) 
module.exports = {
  name: "jogadavelha",
  alias: ["velha"],

execute (client, message, args){
client.on('message', message => { 
    if (message.content.startsWith('!ttt')) {
           Jogo.handleMessage(message);  // Inicia o Jogo
    } 
});
}
}