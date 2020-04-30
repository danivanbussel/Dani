const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.command = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

        if (err) console.log(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if (jsFiles.length <= 0) {
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
        if (commands) commands.run(bot, message, arguments);



}








        );




















        bot.login(process.env.token);
