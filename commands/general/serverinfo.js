const Discord = module.require(`discord.js`);

//YET TO FINISH

module.exports.run = async (bot, message, args) => {
    let serverInfo = new Discord.RichEmbed()
        .setColor(`#FFA6F2`)
        .setTitle(`Server Information`)
        .setAuthor(`${message.guild.name}`)
        .setThumbnail(`${message.guild.iconURL}`) // server image
        .addField(`Channel Count`, `<value>`, true)
        .addField(`Member Count`, `${message.guild.memberCount}`, true)
        .addField(`Role Count`, `<value>`, true)
        .addField(`Value 1`, `<value>`, true)
        .addField(`Value 2`, `<value>`, true)
        .addField(`Value 3`, `<value>`, true)

        message.channel.send(serverInfo);
};

module.exports.help = {
    name: `serverinfo`
};
