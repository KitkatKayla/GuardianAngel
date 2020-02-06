const Discord = module.require(`discord.js`);

module.exports.run = async(bot, message, args) => {
    let avatarList = message.mentions.users.map(user => {
        let AvatarEmbed = new Discord.RichEmbed()
        .setColor(`#FFA6F2`)
        .setTitle(`${user.username}\'s Avatar:`)
        .setImage(user.displayAvatarURL)

        message.channel.send(AvatarEmbed);
        });
}

module.exports.help = {
    name: "avatar"
};

//.setColor(`#FFA6F2`)