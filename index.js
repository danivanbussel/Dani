const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const bot = new discord.Client();


// bot status (NL : Community is online!)
bot.on("ready", async () => {
        console.log(`RaceTopia bot is online!`);
        bot.user.setActivity("voorbeeld.ip", { type: "PLAYING" });
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
                                .setDescription("``!ip`` - Alle Minecraft server informatie \n ``!rank`` - Alle rank informatie \n ``!regels`` - Om alle regels te lezen")
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
        






                // !giveaway
                if (command === `${prefix}giveaway`) {
                module.exports.run = async (bot, message, args) => {
 
                        // Argumenten die we later nodig hebben.
                        var item = "";
                        var time;
                        var winnerCount;
                     
                        // Nakijken als je perms hebt om dit command te doen.
                        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry jij kan dit niet doen");
                     
                        // !giveaway aantalWinnaars seconden itemOmTeWinnen.
                     
                        // Aantal winnaars opvragen.
                        winnerCount = args[0];
                        // Tijd hoelang het moet duren.
                        time = args[1];
                        // Welke prijs men kan winnen.
                        item = args.splice(2, args.length).join(' ');
                     
                        // Verwijder het bericht dat net is gemaakt door de gebruiker.
                        message.delete();
                     
                        // Verval datum berekenen.
                        var date = new Date().getTime();
                        var dateTime = new Date(date + (time * 1000));
                     
                        // Maak embed aan.
                        var giveawayEmbed = new discord.RichEmbed()
                            .setTitle("🎉 **GIVEAWAY** 🎉")
                            .setFooter(`Vervalt: ${dateTime}`)
                            .setDescription(item);
                     
                        // Verzend embed en zet de reactie op de popper.
                        var embedSend = await message.channel.send(giveawayEmbed);
                        embedSend.react("🎉");
                     
                        // Zet een timeout die na het aantal seconden af gaat.
                        setTimeout(function () {
                     
                            // Argumenten die we nodig hebben.
                            var random = 0;
                            var winners = [];
                            var inList = false;
                     
                            // Verkrijg de gebruikers die gereageerd hebben op de giveaway.
                            var peopleReacted = embedSend.reactions.get("🎉").users.array();
                     
                            // Hier gaan we al de mensen over gaan en kijken als de bot er tussen staan
                            // De bot moeten we uit de lijst weghalen en dan gaan we verder.
                            for (var i = 0; i < peopleReacted.length; i++) {
                                if (peopleReacted[i].id == bot.user.id) {
                                    peopleReacted.splice(i, 1);
                                    continue;
                                }
                            }
                     
                            // Hier kijken we na als er wel iemand heeft meegedaan.
                            if (peopleReacted.length == 0) {
                                return message.channel.send("Niemand heeft gewonnen dus de bot wint.");
                            }
                     
                            // Tijdelijk kijken we na als er te wienig mensen hebben mee gedaan aan de wedstrijd.
                            if (peopleReacted.length < winnerCount) {
                                return message.channel.send("Er zijn te weinig mensen die mee deden daarom heeft de bot gewonnen.");
                            }
                     
                            // Voor het aantal winnaars dat we eerder hebben opgegeven gaan we een random nummer aanmaken en de user in een array zetten.
                            for (var i = 0; i < winnerCount; i++) {
                     
                                inList = false;
                     
                                // Aanmaken van een random getal zodat we een user kunnen kiezen.
                                random = Math.floor(Math.random() * peopleReacted.length);
                     
                                // Als een winnaar al voorkomt in de winnaars lijst dan moeten we opnieuw gaan zoeken naar een andere winnaar.
                                for (var y = 0; y < winners.length; y++) {
                                    // Nakijken als de geslecteerde winnaar al in de lijst zit.
                                    if (winners[y] == peopleReacted[random]) {
                                        // We zetten i 1 minder zodat we opnieuw kunnen doorgaan in de lijst.
                                        i--;
                                        // We zetten dit op true zodat we weten dat deze al in de lijst zit.
                                        inList = true;
                                        break;
                                    }
                                }
                     
                                // Zit deze niet in de lijst gaan we deze toevoegen.
                                if (!inList) {
                                    winners.push(peopleReacted[random]);
                                }
                     
                            }
                     
                            // Voor iedere winnaar gaan we een bericht sturen.
                            for (var i = 0; i < winners.length; i++) {
                                message.channel.send("Proficiat " + winners[i] + `! Je hebt gewonnen **${item}**.`);
                            }
                     
                        }, 1000 * time);
                     
                     
                    }}
                     


        




















}






);























bot.login(process.env.token);
