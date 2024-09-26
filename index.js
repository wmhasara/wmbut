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
        .setURL('https://discord.gg/Warmuts')
        .setState('& N1tro Murah, Aman, Begaransi')
        .setName('Warmut S2')
        .setDetails('Menjual Berbagai 4pp Premium')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1282219539140055101/1288840152269193228/20240609_172952_0000.png?ex=66f6a56d&is=66f553ed&hm=31b275d314930360f4fc7fff04d2a6e24dea4e8e8c909d141197013f658ae088&=&format=webp&quality=lossless&width=480&height=480')
        .setAssetsLargeText('Testimoni 900+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1282219539140055101/1288840151782395935/verif.gif?ex=66f6a56d&is=66f553ed&hm=342a526646a3b3a554560aca648f3f988e7a5aa7a17526a90af9691d879f3d64&=')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/warmuts')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












