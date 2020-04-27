const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

return message.channel.send(`Hallo ${author} test`);

}

module.exports.help = {
    name: "hallo"
}