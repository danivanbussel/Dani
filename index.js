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

        




                const { Client, Collection } = require("discord.js");

                
const fs = require("fs");

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "me getting developed",
            type: "STREAMING"
        }
    }); 
});

client.on("message", async message => {
    const prefix = "_";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});






























                


        








        




















}






);























bot.login(process.env.token);
