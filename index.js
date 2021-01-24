var fs = require('fs');
var Discord = require('discord.js');
var bot = new Discord.Client();

const configFile = fs.readFileSync('./config.json', 'utf-8');

const configData = JSON.parse(configFile);

function getRandomMiku() {
    var files = fs.readdirSync('./photos');
    var item = "./photos/" + files[Math.floor(Math.random() * files.length)];
    return item
}

bot.on('message', message => {
    var prefix = '%'
    var msg = message.content;

    if (msg === prefix + 'miku') {
        message.channel.send('Miku', {
            files: [
                getRandomMiku()
            ]
        });
    }

    if (msg === prefix + 'help') {
        message.channel.send('Use "%miku" to send yourself a miku.');
    }
});

bot.login(configData.token);