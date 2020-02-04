module.exports.run = async (bot, message, args) => {

    let mod = message.member.hasPermission(`MANAGE_MESSAGES`);

    if(mod)
    message.author.send({embed: {
        color: 16754418,
        title: `Guardian Angel | Mod Commands`,
        description:
    `*Please note that \`modhelp\` may not contain all your avaliable commands. This section is strictly for commands intended for moderation.*
        
    These commands can only be accessed by \`Moderators\`
        
    **__୰ Power Cats ౿__**
    Excecutable by members of the \`୰ Power Cats ౿\` family or above
    • **kick** [@mention reason] - kicks the user
    • **ban** [@mention duration reason] - bans the user
        
    **__୰۾ Super Cats ۾౿__**
    Excecutable by members of the \`୰۾ Super Cats ۾౿\` family or above
    •
        
    **__୰۾ Ultimate Cats۾౿__**
    Excecutable by members of the \`୰۾ Ultimate Cats۾౿\` family or above
    •`
    }});

    else message.channel.send({embed: {
        color: 16711680,
        title: `❌ | You must be a part of the moderation team to execute this command`
    }});

}

module.exports.help = {
    name: "modhelp"
};