const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

        // !help
        if (command === `${prefix}help`) {
            var botEmbed = new discord.MessageEmbed()
                    .setTitle("Alle customcommands")
                    .setColor("#29e53f")
                    .setThumbnail(`https://cdn.discordapp.com/attachments/695319903523045457/704031383676518471/RaceTopia_2.png`)
                    .setDescription("``!help`` - Voor alle command's \n ``!idee <idee>`` - Om je iedeen te delen voor de server \n ``!ip`` - Voor alle MCServer informatie \n ``!rank`` - Voor alle Rank informatie \n ``!regels`` - Om alle regels nog eventjes door te lezen")
                    .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');

            return message.channel.send(botEmbed);
    }

}

module.exports.help = { 
    name: "hallo"
}