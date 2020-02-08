const config = require(`../../config.json`);

module.exports.run = async (bot, message, args) => {
    let anyone = message.member.hasPermission(`SEND_MESSAGES`);
    let mod = message.member.hasPermission(`MANAGE_MESSAGES`);

    message.author.send({embed: {
        color: 16754418,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        timestamp: new Date(),
        title: `Guardian Angel | Commands`,
        description: 
    (`Guardian Angel is a custom bot, being designed to serve this server and possibly others in the future. I am being programmed to hopefully advance far enough to take priority over most of the other popular bots.

    • Type \`&help <command>\` for more info on that command!
    • DM \`Snowflake#1001\` for any bot idea submissions\n •Find out how you can help support the bot in ${message.guild.channels.get('668523943682113606').toString()}\n •My prefix is \`${config.prefix}\`. The option to change this is planned.
        
    **Command Information**
    Basic \`user\` command information:
    • **help** - this! :D
    • **modulehelp** - access my command modules
        
    **Staff**
    To access the \`mod\` command list:
    type \`${config.prefix}modhelp\``)
    }});

    message.channel.send({embed: {
        color: 16754418,
        description: `✅ | **Check your DMs!**`
    }});
}

module.exports.help = {
    name: `info`
};
