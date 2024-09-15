const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1258311684334944286')
        .setType('PLAYING')
        .setURL('https://discord.gg/Warmut')
        .setState('& N1tro Murah, Aman, Begaransi')
        .setName('Warmut Store')
        .setDetails('Menjual Berbagai App Premium')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1282219539140055101/1284691299781574717/20240609_172952_0000.png?ex=66e78d82&is=66e63c02&hm=628900540cf54e77cd58d74cedcc48818230e921b6e7723aa43ae243228951e4&=&format=webp&quality=lossless&width=423&height=423')
        .setAssetsLargeText('Testimoni 850+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1282219539140055101/1284691300108472433/verif.gif?ex=66e78d82&is=66e63c02&hm=ef37fbe6971db90e25ba4aa1d86a7e8b8044a4f436cf509daa2eda55c8e361be&=')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/warmut')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












