const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.command = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

        if(err) console.log(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if(jsFiles.length <=0) {
                console.log("Geen files beschikbaar");
                return;
        }

        jsFiles.forEach((f, i) => {

                var fileGet = require(`./commands/${f}`);
                console.log(`De File ${f} is geladen`);

                bot.command.set(fileGet.help.name, fileGet);
        })

});



// bot status (NL : Community is online!)
bot.on("ready", async () => {
        console.log(`RaceTopia bot is online!`);
        bot.user.setActivity("test.ip", { type: "PLAYING" });
});


        // !hallo
        bot.on('message', async message => {

                if (message.author.bot) return;
                        if (message.channel.type === 'dm') return;
                        var prefix = botConfig.prefix;
                        var messageArray = message.content.split(' ');
                        var command = messageArray[0];
                        var arguments = messageArray.slice(1);
                        var commands = bot.command.get(command.slice(prefix.length));
                        if(commands) commands.run(bot, message, arguments);


                 // !help
                 if (command === `${prefix}help`) {
                        var botEmbed = new discord.MessageEmbed()
                                .setTitle("Alle customcommands")
                                .setColor("#29e53f")
                                .setThumbnail(`https://cdn.discordapp.com/attachments/695319903523045457/704031383676518471/RaceTopia_2.png`)
                                .setDescription("``!ip`` - Alle Minecraft server informatie \n ``!rank`` - Alle rank informatie \n ``!regels`` - Om alle regels te lezen \n ``!ticketinformatie`` - Alle informatie over sticky het ticket systeem.")
                                .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
        
                        return message.channel.send(botEmbed);
                } 

        

                bot.on("guildMemberAdd", member => {
 
                        const channel = member.guild.channels.find("name", "report");
                        if (!channel) console.log("Kan het kanaal niet vinden.");
                     
                        var joinEmbed = new discord.RichEmbed()
                            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
                            .setDescription(`Hoi ${member.user.username}, **Welkom op de server**. Hier nog meer uitleg.`)
                            .setColor("#00FF00")
                            .setTimestamp()
                            .setFooter("Gebruiker gejoined.");
                     
                        channel.send(joinEmbed);
                     
                    });

                    bot.on("guildMemberRemove", member => {
 
                        const channel = member.guild.channels.find("name", "report");
                        if (!channel) console.log("Kan het kanaal niet vinden.");
                     
                        var joinEmbed = new discord.RichEmbed()
                            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
                            .setColor("#FF0000")
                            .setTimestamp()
                            .setFooter("Gebruiker Geleaved.");
                     
                        channel.send(joinEmbed);
                     
                    });



 






























                


        








        




















}






);























bot.login(process.env.token);
