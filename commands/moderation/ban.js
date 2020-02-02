/*const Discord = module.require("discord.js");
const ms = module.require(`ms`);

module.exports.run = async (bot, message, args) => {
    let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {
        color: 16711680,
        description: "❌ | You are not permitted to use this command!",
        author: {
            name: "ERROR"
        }
    }
    });

    if(!User) return message.channel.send({embed: {
        color: 16711680,
        description: "This user cannot be found.",
        author: {
            name: "ERROR | ❌"
        }
    }
    });

    if(User.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {
        color: 16711680,
        description: "I cannot ban this user!",
        author: {
            name: "ERROR | ❌"
        }
    }
    });

    let banReason = args.join(" ").slice(22);

    let banEmbed = new Discord.RichEmbed()
    .setAuthor(`Mod Action | Ban | ${User.user.tag}`, message.author.avatarURL)
    .setColor("#FF0000")
    .addField("User", `${User}`, true)
    .addField("Moderator", `${message.author}`, true)
    .addField("Reason", banReason);
}
*/
module.exports.help = {
    name: "ban"
};
