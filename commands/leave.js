const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    bot.on("guildMemberRemove", member => {

        const channel = member.guild.channels.cache.find(c => c.name == "report");
                        if (!channel) console.log("Kan het kanaal niet vinden.");
        
        var joinEmbed = new discord.RichEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setColor("#FF0000")
        .setTimestamp()
        .setFooter("Gebruiker Geleaved.");
        
                        channel.send(joinEmbed);
        
                });

}

module.exports.help = {
    name: "leave"
}