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
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1282219539140055101/1287989526228107378/20240609_172952_0000.png?ex=66f38d38&is=66f23bb8&hm=362a2c4892f8b455fae11ec7cd05d5860fb35e0b91c909b98cd026b18776de6f&=&format=webp&quality=lossless&width=480&height=480')
        .setAssetsLargeText('Testimoni 900+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1282219539140055101/1287989526618312725/verif.gif?ex=66f38d38&is=66f23bb8&hm=df6778c66296715576462f511b7c830c1cbdbe27702802727befd3fecf412e71&=')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut Store', 'https://discord.gg/warmuts')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












