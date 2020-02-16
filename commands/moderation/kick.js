const Discord = module.require(`discord.js`);
const ms = module.require(`ms`);
const DateFormat = module.require(`dateformat`);
const config = require(`../../config.json`);

module.exports.run = async(bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let kickReason = args[1]
    let log = message.guild.channels.find(channel => channel.name === `public-logs`);

    // Checks
    // Permission check; ends the method if caster lacks the required permissions
    if(!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.channel.send({embed: {
        color: 16711680,
        description: `You are not permitted to use this command!`,
        author: {
            name: `ERROR ❌`

        }
    }});

    // Command syntax checks; checks whether enough arguments were made
    if(!kickReason || !args) return message.channel.send({embed: {
        color: 16711680,
        description: `Too few arguments were given. \n \n Usage: \`${config.prefix}kick <mention> <reason>\``,
        author: {
            name: `ERROR ❌`
        }
    }});

    let userAvatar = message.guild.member(message.mentions.users.first()).avatarURL // "avatarURL not defined" error when placed with other variables.

    // Permission check; ends the method if args[0] (mention) could not be found
    if(!user) return message.channel.send({embed: {
        color: 16711680,
        description: `A user by that name couldn't be found.`,
        author: {
            name: `ERROR ❌`
        }
    }});

    // Permission check; ends the method if user being kicked is a moderator
    if(user.hasPermission(`MANAGE_MESSAGES`)) return message.channel.send({embed: {
        color: 16711680,
        description: `I cannot kick this user!`,
        author: {
            name: `ERROR ❌`
        }
    }});
    // End of checks

    // Excecution
    // Message.guild.member(user).kick(kickReason);

    // Kick comnfirmation embed message
    message.channel.send({embed: {     // `kicked from server` confirmation embed
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
    });

    // Kick log embed message
    let kickEmbed = new Discord.RichEmbed()
        .setAuthor(`Mod Action | Kick | ${user.user.tag}`, userAvatar)
        .setColor(`#FF0000`)
        .addField(`User`, `${user}`, true)
        .addField(`Moderator`, `${message.author}`, true)
        .addField(`Reason`, kickReason)
        .addField(`Date of Mod Action`, DateFormat(new Date()))
        .setFooter(`ID | ${user.id} ${DateFormat(new Date())}`);

    // Logging
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

    // Sets delay between creation of new `log` channel and log being sent to said channel
    // Avoids bot attempting to send log prior to `log` channel creation
    setTimeout(() => {
        let newlogs = message.guild.channels.find(channel => channel.name === `logs`);
        newlogs.send({embed: kickEmbed})
    }, ms(`1.5s`));
};

module.exports.help = {
    name: `kick`
};