const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const bot = new discord.Client();













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
                        if (command === `${prefix}hallo`) {
                        return message.channel.send('Hallo');
                }

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

                 // !ip
                if (command === `${prefix}ip`) {
                var botEmbed = new discord.MessageEmbed()
                        .setTitle("Server informatie")
                        .setColor("#29e53f")
                        .setThumbnail(`https://cdn.discordapp.com/attachments/695319903523045457/704031383676518471/RaceTopia_2.png`)
                        .addField("**__🔐Server ip__**", "{komt Soon!}")
                        .addField("**__🌎Server versie__**", "1.12.2 Optifine")
                        .addField("**__🔴Server status__**", "Offline")
                        .addField("**__🏡Gamemode Survival__**", "{komt Soon!}")
                        .addField("**__🔪Gamemode Onbekend__**", "{komt Soon!}")
                        .addField("**__🏁Gamemode Onbekend__**", "{komt Soon!}")
                        .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');

                return message.channel.send(botEmbed);
                }

                // !ranks
                if (command === `${prefix}rank`) {
                        var botEmbed = new discord.MessageEmbed()
                                .setTitle("Rank informatie")
                                .setColor("#29e53f")
                                .setThumbnail(`https://cdn.discordapp.com/attachments/695319903523045457/704031383676518471/RaceTopia_2.png`)
                                .setDescription("Voer het onderstaande command in om een specifiek rank informatie op te vragen!")
                                .addField("**__@[💼] Partner__**", "!rank-partner")
                                .addField("**__@[▶️] Youtuber__**", "!rank-youtuber")
                                .addField("**__@[🎦] Streamer__**", "!rank-streamer")
                                .addField("**__@[💎] Nitro booster__**", "!rank-nitrobooster")
                                .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
        
                        return message.channel.send(botEmbed);
                }
        
                // !rank-partner
                if (command === `${prefix}rank-partner`) {
                        var botEmbed = new discord.MessageEmbed()
                        .setTitle("**__[💼] Partner__**")
                        .setColor("#504fb6")
                        .setThumbnail(`https://cdn.discordapp.com/attachments/695319903523045457/704031383676518471/RaceTopia_2.png`)
                        .setDescription("Beschrijving")
                        .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
        
                        return message.channel.send(botEmbed);
                }

                // !rank-youtuber
                if (command === `${prefix}rank-youtuber`) {
                        var botEmbed = new discord.MessageEmbed()
                        .setTitle("**__[▶️] Youtuber__**")
                        .setColor("#504fb6")
                        .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/239/play-button_25b6.png`)
                        .setDescription("Beschrijving")
                        .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
        
                        return message.channel.send(botEmbed);
                }

                // !rank-streamer
                if (command === `${prefix}rank-streamer`) {
                        var botEmbed = new discord.MessageEmbed()
                        .setTitle("**__[🎦] Streamer__**")
                        .setColor("#504fb6")
                        .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/239/cinema_1f3a6.png`)
                        .setDescription("Beschrijving")
                        .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
        
                        return message.channel.send(botEmbed);
                }

                // !rank-nitrobooster
                if (command === `${prefix}rank-nitrobooster`) {
                        var botEmbed = new discord.MessageEmbed()
                                .setTitle("**__[💎] Nitro booster__**")
                                .setColor("#f242f5")
                                .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/gem-stone_1f48e.png`)
                                .setDescription("Beschrijving")
                                .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
        
                        return message.channel.send(botEmbed);
                }

                 // !regels
                 if (command === `${prefix}regels`) {
                var icon = message.guild.iconURL;
                var serverEmbed = new discord.MessageEmbed()
                        .setTitle("Regels!")
                        .setThumbnail(`https://www.managementimpact.nl/content/uploads/2017/08/Regels-272x181.jpg`)
                        .setImage('https://lh3.googleusercontent.com/proxy/RmFRXaOjwf7zjkifKR65UGTkRHBlGBr_PsQ_WQCvC1IEEPDy1EFESCYHPjNZJLPlyObMAgw-B1Wmff3SqswZUtsYivmOkIbTtJCHJS5fgtvdRRuyZG08PHTlINRdaBIlzSlC8-Ue-n9hntzlO9ALCouzmBrRQlDmaT-L68nESg')
                        .setColor("#ff0000")
                        .setDescription("Regels lees dit goed door @everyone")
                        .addField("**__📕| Reclame__**", "Reclame maken doormiddel van het sturen van een link is niet toegestaan. Wel mogen Partners reclame maken. Ook een DM sturen naar leden met reclame is verboden. Hiervoor wordt je verbannen.")
                        .addField("**__💬| Chatten__**", "Hou het gezellig voor iedereen. Ga dus niet onnodig staan spammen, of onnodig staan mentionen.")
                        .addField("**__🙏| Respect__**", "Toon respect naar andere leden en staff. Gewoon normaal doen zoals het hoort.")
                        .addField("**__🔞| 18+ content__**", "18+ content (NSFW content) sturen is in de gehele discord verboden.")
                        .addField("**__👮‍♂️| Voordoen als staff__**", "Jezelf voordoen als stafflid is verboden! Je mag natuurlijk wel andere leden helpen met problemen.")
                        .addField("**__🚫| Bedreigen__**", "Mensen bedreigen in deze discord server is ten strengste verboden! Ook schelden is verboden.", "test")
                        .addField("**__:raised_hand:|Verboden__**", "- Het is verboden om: 18+ (NSFW) content te sturen \n - Alle vormen van scamming, Screamers/earrapes op Youtube \n - in MP3 vorm of andere vormen \n - Haatdragende en/of racistische reclame te sturen \n - Alle soorten alts verkopen of weggeven of discords die beloven dat je geld/licenties/giftcards kunt krijgen voor iets [Rewards] \n - Alle discords die zich bezig houden met hacken of griefen \n - Alle reclameberichten met linkshortners (zoals adf.ly, of goo.gl) \n - Berichten met virussen te sturen \n - Berichten met advertenties te sturen (naar bijv. Marktplaats) \n - ✈Als je hier iets stuurt zoals nummer wordt de Privacy wet genergeert daarbij verbannen we u.")
                        .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');

                return message.channel.send(serverEmbed);



























                }

                // !ticketinfo
                if (command === `${prefix}ticketinfo`) {
                        var botEmbed = new discord.MessageEmbed()
                                .setTitle("**__Ticketinfo__**")
                                .setColor("#50a688")
                                .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/ticket_1f3ab.png`)
                                .setDescription("Klik op :tickets: om een Ticket aan te maken. \n\n hier kan je: \n Ranks kopen/aanvragen \n Vragen stellen \n En nog veel meer!")
                                .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
        
                        return message.channel.send(botEmbed);
                }
        
                // !suggestie-info
                if (command === `${prefix}suggestie-info`) {
                        var botEmbed = new discord.MessageEmbed()
                                .setTitle("Suggestie info")
                                .setColor("#29e53f")
                                .setThumbnail(`https://cdn.discordapp.com/attachments/695319903523045457/704031383676518471/RaceTopia_2.png`)
                                .setDescription("Iedereen kan een suggestie doen! Staff dus ook! met !suggest kan je iets aangeven wat je graag wil veranderen! dus als bijvoorbeeld: Je wilt een nieuwe emote in de discord. (je kan van alles insturen!) \n\n Je kan stemmen met een :negative_squared_cross_mark:  als je het een goed idee vind! \n\n Wil je dit liever niet in de server dan moet je stemmen met een :white_check_mark: \n\n we kunnen niet beloven dat het in de server komt maar we zullen er altijd kijken naar de mogelijkheden!")
                                .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
        
                        return message.channel.send(botEmbed);
                }








        




















}






);























bot.login(process.env.token);
