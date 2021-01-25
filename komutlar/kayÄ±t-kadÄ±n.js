const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  
  // 12. SATIR 2. KADIN ROLÜ
  
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
const kayıtlı = message.guild.roles.find(r => r.id === "kadın rol id");
//const female = message.guild.roles.find(r => r.id === "kadın rol2 id");  2. KADIN ROLÜNÜ AÇMAK İÇİN BAŞTAIKİ // BUNLARI SİL
const misafir = message.guild.roles.find(r => r.id === "unregister rol id"); 
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  
  
  
  
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  const log = message.guild.channels.find(c => c.id === "hoşgeldin log id"); 
  const genelchat = message.guild.channels.find(c => c.id === "genel chat id"); 
  const dogrulandi = client.emojis.find(emoji => emoji.name === "emoji ismi"); 
  if(!message.member.roles.array().filter(r => r.id === "register id")[0]) { 
    
//------------------------------------KANALLAR-----------------------------------\\    STG
    



    
//------------------------------------------------ROL-VERME-----------------------------------------------\\     STG
    
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.addRole(kayıtlı)
 //   c.addRole(female) 2. KADIN ROLÜNÜ AÇMAK İÇİN BAŞTAIKİ // BUNLARI SİL
    c.removeRole(misafir)
    
//------------------------------------------------ROL-VERME-----------------------------------------------\\    STG
    
    
    
    
    
    
//------------------------------------------------MESAJ-----------------------------------------------\\     STG
    
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**<@${c.user.id}>** adlı kişiye **<@&${kayıtlı.id}>** rolü verildi. !`)
    .setColor("0xb333aa")
    log.send(embed)
    message.react(dogrulandi)
    
        const agla = new Discord.RichEmbed()
  genelchat.send(` <EMOJİ EKLE> <@${c.user.id}>, Aramıza Hoş Geldin \n<EMOJİ EKLE> <- <#KANAL ID> Kanalından Kurallarımızı Okuyabilirsin \n<EMOJİ EKLE> <- **____"TAG"____** Tagımızı Alarak **Ailemizin Bir Parçası Olabilirsin.**`)  

//------------------------------------------------MESAJ-----------------------------------------------\\       STG

  
  
  
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "",
  usage: ""
};
   