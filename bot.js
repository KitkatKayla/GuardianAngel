

// Version (Local : VPS) control
//const auth = require(`/GABot/AuthToken/token.json`) // Edit file path for local token.json file
const auth = require(`../token.json`)


const config = require(`./config.json`);
const discord = require(`discord.js`);
const fs = require(`fs`);

const prefix = config.prefix;

//starting series
const bot = new discord.Client();
bot.commands = new discord.Collection();

bot.on(`ready`, async () => {
    console.log(`ONLINE | bot_${bot.user.username}`);

    bot.user.setActivity(`${config.prefix}help`, {type: `PLAYING`});
});

bot.login(auth.token);
// end of starting series
console.log(`----------------------------------------------`)



// prefix manager
bot.on(`message`, async message => {
    if(message.author.bot) return;
    if(message.channel.type === `dm`) return;

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
});
// end prefix manager



// command handler - test_commands
fs.readdir(`./commands/test_commands/`, (err, files) => {
    if(err) console.error(err);

    console.log(`Loading test_commands`);  
    let jsfiles = files.filter(f => f.split(`.`).pop() === `js`);           // splits file names into <name> + <extension>; grabs extention `js`.
    if(jsfiles.length <= 0){                                                // if number of files in destination (line 22) is <= 0, continue. Otherwise, line 32.
        console.log(`!!test_commands_ERROR!!`);
        console.log(`----------------------------------------------`);
        return;
    }                                                                       

    jsfiles.forEach((f, i) => {                                             // for each js file in destination (line 22), do the following.
        let props = require(`./commands/test_commands/${f}`);                             
        console.log(`${i + 1}: ${f} loaded`);
        bot.commands.set(props.help.name, props);
    });
    console.log(`----------------------------------------------`);
});
// end test-commands

//command handler - moderation
fs.readdir(`./commands/moderation/`, (err, files) => {
    if(err) console.error(err);

    console.log(`Loading moderation`);
    let jsfiles = files.filter(f => f.split(`.`).pop() === `js`);
    if(jsfiles.length <= 0){
        console.log(`!!moderation_ERROR!!`);
        console.log(`----------------------------------------------`);
        return;
    }

    jsfiles.forEach((f,i) => {
        let props = require(`./commands/moderation/${f}`);
        console.log(`${i + 1}: ${f} loaded`);
        bot.commands.set(props.help.name, props);
    });
    console.log(`----------------------------------------------`);
});
// end moderation

// command handler - general
fs.readdir(`./commands/general/`, (err, files) => {
    if(err) console.error(err);

    console.log(`Loading general`);
    let jsfiles = files.filter(f => f.split(`.`).pop() === `js`);
    if(jsfiles.length <= 0){
        console.log(`!!general_ERROR!!`);
        console.log(`----------------------------------------------`);
        return;
    }

    jsfiles.forEach((f,i) => {
        let props = require(`./commands/general/${f}`);
        console.log(`${i + 1}: ${f} loaded`);
        bot.commands.set(props.help.name, props);
    });
    console.log(`----------------------------------------------`);
});
// end general