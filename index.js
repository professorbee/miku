const fs = require('fs');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const bot = new Discord.Client();

const configFile = fs.readFileSync('./config.json', 'utf-8');

const configData = JSON.parse(configFile);

bot.on('message', async message => {
    var prefix = '-'
    var msg = message.content;

    if (msg === prefix + 'miku') {
        const { username } = await fetch('https://plushmiku.xyz/api/random').then(response => response.json());
        message.channel.send('https://plushmiku.xyz' + username)
    }

    if (msg === prefix + 'help') {
        message.channel.send('Use "%miku" to send yourself a miku.');
    }

    if (msg === prefix + 'guilds') {
        message.channel.send(`Plush Miku is in ${bot.guilds.cache.size} servers!`)
    }
});

bot.login(configData.token);