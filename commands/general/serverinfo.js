const Discord = module.require(`discord.js`);
const config = require(`../../config.json`);
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    let serverInfo = new Discord.RichEmbed()
        .setColor(`#FFA6F2`)
        .setTitle(`Server Information`)
        .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
        .setThumbnail(`https://i.pinimg.com/originals/c5/38/df/c538df94fc55387873b7d8aed4499786.jpg`) // Image is placeholder
        .addField(`Channel Count`, `<value>`, true)
        .addField(`Member Count`, `<value>`, true)
        .addField(`Role Count`, `<value>`, true)
        .addField(`Value 1`, `<value>`, true)
        .addField(`Value 2`, `<value>`, true)
        .addField(`Value 3`, `<value>`, true)

        message.channel.send(serverInfo);
};

module.exports.help = {
    name: `serverinfo`
};
