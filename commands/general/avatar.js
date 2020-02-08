const Discord = module.require(`discord.js`);

module.exports.run = async(bot, message, args) => {

    if(!message.mentions.users.size) {
        let AvatarEmbed = new Discord.RichEmbed()
        .setColor(`#FFA6F2`)
        .setTitle(`${message.author.username}\'s Avatar:`)
        .setImage(message.author.displayAvatarURL)

        return message.channel.send(AvatarEmbed)
    };

    let avatarList = message.mentions.users.map(user => {
        let AvatarEmbed = new Discord.RichEmbed()
        .setColor(`#FFA6F2`)
        .setTitle(`${user.username}\'s Avatar:`)
        .setImage(user.displayAvatarURL)

        return message.channel.send(AvatarEmbed);
        });
};

module.exports.help = {
    name: "avatar"
};