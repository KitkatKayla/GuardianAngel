const discord = module.require(`discord.js`);
const ms = module.require(`ms`);

module.exports.run = async(bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let kickReason = args.join(` `).slice(22);
    let log = message.guild.channels.find(channel => channel.name === `public-logs`);

    // permission check; ends the method if caster lacks the required permissions
    if(!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.channel.send({embed: {
        color: 16711680,
        description: `You are not permitted to use this command!`,
        author: {
            name: `ERROR ❌`

        }
    }
    });

    // permission check; ends the method if args[0] (mention) could not be found
    if(!user) return message.channel.send({embed: {
        color: 16711680,
        description: `The user you mentioned could not be found.`,
        author: {
            name: `ERROR ❌`
        }
    }
    });

    // permission check; ends the method if user being kicked is a moderator
    if(user.hasPermission(`MANAGE_MESSAGES`)) return message.channel.send({embed: {
        color: 16711680,
        description: `I cannot kick this user!`,
        author: {
            name: `ERROR ❌`
        }
    }
    });
    // end of permission checks

    // excecution
    // message.guild.member(user).kick(kickReason);

    // kick comnfirmation embed message
    (message.channel.send({embed: {     //`kicked from server` confirmation embed
        color: 65280,
        description: `✅ | **${user} has been kicked from the server.**`,
        author: {
            name: message.member.user.username,
            icon_url: message.author.avatarURL
            },
        footer: {
            text: `ID | ${user.id}`
            },
        timestamp: new Date()
    }
    }));

    // kick log embed message
    let kickEmbed = new discord.RichEmbed()
        .setAuthor(`Mod Action | Kick | ${user.user.tag}`, message.author.avatarURL)
        .setColor(`#FF0000`)
        .addField(`User`, `${user}`, true)
        .addField(`Moderator`, `${message.author}`, true)
        .addField(`Reason`, kickReason)
        .addField(`Date of Mod Action`, new Date())
        .setFooter(`ID | ${user.id}`,bot.user.avatarURL);

    // logging
    try {    
        log.send({embed: kickEmbed})    
        return;
    }
    catch(err) {
        message.channel.send({embed: {
            color: 16711680,
            description: `❌ | **No log channel found
            Hence, creating new log channel**`
        }
        });
        message.guild.createChannel(`logs`, {type: `text`});
    }

    // sets delay between creation of new `log` channel and log being sent to said channel
    // avoids bot attempting to send log prior to `log` channel creation
    setTimeout(() => {
        let newlogs = message.guild.channels.find(channel => channel.name === `logs`);
        newlogs.send({embed: kickEmbed})
    }, ms(`1.5s`));
}

module.exports.help = {
    name: `kick`
};