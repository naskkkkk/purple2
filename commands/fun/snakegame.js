const Discord = require('discord.js');
const client = new Discord.Client();
const SnakeGame = require('snakecord')

module.exports = {
    name: 'snakegame',
    alias: ["cobra"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
async execute (client, message, args){
        const snakeGame = new SnakeGame({
            title: 'Snake Game',
            color: "GREEN",
            timestamp: true,
            gameOverTitle: "Game Over"
        });
        return snakeGame.newGame(message);
    }
}