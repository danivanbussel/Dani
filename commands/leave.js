const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    bot.on("guildMemberRemove", member => {

        const channel = member.guild.channels.cache.find(c => c.name == "test");
        if (!channel) console.log("Kan het kanaal niet vinden.");

        var joinEmbed = new discord.MessageEmbed()
                .setAuthor(`${member.user.tag} Heeft ons verlaten!`)
                .setDescription(`We zullen ${member} missen!`)
                .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/241/pleading-face_1f97a.png`)
                .setColor("#ff0000")
                .setTimestamp()
                .setFooter(`Gemaakt door: Dani van Bussel`, 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');

        channel.send(joinEmbed);

});


}

module.exports.help = {
    name: "leave"
}