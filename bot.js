const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    consle.log('I am ready!');
});

bot.on('message',(message) => {

    if(message.content == 'ur mom gay') {
        message.reply('no u');
    }

});

bot.login(process.env.'NDYwNjYzMjMwMzIzNDkwODE2.DhIbHg.94SA1TxyCGx12-cEZjRD6NO88Mg');
