const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + `  Demek Starwars Tamamdır!`)
    .setColor("#D2D2D2")
    .setDescription('')
  .setImage(`http://i.imgur.com/eCpwo6J.gif`)
  .setFooter('Bot İsmi | Star Wars', client.user.avatarURL)
  .setTimestamp()
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['starwars'],
  permLevel: 0
};

exports.help = {
  name: 'starwars',
  description: 'StarWars Gösterir',
  usage: 'starwars'
};
