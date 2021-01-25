const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
    const sadstriga = ''
    const embedyardim = new Discord.RichEmbed()
    .setColor('0xf0cdcd')
      .setTitle('**Emoji Nasıl Alınır ?**')
      .setDescription(':emoji: olarak yazın \nBirleştirin  \`\\` + :emoji: =  \`\\`:emoji: \nEnter Tuşuna Basın \nBunu Dilediğiniz Yere Yerleştirin.')
      .setImage('https://cdn.discordapp.com/attachments/729396822694428834/738514971234664528/discord-emoji-nasl-alnr.gif')
    message.channel.send(embedyardim).catch()
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [""],
    permLevel: 0
};
  
exports.help = {
    name: 'emoji',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};  