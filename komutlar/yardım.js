const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Dm Duyuru Bot")
.addField("+duyuru","Sunucudaki herkese duyuru yapar")
.addField("[KULLANIM] +duyuru [Metin]")

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    };
 
  exports.help = {
    name: 'help', 
    description: 'MEE6 HELP MENU',
    usage: 'help'
  };